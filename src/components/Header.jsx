import { Logo } from "@/icons/Logo";
import { Github } from "@/icons/Github";
import { Instagram } from "@/icons/Instagram";
import { LinkedIn } from "@/icons/LinkedIn";

export function Header() {
  return (
    <>
      <header className="fixed z-50 top-0 w-full flex justify-center pt-8">
        <article className={`
          flex items-center justify-between gap-4
          bg-[#383653] p-4 px-8 rounded-full 
          backdrop-blur-[10rem] shadow-xl
          xsm:w-[95%] xsm:px-2 xsm:p-2 xsm:justify-center
          xs:w-[90%] xs:p-2 xs:px-2 xs:justify-center
          sm:justify-between sm:px-6 sm:w-fit
          md:w-fit md:p-4 md:px-8`}>
          <span>
            <Logo />
          </span>
          <span
            className="xsm:w-[0.14rem] xsm:h-[1.30rem] xs:w-[0.1595rem] xs:h-[1.80rem] rounded-xl bg-[#FFFFFF30] md:block"
            role="splitter"
          ></span>
          <nav>
            <ul className="flex gap-5 xsm:gap-2 text-header-text">
              <li>
                <a href="#projects" className="xsm:text-[.65rem] xs:text-[.85rem] sm:text-[.9rem] md:text-[1.15rem] font-Darker text-xl text-header-text font-medium">Proyectos</a>
              </li>
              <li>
                <a href="#skills" className="xsm:text-[.65rem] xs:text-[.85rem] sm:text-[.9rem] md:text-[1.15rem] font-Darker text-xl text-header-text font-medium">Habilidades</a>
              </li>
              <li>
                <a href="#about" className="xsm:text-[.65rem] xs:text-[.85rem] sm:text-[.9rem] md:text-[1.15rem] font-Darker text-xl text-header-text font-medium">Sobre mí</a>
              </li>
              <li>
                <a href="mailto:refh4ck.dev@gmail.com" className="xsm:text-[.65rem] xs:text-[.85rem] sm:text-[.9rem] md:text-[1.15rem] font-Darker text-xl text-header-text font-medium">Contactame</a>
              </li>
            </ul>
          </nav>
          <span
            className="xsm:w-[0.14rem] xsm:h-[1.30rem] xs:w-[0.1595rem] xs:h-[1.80rem] rounded-xl bg-[#FFFFFF30] md:block"
            role="splitter"
          ></span>
          <div className="xsm:flex xsm:gap-1 xs:gap-3">
            <Github />
            <Instagram />
            <LinkedIn />
          </div>
        </article>
      </header>
    </>
  );
}
