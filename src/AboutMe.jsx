import "./AboutMe.css";
import profile from "./assets/photo.jpg";

function AboutMe() {
  return (
    <>
      <article className="aboutMe">
        <img src={profile} alt="Profile photo Andres Hernandez" className="container-profilePhoto" />

        <article className="container-aboutMe">
          <p className="container-aboutMe-info">
            Hi there👋🏻! My name is <span className="aboutMe-name"><strong>Andrés Hernández</strong>.</span><br/><br/>
            I'm 21 years old and passionate about technology, computers and
            programming. I like to offer technological solutions to solve
            problems and I enjoy web development as much as a good cup of
            coffee.
          </p>
        </article>
      </article>
    </>
  );
}

export default AboutMe;
