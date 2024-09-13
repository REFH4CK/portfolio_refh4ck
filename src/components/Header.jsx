import "./Header.css";
import logo from "../../public/ref.png";

function Header() {
  const icons = [
    {
      name: "Github",
      ion_name: "github",
      url: "https://www.github.com/REFH4CK",
    },
    {
      name: "Instagram",
      ion_name: "instagram",
      url: "https://www.instagram.com/r3fh4ck.dev/",
    },
    {
      name: "LinkedIn",
      ion_name: "linkedin",
      url: "https://www.linkedin.com/in/andresehr29/",
    },
  ];

  return (
    <>
      <header className="header">
        <img src={logo} className="logo" alt="refh4ck logo" />
        <nav className="navBar">
          <ul className="socialsList">
            {icons.map((icon, i) => (
              <li key={i}>
                <a
                  href={icon.url}
                  rel="noreferrer"
                  target="_blank"
                  className="social anchor"
                >
                  {icon.name}{" "}
                  <ion-icon name={`logo-${icon.ion_name}`}></ion-icon>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
