import { Header } from "@/components/Header";
import { ProjectsSlider } from "@/views/ProjectsSlider";

export function App() {
  return (
    <>
      <main className="relative w-[100dvw] h-[100dvh] overflow-x-hidden bg-main-gradient">
        <Header />
        <ProjectsSlider />
      </main>
    </>
  );
}
