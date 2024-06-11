import { useContext, useState } from "react";
import { UserContext } from "../Components/UserContextProvider";
interface PersonProps {
  name: string;
  age: number;
  isMarried: boolean;
}

export const Person = (props: PersonProps) => {
  // const { users, addUser, updateUser, deleteUser } = useContext(UserContext);

  // const [isShowInfo, setIsShowInfo] = useState<boolean>(false);

  // const tooggleInfo = () => {
  //   setIsShowInfo(!isShowInfo);
  // };

  const [personBio, setPersonBio] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPersonBio(e.target.value);
  };

  return (
    <>
      <div>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>This Person is {props.isMarried ? "Married" : "Not Married"}</p>
      </div>
      {/* <button onClick={tooggleInfo}> ToggleInfo</button> */}

      <p>
        {props.name} Bio: {!personBio ? "No bio" : personBio}
      </p>

      <input onChange={handleChange} />
    </>
  );
};
