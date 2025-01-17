import { Slider } from "@/components/Slider";

export function ProjectsSlider() {
  return (
    <>
      <section className="flex flex-col items-center w-full h-[100dvh] pt-[8.5rem] max-w-[2100px] mx-auto">
        <h1 className="text-white text-3xl font-Jura uppercase">Proyectos</h1>
        <Slider />
      </section>
    </>
  );
}
