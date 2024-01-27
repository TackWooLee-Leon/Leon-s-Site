import './App.css';
import Landing from './Components/Landing'
import Projects from './Components/Projects'

const projects = [{
  src: '/images/math-wordle.png',
  alt: 'Math Wordle',
  description: 'This Math Wordle game is similar to the popular game Wordle. The code will generate a random calculation and calculate the output. Then it will display the output and the user has to correctly make up the calculation that equals to the output.',
  href: 'https://github.com/TackWooLee-Leon/Math-Wordle',
  name: 'Math Wordle'
},{
  src: '/images/budget-app.png',
  alt: "Budget App",
  description: 'This is a budget app that calculates how much money you would have after you entered your expenses. I used HTML and CSS to design the layout, and Javascript for the logic.',
  href: '',
  name: 'Budget App'
}]

function App() {
  return (
    <div className="App">
      <Landing />
      <h1 id="projectHeader">Projects</h1>
      {projects.map((item)=> {
        return (<Projects info={item}/>)
      })}
    </div>
  );
}

export default App;
