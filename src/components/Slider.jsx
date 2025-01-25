import projects from "@/data/projects.json";
import bitmates from "@/assets/images/projects/bitmates.png";
import pmissions from "@/assets/images/projects/pmissions.png";
import tracker from "@/assets/images/projects/tracker.png";
import { Link } from "@/icons/Link";

import { ReactLogo } from "@/icons/Competencies/ReactLogo"
import { NodeLogo } from "@/icons/Competencies/NodeLogo"
import { HtmlLogo } from "@/icons/Competencies/HtmlLogo"
import { JavaScriptLogo } from "@/icons/Competencies/JavaScriptLogo"
import { CssLogo } from "@/icons/Competencies/CssLogo"
import { TailwindLogo } from "@/icons/Competencies/TailwindLogo"
import { ExpressLogo } from "@/icons/Competencies/ExpressLogo"

import { useState } from "react";

export function Slider() {
  const projectsImgs = [bitmates, pmissions, tracker];
  const techs = {
    react: <ReactLogo />,
    node: <NodeLogo />,
    html: <HtmlLogo />,
    javascript: <JavaScriptLogo />,
    css: <CssLogo />,
    tailwind: <TailwindLogo />,
    express: <ExpressLogo />,
  }

  const [project, setProject] = useState(0);

  const handleImageSlider = (action, n) => {
    if (action === "forward") {
      if (n >= 3) {
        setProject(0);
      } else {
        setProject(n);
      }
    } else {
      if (n >= 0) {
        setProject(n);
      } else {
        setProject(2);
      }
    }
  };

  return (
    <>
      <article className="w-full xsm:h-[30rem] md:h-[45rem] lg:h-[30rem] mt-4">
        <div className="xsm:w-[95%] xsm:h-[60%] relative w-[60rem] lg:w-[55rem] xl:w-[60rem]  lg:h-[100%] mx-auto rounded-3xl select-none">
          <article className="relative left-0 flex justify-between items-center w-full h-full">
            <span
              onClick={() => handleImageSlider("back", project - 1)}
              className="flex justify-center cursor-pointer items-center w-6 h-8 bg-caret absolute xsm:left-1 lg:-left-8 rounded-md xsm:z-20 lg:z-0"
            >
              <ion-icon name="caret-back-outline"></ion-icon>
            </span>
            <span
              onClick={() => handleImageSlider("forward", project + 1)}
              className="flex justify-center cursor-pointer items-center w-6 h-8 bg-caret absolute xsm:right-1 lg:-right-8 rounded-md xsm:z-20 lg:z-0"
            >
              <ion-icon name="caret-forward-outline"></ion-icon>
            </span>
          </article>
          <img
            className="project absolute rounded-3xl top-0 left-0 z-10 size-[100%]"
            src={projectsImgs[project]}
          />

          <div
            className="absolute bottom-0 left-0 z-10 size-[100%] bg-overlay-1 rounded-[1.4rem]"
            role="overlay"
          ></div>
          <div
            className="absolute bottom-0 left-0 z-10 size-[100%] bg-overlay-2 rounded-[1.4rem] flex justify-center items-end pb-4"
            role="overlay"
          >
            <article id="project-card" className="text-white bg-[#282543] xsm:h-[10rem] xsm:w-[40rem] lg:h-[11rem] w-[35rem] xsm:p-4 rounded-[1rem] overflow-auto">
              <div>
                <div className="flex justify-between items-center py-2">
                  <a
                    target="_blank"
                    className="uppercase font-Jaro flex items-center gap-1 text-[#928BFE] underline underline-offset-4 xsm:text-2xl lg:text-3xl" 
                    href={projects[project].url}
                  >
                    <Link /> {projects[project].name}
                  </a>
                  <span className="p-2 flex gap-2 bg-[#FFFFFF15] rounded-lg">
                    {projects[project].technologies.map((tech, index) => (
                      <span key={index} title={tech}>{techs[tech]}</span>
                    ))}
                  </span>
                </div>
                <p className="text-sm">{projects[project].description}</p>
              </div>
            </article>
          </div>
        </div>
        <div className="relative w-[85%] mx-auto flex justify-center">
          <span className="absolute -bottom-12 z-7 xsm:w-[85%] lg:w-[50rem] xl:w-[52rem] h-[4rem] rounded-3xl bg-stack shadow-[#00000040] shadow-lg"></span>
          <span className="absolute -bottom-6 z-8  xsm:w-[97%] lg:w-[52rem] xl:w-[55rem] h-[4rem] rounded-3xl bg-stack shadow-[#00000040] shadow-lg"></span>
        </div>
      </article>
    </>
  );
}
