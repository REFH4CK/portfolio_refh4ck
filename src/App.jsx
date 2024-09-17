import "./App.css";
import Header from "./components/Header";
import NavBar from "./NavBar";
import AboutMe from "./AboutMe";
import TechBoard from "./components/TechBoard";
import ProjectCard from "./components/ProjectCard";
import Button from "./components/Button";


function App() {
  return (
    <>
      <Header />
      <main className="container">
        <NavBar />
        <section className="container-info" id="about">
          <AboutMe />
          <div className="optButtons">
            <Button action='download' url='/src/assets/download/Andres Hernandez - CV.pdf' text='CV' />
            <Button action='mail' url='mailto:andres29ehr@gmail.com' text='Mail' />
          </div>
        </section>
        <section className="container-technologies" id="technologies">
          <TechBoard />
        </section>            
        <section className="container-projects" id="projects">
          <h2 className='container-projects-title'>Featured projects</h2>
          <ProjectCard />
        </section>
      </main>
    </>
  );
}

export default App;
