import { Header } from "@/components/Header";
import { ProjectsSlider } from "@/views/ProjectsSlider";
import { Skills } from "@/views/Skills";
import { AboutMe } from "@/views/AboutMe";
import { Footer } from "@/components/Footer";

export function App() {
  return (
    <>
      <main className="relative w-[100dvw] h-[100dvh] overflow-x-hidden bg-mask bg-center bg-contain">
        <Header />
        <section
          id="projects"
          className="flex flex-col items-center w-full h-[100dvh] "
        >
          <ProjectsSlider />
        </section>
        <section
          id="skills"
          className="flex flex-col items-center w-full h-[100dvh] "
        >
          <Skills />
        </section>
        <section
          id="about"
          className="flex flex-col items-center w-full h-[100dvh] "
        >
          <AboutMe />
        </section>
        <Footer />
      </main>
    </>
  );
}
