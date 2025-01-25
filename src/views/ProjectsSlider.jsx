import { Slider } from "@/components/Slider";

export function ProjectsSlider() {
  return (
    <>
      <section className="flex flex-col justify-center items-center w-full xsm:h-fit lg:h-[100dvh] max-w-[1366px] mx-auto xsm:pt-28 lg:xsm:pt-0">
        <h1 className="text-white text-3xl font-Jura uppercase font-semibold">Proyectos</h1>
        <Slider />
      </section>
    </>
  );
}
