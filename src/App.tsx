import { useState } from "react";
import "./App.css";
import { Person } from "./Components/Person";
import { UserProvider } from "./Components/UserContextProvider";
import UserProfileEditor from "./Components/UserProfileEditor";

function App() {
  // let name: string = "sanjoy";
  // let age: number = 45;

  // let isMarried: boolean = true;
  // let ages: number[] = [45, 66];

  // const fetchUserData = () => ({ name: "Tom", age: 45, isMarried: true });

  // const userData = fetchUserData();

  const [user, setUser] = useState({ name: "sanjoy", email: "s@t.com" });

  const handleUpdate = (updatedUser: { name: string; email: string }) => {
    console.log("Updated User:", updatedUser);
    setUser(updatedUser);
    return (
      <UserProvider>
        {/* <Person name={"Sanjoy"} age={22} isMarried={false} />
      <Person
        name={userData.name}
        age={userData.age}
        isMarried={userData.isMarried}
      /> */}

        <div>
          <h1>User Profile</h1>
          <UserProfileEditor user={user} onUpdate={handleUpdate} />
          <div>
            <h2>Current User Info</h2>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
          </div>
        </div>
      </UserProvider>
    );
  };
}

export default App;
