import "./App.css";
import Header from "./components/Header";
import ProjectCard from "./components/ProjectCard";

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <section className="container-projects">
          <ProjectCard />
        </section>
      </main>
    </>
  );
}

export default App;
