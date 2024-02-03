import './App.css';
import Landing from './Components/Landing'
import ProjectsDisplay from './Components/ProjectsDisplay'
import projectsList from './Components/ProjectsList'
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <Landing />
      <h1 id="projectHeader">Projects</h1>

      {projectsList.map((item)=> {
        return (<ProjectsDisplay info={item} key={item.name}/>)
      })}
      
    </div>
  );
}

export default App;
