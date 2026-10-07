"use client";
import type { MouseEvent, ReactNode, RefObject } from "react";
export default function Dialog({ id, labelledBy, dialogRef, children }: {
  id: string; labelledBy: string; dialogRef: RefObject<HTMLDialogElement | null>; children: ReactNode;
}) {
  function dismissBackdrop(event: MouseEvent<HTMLDialogElement>) {
    const dialog = event.currentTarget;
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  }
  return <dialog id={id} aria-labelledby={labelledBy} ref={dialogRef} onClick={dismissBackdrop}>
    <button className="close" onClick={() => dialogRef.current?.close()}>Cerrar</button>{children}
  </dialog>;
}
