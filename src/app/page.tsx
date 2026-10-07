import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import SelectedWork from "@/sections/SelectedWork";
import Process from "@/sections/Process";
import CatchGame from "@/components/campo/CatchGame";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return <><Navbar /><main><div className="trajectory" aria-hidden="true" /><Hero /><SelectedWork /><Process /><CatchGame /><About /><Contact /></main><Footer /></>;
}
