import './App.css';
import Landing from './Components/Landing'
import ProjectsDisplay from './Components/ProjectsDisplay'
import projectsList from './Components/ProjectsList'
import NavBar from './Components/NavBar';
import Contact from './Components/Contact'


function App() {
  return (
    <div className="App">
      <NavBar />
      
      <Landing />

      <h1 id="projectHeader">Projects</h1>  
    
      {projectsList.map((item)=> {
        return (<ProjectsDisplay info={item} key={item.name}/>)
      })}

      <h1 id="contactHeader">Contact Me</h1>
      <Contact />

    </div>
  );
}

export default App;
