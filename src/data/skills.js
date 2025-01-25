// ## Competencies Logos
import { ReactLogo } from "@/icons/Competencies/ReactLogo";
import { CssLogo } from "@/icons/Competencies/CssLogo";
import { HtmlLogo } from "@/icons/Competencies/HtmlLogo";
import { JavaScriptLogo } from "@/icons/Competencies/JavaScriptLogo";
import { PhpLogo } from "@/icons/Competencies/PhpLogo";
import { TailwindLogo } from "@/icons/Competencies/TailwindLogo";
import { NodeLogo } from "@/icons/Competencies/NodeLogo";
import { ExpressLogo } from "@/icons/Competencies/ExpressLogo";
import { MySQLLogo } from "@/icons/Competencies/MySQLLogo";
// ######

// ## Techs Logos
import { AdobeXdLogo } from "@/icons/Techs/AdobeXdLogo";
import { DotenvLogo } from "@/icons/Techs/DotenvLogo";
import { FigmaLogo } from "@/icons/Techs/FigmaLogo";
import { GithubLogo } from "@/icons/Techs/GithubLogo";
import { GitLogo } from "@/icons/Techs/GitLogo";
import { TursoLogo } from "@/icons/Techs/TursoLogo";
import { ViteLogo } from "@/icons/Techs/ViteLogo";
import { VscodeLogo } from "@/icons/Techs/VscodeLogo";
// ######

import React from "react";

const createElement = React.createElement;

export const skillsInfo = [
  {
    title: "Competencias",
    techs: [
      { name: "React", icon: createElement(ReactLogo), color: "#61DAFB" },
      { name: "Node", icon: createElement(NodeLogo), color: "#6CC04A" },
      {
        name: "JavaScript",
        icon: createElement(JavaScriptLogo),
        color: "#F7DF1E",
      },
      { name: "CSS", icon: createElement(CssLogo), color: "#663399" },
      { name: "Tailwind", icon: createElement(TailwindLogo), color: "#06B6D4" },
      { name: "MySQL", icon: createElement(MySQLLogo), color: "#4479A1" },
      { name: "Express", icon: createElement(ExpressLogo), color: "#000000" },
      { name: "HTML", icon: createElement(HtmlLogo), color: "#E34F26" },
      { name: "PHP", icon: createElement(PhpLogo), color: "#777BB4" },
    ],
  },
  {
    title: "Tecnologías",
    techs: [
      { name: "VsCode", icon: createElement(VscodeLogo), color: "#007ACC" },
      { name: "Git", icon: createElement(GitLogo), color: "#F05033" },
      { name: "Dotenv", icon: createElement(DotenvLogo), color: "#ECD53F" },
      { name: "Vite", icon: createElement(ViteLogo), color: "#646CFF" },
      { name: "Turso", icon: createElement(TursoLogo), color: "#0ACF83" },
      { name: "Adobe", icon: createElement(AdobeXdLogo), color: "#FF61F6" },
      { name: "Github", icon: createElement(GithubLogo), color: "#181717" },
      { name: "Figma", icon: createElement(FigmaLogo), color: "#F24E1E" },
    ],
  },
  {
    title: "Habilidades blandas",
    skills: [
      "Proactivo",
      "Trabajo en equipo",
      "Adaptabilidad",
      "Disciplina",
      "Aprendizaje continuo",
      "Creatividad",
      "Autonomía",
      "Liderazgo",
    ],
  },
];
