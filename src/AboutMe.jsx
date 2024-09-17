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
            I&apos;m 21 years old and passionate about technology, computers and
            programming. I like to offer technological solutions to solve
            problems.
            <br/><br/>
            I really like web development and innovating with new ideas, discovering something new every day in this great world of programming. I also follow blockchain and web3 games.
          </p>
        </article>
      </article>
    </>
  );
}

export default AboutMe;
