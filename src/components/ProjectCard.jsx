import "./ProjectCard.css";
import projects from "../json/projects.json";
import tracker from "../assets/tracker.png";
import bitmates from "../assets/bitmates-info.png";
import pixels_missions from "../assets/pixels-missions.png";

const images = {
  bitmates,
  tracker,
  pixels_missions
};

function ProjectCard() {
  return (
    <>
      <article className="projects">
        {projects.map((project, index) => (
          <article key={index} className="projectCard">
            <div className="projectPreview">
              <a href={project.url} target="_blank">
                <img
                  src={images[project.presentation_image]}
                  alt={project.name}
                />
              </a>
            </div>
            <div className="projectInfo">
              <div className="overview">
                <a
                  className="projectName"
                  href={project.url}
                  rel="noreferrer"
                  target="_blank"
                >
                  {project.name}
                </a>
                <div className="techs">
                  {project.technologies.map((tech, index) => (
                    <ion-icon
                      key={index}
                      name={`logo-${tech}`}
                      title={`${tech}`}
                    ></ion-icon>
                  ))}
                </div>
              </div>
              <p className="projectDescription">{project.description}</p>
            </div>
          </article>
        ))}
      </article>
    </>
  );
}

export default ProjectCard;
