import './App.css';
import Landing from './Components/Landing'
import ProjectsDisplay from './Components/ProjectsDisplay'
import projectsList from './Components/ProjectsList'
import NavBar from './Components/NavBar';
import Contact from './Components/Contact'
import ProjectSection from './ProjectSection';


function App() {
  return (
    <div className="App">
      <NavBar />
      
      <Landing />
    
      <ProjectSection />

      {/* wave divider */}
      <div className="spacer layer1"></div>
      <Contact />

    </div>
  );
}

export default App;
