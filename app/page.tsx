import Hero from "../components/sections/Hero";
import Skills from "../components/sections/Skills";
import Experience from "../components/sections/Experience";
import { ProjectsMarquee3D } from "../components/sections/ProjectsMarquee3D";
import Contact from "../components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Experience />
      <ProjectsMarquee3D />
      <Contact />
    </>
  );
}