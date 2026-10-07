// Perspective sphere with skill nodes mapped to actual 3D coordinates.
type Point3D = {
    x: number;
    y: number;
    z: number;
    id?: number;
};
type LabelRect = {
    x: number;
    y: number;
    w: number;
    h: number;
};
/** Frozen Canvas projection, geometry and drawing from the approved handoff. */
export function createSkillNetwork(canvas: HTMLCanvasElement) {
    const context = canvas.getContext('2d');
    if (!context)
        return () => { };
    const ctx = context;
    const reduce = matchMedia('(prefers-reduced-motion: reduce)');
    let w = 1, h = 1, px = 0, py = 0, tx = 0, ty = 0, visible = true, frame = 0;
    const tau = Math.PI * 2, count = 112;
    const nodes: Point3D[] = [], edges: [
        number,
        number
    ][] = [];
    for (let i = 0; i < count; i++) {
        const y = 1 - 2 * (i + .5) / count, r = Math.sqrt(1 - y * y), a = i * Math.PI * (3 - Math.sqrt(5));
        nodes.push({ x: Math.cos(a) * r, y, z: Math.sin(a) * r, id: i });
    }
    const used = new Set();
    nodes.forEach((a, i) => nodes.map((b, j) => ({ j, d: Math.hypot(a.x - b.x, a.y - b.y, a.z - b.z) })).filter(b => b.j !== i).sort((a, b) => a.d - b.d).slice(0, 5).forEach(b => { const key = [Math.min(i, b.j), Math.max(i, b.j)].join(':'); if (!used.has(key)) {
        used.add(key);
        edges.push([i, b.j]);
    } }));
    const hubs = [{ x: 1.42, y: -.82, z: .38, label: 'SOFTWARE', kind: 0 }, { x: -1.35, y: .56, z: .65, label: 'DATA', kind: 1 }, { x: 1.2, y: 1.03, z: -.1, label: 'AUTOMATION', kind: 2 }];
    const skills = [
        { x: -.62, y: -.62, z: .55, label: 'Python' },
        { x: .44, y: -.72, z: .53, label: 'React' },
        { x: -.87, y: .05, z: .48, label: 'SQL' },
        { x: .04, y: -.05, z: .99, label: 'TypeScript' },
        { x: .86, y: -.05, z: .5, label: 'Next.js' },
        { x: -.44, y: .72, z: .53, label: 'Oracle APEX' },
        { x: .62, y: .64, z: .45, label: 'Git' },
        { x: -.32, y: -.4, z: -.86, label: 'Power BI' },
        { x: .28, y: .43, z: -.85, label: 'Figma' }
    ];
    function muted() { return reduce.matches || document.body.classList.contains('reduced'); }
    function schedule() { if (!frame && visible && !document.hidden)
        frame = requestAnimationFrame(tick); }
    function size() { const r = canvas.getBoundingClientRect(); w = r.width; h = r.height; const d = Math.min(devicePixelRatio || 1, 2); canvas.width = Math.round(w * d); canvas.height = Math.round(h * d); ctx.setTransform(d, 0, 0, d, 0, 0); schedule(); }
    function draw() {
        ctx.clearRect(0, 0, w, h);
        const scale = Math.min(w * .29, h * .255), cx = w * .56, cy = h * .48, yaw = .32 + px * .38, pitch = -.14 + py * .24;
        function project(n: Point3D) { const x = n.x * Math.cos(yaw) + n.z * Math.sin(yaw), z = -n.x * Math.sin(yaw) + n.z * Math.cos(yaw), y = n.y * Math.cos(pitch) - z * Math.sin(pitch), zz = n.y * Math.sin(pitch) + z * Math.cos(pitch), k = 3.7 / (3.7 - zz); return { x: cx + x * scale * k, y: cy + y * scale * k, z: zz, k, id: n.id ?? 0 }; }
        // Translucent light merges the network into the full-page atmosphere.
        const glow = ctx.createRadialGradient(cx - scale * .25, cy - scale * .3, 0, cx, cy, scale * 1.85);
        glow.addColorStop(0, 'rgba(239,233,221,.16)');
        glow.addColorStop(.38, 'rgba(195,199,202,.08)');
        glow.addColorStop(1, 'rgba(195,199,202,0)');
        ctx.fillStyle = glow;
        ctx.fillRect(0, 0, w, h);
        // A distant, sparse network establishes a second plane behind the sphere.
        ctx.save();
        ctx.filter = 'blur(1.3px)';
        for (let i = 0; i < 18; i++) {
            const p = project({ x: ((i * 7) % 19 / 18 - .5) * 3.3, y: ((i * 11) % 17 / 16 - .5) * 3, z: -1.6 });
            const q = project(nodes[(i * 7) % count]);
            ctx.strokeStyle = 'rgba(247,247,242,.09)';
            ctx.lineWidth = .65;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
            ctx.fillStyle = 'rgba(247,247,242,.2)';
            ctx.beginPath();
            ctx.arc(p.x, p.y, 1.3, 0, tau);
            ctx.fill();
        }
        ctx.restore();
        const points = nodes.map(project);
        edges.map(([a, b]) => ({ p: points[a], q: points[b], z: (points[a].z + points[b].z) / 2 })).sort((a, b) => a.z - b.z).forEach(({ p, q, z }) => { ctx.save(); if (z < -.4)
            ctx.filter = 'blur(.65px)'; ctx.strokeStyle = 'rgba(246,247,244,' + (.085 + (z + 1) * .155) + ')'; ctx.lineWidth = .3 + (z + 1) * .38; ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke(); ctx.restore(); });
        points.slice().sort((a, b) => a.z - b.z).forEach(p => { const r = (p.id % 17 === 0 ? 3 : 1.25) * p.k; ctx.save(); ctx.globalAlpha = .24 + (p.z + 1) * .35; if (p.z < -.4)
            ctx.filter = 'blur(.8px)'; if (p.z > .3) {
            ctx.shadowColor = '#fffff5';
            ctx.shadowBlur = p.id % 17 === 0 ? 16 : 5;
        } ctx.fillStyle = '#f6f7f2'; ctx.beginPath(); ctx.arc(p.x, p.y, r, 0, tau); ctx.fill(); ctx.restore(); });
        hubs.forEach((hub, i) => {
            const p = project(hub), anchor = points[[19, 68, 90][i]], radius = (w < 450 ? 15 : 20) * p.k;
            ctx.save();
            ctx.strokeStyle = 'rgba(245,246,242,.46)';
            ctx.lineWidth = .7;
            ctx.beginPath();
            ctx.moveTo(anchor.x, anchor.y);
            ctx.lineTo(p.x, p.y);
            ctx.stroke();
            ctx.shadowColor = 'rgba(250,250,245,.6)';
            ctx.shadowBlur = 17;
            ctx.fillStyle = '#e7e8e3';
            ctx.beginPath();
            ctx.arc(p.x, p.y, radius, 0, tau);
            ctx.fill();
            ctx.shadowBlur = 0;
            ctx.strokeStyle = '#454b55';
            ctx.lineWidth = 1.3;
            const x = p.x, y = p.y;
            if (hub.kind === 0) {
                ctx.beginPath();
                ctx.moveTo(x - 4, y - 5);
                ctx.lineTo(x - 9, y);
                ctx.lineTo(x - 4, y + 5);
                ctx.moveTo(x + 4, y - 5);
                ctx.lineTo(x + 9, y);
                ctx.lineTo(x + 4, y + 5);
                ctx.moveTo(x + 2, y - 7);
                ctx.lineTo(x - 2, y + 7);
                ctx.stroke();
            }
            if (hub.kind === 1) {
                for (let k = 0; k < 3; k++) {
                    ctx.beginPath();
                    ctx.ellipse(x, y - 5 + k * 5, 8, 3, 0, 0, tau);
                    ctx.stroke();
                }
                ctx.beginPath();
                ctx.moveTo(x - 8, y - 5);
                ctx.lineTo(x - 8, y + 5);
                ctx.moveTo(x + 8, y - 5);
                ctx.lineTo(x + 8, y + 5);
                ctx.stroke();
            }
            if (hub.kind === 2) {
                ctx.strokeRect(x - 8, y - 3, 5, 6);
                ctx.strokeRect(x + 3, y - 3, 5, 6);
                ctx.beginPath();
                ctx.moveTo(x - 3, y);
                ctx.lineTo(x + 3, y);
                ctx.moveTo(x, y - 6);
                ctx.lineTo(x, y - 1);
                ctx.stroke();
            }
            ctx.font = (w < 450 ? '9' : '10') + 'px Arial';
            ctx.textAlign = 'center';
            ctx.fillStyle = '#e8e4dc';
            ctx.fillText(hub.label, x, y + radius + 19);
            ctx.restore();
        });
        // Front and back labels follow perspective; opaque plaques preserve readability.
        const labels = skills.map(skill => ({ ...project(skill), label: skill.label })).sort((a, b) => a.z - b.z), occupied: LabelRect[] = [];
        labels.forEach(p => {
            const compact = w < 450, font = compact ? 10 : 12, boxH = compact ? 20 : 24;
            ctx.save();
            ctx.font = font + 'px Arial';
            const boxW = ctx.measureText(p.label).width + 16;
            const x = Math.max(4, Math.min(w - boxW - 4, p.x - boxW / 2));
            let y = p.y - boxH / 2;
            for (let tries = 0; tries < 8 && occupied.some(r => x < r.x + r.w + 4 && x + boxW + 4 > r.x && y < r.y + r.h + 4 && y + boxH + 4 > r.y); tries++)
                y += boxH + 5;
            occupied.push({ x, y, w: boxW, h: boxH });
            ctx.globalAlpha = p.z < -.2 ? .68 : 1;
            ctx.fillStyle = 'rgba(56,59,64,.88)';
            ctx.strokeStyle = p.z > .3 ? 'rgba(236,235,228,.55)' : 'rgba(236,235,228,.24)';
            ctx.lineWidth = .7;
            ctx.beginPath();
            ctx.roundRect(x, y, boxW, boxH, 5);
            ctx.fill();
            ctx.stroke();
            ctx.fillStyle = '#f4f0e8';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(p.label, x + boxW / 2, y + boxH / 2);
            ctx.restore();
        });
    }
    function tick() { frame = 0; if (muted()) {
        px = 0;
        py = 0;
    }
    else {
        px += (tx - px) * .055;
        py += (ty - py) * .055;
    } draw(); if (!muted() && (Math.abs(tx - px) + Math.abs(ty - py) > .001))
        schedule(); }
    const onPointer = (e: PointerEvent) => { if (e.pointerType === 'touch' || muted())
        return; tx = (e.clientX / innerWidth - .5) * 2; ty = (e.clientY / innerHeight - .5) * 2; schedule(); };
    const onScroll = () => { if (muted())
        return; ty = Math.min(scrollY / 700, 1) * .65; if (matchMedia('(pointer:coarse)').matches)
        tx = Math.min(scrollY / 500, 1); schedule(); };
    window.addEventListener('pointermove', onPointer, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('campo-motion-change', schedule);
    reduce.addEventListener('change', schedule);
    document.addEventListener('visibilitychange', schedule);
    const resizeObserver = new ResizeObserver(size);
    const intersectionObserver = new IntersectionObserver(e => { visible = e[0].isIntersecting; if (visible)
        schedule(); });
    resizeObserver.observe(canvas);
    intersectionObserver.observe(canvas);
    size();
    return () => {
        cancelAnimationFrame(frame);
        resizeObserver.disconnect();
        intersectionObserver.disconnect();
        window.removeEventListener('pointermove', onPointer);
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('campo-motion-change', schedule);
        reduce.removeEventListener('change', schedule);
        document.removeEventListener('visibilitychange', schedule);
    };
}
