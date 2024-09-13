import "./NavBar.css"

function NavBar() {

  const navOpts = [
    {option: "About Me", anchor: "about"},
    {option: "Technologies", anchor: "technologies"},
    {option: "Projects", anchor: "projects"}
  ]

  return (
    <>
      <nav className="navbar">
        <ul className="navbar-opt-list">
          {navOpts.map((opt, i) => (
            <li key={i} className="navbar-opt-list-item">
              <a href={`#${opt.anchor}`}>{opt.option}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default NavBar;