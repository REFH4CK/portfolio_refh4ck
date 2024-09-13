import "./App.css";
import Header from "./components/Header";
import NavBar from "./NavBar";
import AboutMe from "./AboutMe";
import TechBoard from "./components/TechBoard";
import ProjectCard from "./components/ProjectCard";


function App() {
  return (
    <>
      <Header />
      <main className="container">
        <NavBar />
        <section className="container-info" id="about">
          <AboutMe />
        </section>
        <section className="container-technologies" id="technologies">
          <TechBoard />
        </section>            
        <section className="container-projects" id="projects">
          <ProjectCard />
        </section>
      </main>
    </>
  );
}

export default App;
