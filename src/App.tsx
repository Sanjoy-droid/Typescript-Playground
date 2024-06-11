import "./App.css";
import { Person } from "./Components/Person";
import { UserProvider } from "./Components/UserContextProvider";

function App() {
  // let name: string = "sanjoy";
  // let age: number = 45;

  // let isMarried: boolean = true;
  // let ages: number[] = [45, 66];

  const fetchUserData = () => ({ name: "Tom", age: 45, isMarried: true });

  const userData = fetchUserData();
  return (
    <UserProvider>
      <Person name={"Sanjoy"} age={22} isMarried={false} />
      <Person
        name={userData.name}
        age={userData.age}
        isMarried={userData.isMarried}
      />
    </UserProvider>
  );
}

export default App;
