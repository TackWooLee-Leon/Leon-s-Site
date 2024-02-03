import './App.css';
import Landing from './Components/Landing'
import ProjectsDisplay from './Components/ProjectsDisplay'
import projectsList from './Components/ProjectsList';

function App() {
  return (
    <div className="App">
      <Landing />
      <h1 id="projectHeader">Projects</h1>

      {projectsList.map((item)=> {
        return (<ProjectsDisplay info={item}/>)
      })}
      
    </div>
  );
}

export default App;
