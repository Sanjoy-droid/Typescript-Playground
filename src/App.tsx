import "./App.css";
import { Person } from "./Components/Person";

function App() {
  // let name: string = "sanjoy";
  // let age: number = 45;

  // let isMarried: boolean = true;
  // let ages: number[] = [45, 66];

  return (
    <>
      <Person name={"Sanjoy"} age={22} isMarried={false} />
      <Person name={"Ray"} age={32} isMarried={true} />
    </>
  );
}

export default App;
