import './App.css';
import {Comp1, Comp2, Comp3, Comp4} from "./components"
import {Prva, Druga} from './drugi';

function App() {
  return (
    <div className="App">
      <Comp1></Comp1>
      <Comp2></Comp2>
      <Comp3></Comp3>
      <Comp4></Comp4>
      <Prva/>
      <Druga/>
    </div>
  );
}

export default App;
