import PropTypes from "prop-types";
import { Pills } from "@/components/Pills";

export function SkillsCard({ title, techs, skills }) {
  return (
    <article
      className={`
        flex flex-col
        bg-skills-pills-container 
        w-full rounded-3xl p-4
        shadow-lg shadow-[#17192530] 
      `}
    >
      <h2 className="font-Jura text-white text-xl">{title}</h2>
      <section className="w-full p-2">
        <article className="xsm:w-full  flex flex-wrap xsm:gap-3 lg:gap-2 items-center">
          {techs && techs.map((tech, i) => <Pills key={i} skills={tech} />)}

          {skills &&
            skills.map((skill, i) => (
              <span
                key={i}
                className={`
                  flex justify-center items-center
                  bg-skills-pill lg:w-[9.1rem] h-[24px]
                  p-0 text-[0.75rem] rounded-full 
                  text-white/70 font-Jura font-medium
                  lg:text-sm outline outline-2 outline-skillsOutline/40
                  xsm:w-[7rem] xsm:text-[0.65rem]
                 `}
              >
                {/* w-[10rem]  h-[25px] p-4 px-0 */}
                {skill}
              </span>
            ))}
        </article>
      </section>
    </article>
  );
}

SkillsCard.propTypes = {
  title: PropTypes.string.isRequired,
  techs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.node.isRequired,
      color: PropTypes.string.isRequired,
    })
  ),
  skills: PropTypes.arrayOf(PropTypes.string),
};
