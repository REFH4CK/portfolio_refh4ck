import "./AboutMe.css";
import profile from "./assets/photo.jpg";
import Button from "./components/Button";

function AboutMe() {
  return (
    <>
      <article className="aboutMe">
        <div className="photo-opts-container">
          <img
            src={profile}
            alt="Profile photo Andres Hernandez"
            className="container-profilePhoto"
          />
          <div className="optButtons">
            <Button
              action="download"
              url="/assets/CV-Andres-Hernandez.pdf"
              text="CV"
            />
            <Button
              action="mail"
              url="mailto:andres29ehr@gmail.com"
              text="Mail"
            />
          </div>
        </div>

        <article className="container-aboutMe">
          <h2 className="aboutMe-title">
            <ion-icon name="cafe-outline"></ion-icon>About Me
          </h2>

          <p className="container-aboutMe-info">
            Hi there👋🏻! My name is{" "}
            <span className="aboutMe-name">
              <strong>Andrés Hernández</strong>.
            </span>
            <br />
            I&apos;m 21 years old and passionate about technology, computers and
            programming. I like to offer technological solutions to solve
            problems.
            <br />
            <br />I really like web development and innovating with new ideas,
            discovering something new every day in this great world of
            programming. I also follow blockchain and web3 games.
          </p>
          <div className="container-aboutMe-exp">
            <h2 className="aboutMe-title">
              <ion-icon name="book-outline"></ion-icon>Education
            </h2>
            <ul>
              <li>
                <h3 className="company-name">
                  Universidad Politécnica Territorial de los Altos Mirandinos
                </h3>
                <span className="date">
                  (02/2021 - 11/2023) - Técnico Superior Universitario en
                  Informática
                </span>
              </li>
              <li>
                <h3 className="company-name">
                  Universidad Politécnica Territorial de los Altos Mirandinos
                </h3>
                <span className="date">
                  (02/2024 - Present) - Ingeniería en Informática
                </span>
              </li>
            </ul>

            <h2 className="aboutMe-title">
              <ion-icon name="briefcase-outline"></ion-icon>Work Experience
            </h2>
            <ul>
              <li>
                <h3 className="company-name">
                  Instituto Venezolano de Investigaciones Científicas
                </h3>
                <span className="date">(04/2023 - 11/2023) - Trainee</span>
                <p className="container-aboutMe-info min-size">
                  As a trainee, I had a programmer role where I developed,
                  together with my partner, two systems for the institute. One
                  of them was a medical appointment manager and the other a
                  dental appointment manager, both were built with technologies
                  such as HTML, PHP, JavaScript, CSS, and MySQL as a database
                  manager.
                </p>
              </li>
            </ul>
          </div>
        </article>
      </article>
    </>
  );
}

export default AboutMe;
