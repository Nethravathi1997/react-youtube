import './App.css';
import {Greetings} from './Components/Greetings';
import { Button } from './Components/Button';

function App() { //pascal case

const button1Clicked = () => {
  alert("Button 1 Clicked")
}

const button2Clicked = () => {
  alert("I Love React")
}

const button3Clicked = () => {
  alert("India is Too Beautiful")
}


//JSX territory
  return (
    <div className="App">
      <Button onClick={button1Clicked} buttonText="Click Me" bgColor="green"/>
      <Button onClick={button2Clicked} buttonText="I am here" bgColor="pink"/>
      <Button onClick={button3Clicked} buttonText ="Press here" bgColor="Yellow"/>
    </div>
  );
}
//JSX territory
export default App;
