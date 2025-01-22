import { SkillsCard } from "@/components/Cards/SkillsCard";
import { skillsInfo } from "@/data/skills";

export function Skills() {
  return (
    <>
      <article className="flex flex-col justify-center items-center w-full xsm:h-fit lg:h-[100dvh] pt-[0rem] 2xl:pt-[0rem] max-w-[1366px] mx-auto">
        <h1 className="text-white text-3xl font-Jura uppercase">Habilidades</h1>
        <section
          className={`
            overflow-hidden backdrop-blur-[1.5rem] 
            flex bg-skills-container/60
            xsm:w-[95%] xsm:h-[auto]
            xsm:flex-col-reverse xms:items-center
            lg:w-[60rem] lg:flex-row lg:h-[34rem] xl:w-[60rem]
            rounded-3xl outline outline-[5px]
            outline-skillsOutline/15 mt-8
          `}
        >
          <article className="flex flex-col justify-center items-center w-[50%]">
            <div
              className={`
                bg-programmer 
                bg-no-repeat w-full h-full
                bg-[length:650px_670px] 
                bg-[-2rem_0.5rem] 
                `}
              // bg-[length:785px_750px]
            ></div>
          </article>
          <article className="xsm:w-full xsm:gap-2 lg:gap-0 xsm:p-2 lg:w-[57%] h-full flex flex-col justify-between items-center  lg:p-2 lg:pl-0">
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
