import { Logo } from "@/icons/Logo";
import { Github } from "@/icons/Github";
import { Instagram } from "@/icons/Instagram";
import { LinkedIn } from "@/icons/LinkedIn";

export function Header() {
  return (
    <>
      <header className="fixed top-0 w-full flex justify-center pt-8">
        <article className={`
          flex items-center justify-between gap-4
          bg-[#FFFFFF20] p-4 px-8 rounded-full 
          backdrop-blur-[10rem] shadow-xl
          xs:w-[95%] xs:p-2 xs:px-2 xs:justify-center
          sm:justify-between sm:px-6 sm:w-fit
          md:w-fit md:p-4 md:px-8`}>
          <span className="">
            <Logo />
          </span>
          <span
            className="w-[0.1595rem] h-[1.80rem] rounded-xl bg-[#FFFFFF30] md:block"
            role="splitter"
          ></span>
          <nav>
            <ul className="flex gap-5 text-header-text">
              <li>
                <a href="#projects" className="xs:text-[.85rem] sm:text-[.9rem] md:text-[1.15rem] font-Darker text-xl text-header-text font-medium">Proyectos</a>
              </li>
              <li>
                <a href="#skills" className="xs:text-[.85rem] sm:text-[.9rem] md:text-[1.15rem] font-Darker text-xl text-header-text font-medium">Habilidades</a>
              </li>
              <li>
                <a href="#skills" className="xs:text-[.85rem] sm:text-[.9rem] md:text-[1.15rem] font-Darker text-xl text-header-text font-medium">Sobre mí</a>
              </li>
              <li>
                <a href="#contact" className="xs:text-[.85rem] sm:text-[.9rem] md:text-[1.15rem] font-Darker text-xl text-header-text font-medium">Contactame</a>
              </li>
            </ul>
          </nav>
          <span
            className="w-[0.1595rem] h-[1.80rem] rounded-xl bg-[#FFFFFF30] md:block"
            role="splitter"
          ></span>
          <div className="flex gap-3 md:flex">
            <Github />
            <Instagram />
            <LinkedIn />
          </div>
        </article>
      </header>
    </>
  );
}
