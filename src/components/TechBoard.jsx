import "./TechBoard.css";

function TechBoard() {
  const knowTechs = [
    { name: "HTML", img: "html5.svg" },
    { name: "CSS", img: "css.svg" },
    { name: "JavaScript", img: "javascript.svg" },
    { name: "React", img: "react.svg" },
    { name: "Node.js", img: "nodejs.svg" },
    { name: "PHP", img: "php.svg" },
    { name: "MySQL", img: "mysql.svg" },
    { name: "Git", img: "git.svg" },
    { name: "Vscode", img: "vscode.svg" },
    { name: "Github", img: "github-dark.svg" },
  ];

  return (
    <>
      <article className="container-board">
        <div className="container-board-grid">
          <h2 className="container-board-title">Knowledge Technologies and Tools</h2>
          {knowTechs.map((tech, i) => (
            <div key={i} className="tech">
              <img
                src={`https://svgl.app/library/${tech.img}`}
                alt={`Logo ${tech.name}`}
                className="logo-tech"
              />
              <p className="tech-name">{tech.name}</p>
            </div>
          ))}
        </div>
      </article>
    </>
  );
}

export default TechBoard;
