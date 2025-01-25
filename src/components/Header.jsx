import { Logo } from "@/icons/Logo";
import { Github } from "@/icons/Github";
import { Instagram } from "@/icons/Instagram";
import { LinkedIn } from "@/icons/LinkedIn";

export function Header() {
  return (
    <>
      <header className="fixed z-50 top-0 w-full flex justify-center pt-8">
        <article
          className={`
          flex items-center justify-between gap-4
          bg-[#383653] p-4 px-8 rounded-full 
          backdrop-blur-[10rem] shadow-xl
          xsm:w-[95%] xsm:px-2 xsm:p-2 xsm:justify-center
          xs:w-[90%] xs:p-2 xs:px-2 xs:justify-center
          sm:justify-between sm:px-6 sm:w-fit
          md:w-fit md:p-4 md:px-8`}
        >
          <span>
            <Logo />
          </span>
          <span
            className="xsm:w-[0.14rem] xsm:h-[1.30rem] xs:w-[0.1595rem] xs:h-[1.80rem] rounded-xl bg-[#FFFFFF30] md:block"
            role="splitter"
          ></span>
          <nav>
            <ul className="flex gap-5 items-center xsm:gap-2 md:gap-8 text-header-text">
              <li>
                <a
                  href="#projects"
                  className="xsm:text-[.65rem] xs:text-[.85rem] sm:text-[.9rem] md:text-[1.15rem] font-Darker text-xl text-header-text font-medium hover:text-[#FFFFFF] transition-colors"
                >
                  Proyectos
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="xsm:text-[.65rem] xs:text-[.85rem] sm:text-[.9rem] md:text-[1.15rem] font-Darker text-xl text-header-text font-medium hover:text-[#FFFFFF] transition-colors"
                >
                  Habilidades
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="xsm:text-[.65rem] xs:text-[.85rem] sm:text-[.9rem] md:text-[1.15rem] font-Darker text-xl text-header-text font-medium hover:text-[#FFFFFF] transition-colors"
                >
                  Sobre mí
                </a>
              </li>
              <li>
                <a
                  href="mailto:refh4ck.dev@gmail.com"
                  className="xsm:text-[.65rem] xs:text-[.85rem] sm:text-[.9rem] md:text-[1.15rem] font-Darker text-xl text-header-text font-medium hover:text-[#FFFFFF] transition-colors"
                >
                  Contactame
                </a>
              </li>
            </ul>
          </nav>
          <span
            className="xsm:w-[0.14rem] xsm:h-[1.30rem] xs:w-[0.1595rem] xs:h-[1.80rem] rounded-xl bg-[#FFFFFF30] md:block"
            role="splitter"
          ></span>
          <div className="xsm:flex xsm:gap-1 xs:gap-3">
            <a
              className="flex items-center justify-center"
              href="https://github.com/REFH4CK"
              target="_blank"
            >
              <Github />
            </a>
            <a
              className="flex items-center justify-center"
              href="https://www.instagram.com/refh4ck/"
              target="_blank"
            >
              <Instagram />
            </a>
            <a
              className="flex items-center justify-center"
              href="https://www.linkedin.com/in/andres-hr/"
              target="_blank"
            >
              <LinkedIn />
            </a>
            <a
              href="https://drive.google.com/file/d/19rfuESKEXynGgNdTrjLyhyFa-_ICWLtu/view?usp=sharing"
              target="_blank"
              className="p-2 w-8 h-8 justify-center items-center rounded-full text-white/80 outline outline-[#0acf8395] text-sm bg-white/5 text-center shadow-[#0acf8325] shadow-lg hover:bg-white/20 transition-colors xsm:hidden md:flex"
            >
              CV
            </a>
          </div>
        </article>
      </header>
    </>
  );
}
