import photo from "@/assets/images/me.png";

export function AboutMe() {
  return (
    <>
      <article className="flex flex-col items-center w-full h-[100dvh] pt-[8.5rem] max-w-[2100px] mx-auto">
        <h1 className="text-white text-3xl w-[60%] text-left font-Jura uppercase">Sobre mí</h1>
        <section className="relative flex gap-6 w-[55%] p-6 bg-slate-900/85 mt-8 rounded-2xl">
          <img src={photo} className="w-[20rem]" alt="Andres Hernadez Foto" />
          <p className="p-6 pt-12 w-[38rem] text-white/60 font-sans font-light">
            Mi nombre es <strong className="text-white/75">Andrés Hernández</strong>, y mi interés por el mundo de la
            programación comenzó a mediados de 2020, impulsado por una
            curiosidad innata por entender cómo funcionan las cosas. 
            <br /> <br />
            Me intrigaba descubrir cómo se construyen las páginas web y cómo es
            posible lograr interacción con el usuario a través del código. 
            <br /> <br />
            Desde ese momento, esta curiosidad se transformó en una verdadera pasión
            por la programación y la tecnología en general, llevándome a
            explorar, aprender y crecer continuamente en este apasionante campo.
          </p>
          <a href="mailto:refh4ck.dev@gmail.com" className="absolute left-[24.5rem] bottom-12 bg- p-2 rounded-full text-white/80 outline outline-[#0acf8370] text-sm bg-white/5">
            Disponible para trabajar
          </a>
        </section>
      </article>
    </>
  );
}
