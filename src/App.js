import './App.css';
import TopNavbar from './TopNavbar';
import Introduction from './Introduction'
import Projects from './Projects'

function App() {
  return (
    <div className="App">
      <TopNavbar />
      <Introduction />
      <h1>Projects</h1>
      <Projects 
        info={{
          src: '/images/math-wordle.png',
          alt: 'Math Wordle',
          description: 'This Math Wordle game is similar to the popular game Wordle. The code will generate a random calculation and calculate the output. Then it will display the output and the user has to correctly make up the calculation that equals to the output. I used HTML and CSS for the layout of the project, then used Javascript for logic, such as generating the calculation and actually calculating it, ensuring the calculation is valid with ternary operator, adding eventListeners onto each button, changing the color of buttons and grid if the input matches with any number or sign in the actual calculation.'
        }}
      />
     
    </div>
  );
}

export default App;
