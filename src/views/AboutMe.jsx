import photo from "@/assets/images/me.png";

export function AboutMe() {
  return (
    <>
      <article className="flex flex-col justify-center items-center w-full xsm:h-fit lg:h-[100dvh] pt-[6rem] 2xl:pt-[0rem] max-w-[1366px] mx-auto mb-8">
        <h1 className="xsm:w-[95%] lg:mt-0 text-white text-3xl lg:w-[60rem] text-left font-Jura uppercase font-semibold">
          Sobre mí
        </h1>
        <section className="xsm:w-[95%] xsm:flex-col relative flex lg:flex-row gap-6 lg:w-[60rem] p-6 bg-slate-900/85 mt-8 rounded-2xl shadow-xl">
          <img src={photo} className="w-[20rem]" alt="Andres Hernadez Foto" />
          <div className="flex flex-col gap-4">
            <p className="pt-4 w-full text-pretty text-white/60 font-sans font-light">
              Mi nombre es{" "}
              <strong className="text-white/75">Andrés Hernández</strong>, y mi
              interés por el mundo de la programación comenzó a mediados de
              2020, impulsado por una curiosidad innata por entender cómo
              funcionan las cosas.
              <br /> <br />
              Me intrigaba descubrir cómo se construyen las páginas web y cómo
              es posible lograr interacción con el usuario a través del código.
              <br /> <br />
              Desde ese momento, esta curiosidad se transformó en una verdadera
              pasión por la programación y la tecnología en general, llevándome
              a explorar, aprender y crecer continuamente en este apasionante
              campo.
            </p>
            <a
              href="mailto:refh4ck.dev@gmail.com"
              className="p-2 rounded-full text-white/80 outline outline-[#0acf8395] text-sm bg-white/5 text-center shadow-[#0acf8325] shadow-lg hover:bg-white/20 transition-colors"
            >
              Disponible para trabajar
            </a>
          </div>
        </section>
      </article>
    </>
  );
}
