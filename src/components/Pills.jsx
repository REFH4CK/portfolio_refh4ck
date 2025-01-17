import PropTypes from "prop-types";
import clsx from "clsx";

export function Pills({ skills }) {
  const outlineColor = skills.color;

  return (
    <div
      className={clsx(
        "flex justify-center items-center gap-1 bg-skills-pill w-[10rem] h-[25px] p-4 rounded-full text-white/70 font-Jura font-medium text-md",
      )}
      style={{ outline: outlineColor ? `2px ${outlineColor}70 solid` : "none" }}
    >
      <span>{skills.name}</span>
      <span>{skills.icon}</span>
    </div>
  );
}

Pills.propTypes = {
  skills: PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    color: PropTypes.string.isRequired,
  }),
};
