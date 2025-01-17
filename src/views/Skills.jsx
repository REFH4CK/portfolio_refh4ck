import { SkillsCard } from "@/components/Cards/SkillsCard";
import { skillsInfo } from "@/data/skills";

export function Skills() {
  return (
    <>
      <article className="flex flex-col items-center w-full h-[100dvh] pt-[8.5rem] max-w-[2100px] mx-auto">
        <h1 className="text-white text-3xl font-Jura uppercase">Habilidades</h1>
        <section className="flex bg-skills-container/60 backdrop-blur-[1.5rem] w-[60%] h-[40rem] rounded-3xl outline outline-[5px] outline-skillsOutline/15 mt-8 overflow-hidden">
          <article className="flex flex-col justify-center items-center w-[50%]">
            <div
              className={`
                bg-programmer 
                bg-no-repeat w-full h-full
                bg-[length:785px_750px] 
                bg-[-2rem_0.5rem] 
              `}
            ></div>
          </article>
          <article className="w-[50%] h-full flex flex-col justify-between items-center p-6 pl-0">
            {skillsInfo.map((skill, i) => (
              <SkillsCard
                key={i}
                title={skill.title}
                techs={skill.techs || []}
                skills={skill.skills || []}
              />
            ))}
          </article>
        </section>
      </article>
    </>
  );
}
