interface PersonProps {
  name: string;
  age: number;
  isMarried: boolean;
}

export const Person = (props: PersonProps) => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>This Person is {props.isMarried ? "Married" : "Not Married"}</p>
    </div>
  );
};
