import About from "./components/About/about";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import NavBar from "./components/NavBar/navBar";
import Project from "./components/Project/project";
import Services from "./components/Services/services";
import Skills from "./components/Skills/skills";

function App() {
  return (
    <>
      <NavBar/>
      <Header/>
      <About/>
      <Services/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
