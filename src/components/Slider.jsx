import projects from "@/data/projects.json";
import bitmates from "@/assets/images/projects/bitmates.png";
import pmissions from "@/assets/images/projects/pmissions.png";
import tracker from "@/assets/images/projects/tracker.png";

import { useState } from "react";

export function Slider() {
  const projectsImgs = [bitmates, pmissions, tracker];

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
      <article className="w-full h-[40rem] mt-6">
        <div className="relative w-[60%] h-[100%] mx-auto rounded-3xl select-none">
          <article className="relative left-0 flex justify-between items-center w-full h-full">
            <span
              onClick={() => handleImageSlider("back", project - 1)}
              className="flex justify-center cursor-pointer items-center w-6 h-8 bg-caret absolute -left-8 rounded-md"
            >
              <ion-icon name="caret-back-outline"></ion-icon>
            </span>
            <span
              onClick={() => handleImageSlider("forward", project + 1)}
              className="flex justify-center cursor-pointer items-center w-6 h-8 bg-caret absolute -right-8 rounded-md"
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
            className="absolute bottom-0 left-0 z-10 size-[100%] bg-overlay-2 rounded-[1.4rem] flex justify-center items-end"
            role="overlay"
          >
            <article className="text-white">
              <div>
                <h3 className="uppercase font-Jaro">
                  {projects[project].name}
                </h3>
                <div>
                  
                </div>
              </div>
            </article>
          </div>
        </div>
        <div className="relative w-[85%] mx-auto flex justify-center">
          <span className="absolute -bottom-12 z-7 w-[62%] h-[4rem] rounded-3xl bg-stack shadow-[#00000040] shadow-lg"></span>
          <span className="absolute -bottom-6 z-8  w-[67%] h-[4rem] rounded-3xl bg-stack shadow-[#00000040] shadow-lg"></span>
        </div>
      </article>
    </>
  );
}
