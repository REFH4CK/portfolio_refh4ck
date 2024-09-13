import './TechBoard.css'

function TechBoard() {

  const knowTechs = [
    {name: "HTML", img: "https://svgl.app/library/html5.svg"},
    {name: "CSS", img: "https://svgl.app/library/css.svg"},
    {name: "JavaScript", img: "https://svgl.app/library/javascript.svg"},
    {name: "React", img: "https://svgl.app/library/react.svg"},
    {name: "Node.js", img: "https://svgl.app/library/nodejs.svg"},
    {name: "PHP", img: "https://svgl.app/library/php.svg"},
    {name: "MySQL", img: "https://svgl.app/library/mysql.svg"},
    {name: "Git", img: "https://svgl.app/library/git.svg"}
  ];

  return (
    <>
      <article className='container-board'>
        <div className='container-board-grid'>
          <h2 className='container-board-title'>Knowledge Technologies</h2>
          {knowTechs.map((tech, i) => (
            <div key={i} className='tech'>
              <img src={tech.img} alt={`Logo ${tech.name}`} className='logo-tech' />
              <p className='tech-name'>{tech.name}</p>  
            </div>
          ))}
        </div>
      </article>
    </>
  )
}

export default TechBoard