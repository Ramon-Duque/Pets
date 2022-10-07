import { FormEvent, MouseEvent, useState } from "react";
import './ArrayEx.css'

export default function ArraysEx() {
  const [colors, setColors] = useState(["red", "orange", "yellow"]);
  const [newPetName, setNewPetName] = useState<string>('')
  const [newPetType, setNewPetType] = useState<string>('')
  const [currentId, setCurrentId] = useState(4)

  const addNewPet = (event: FormEvent) => {
    event.preventDefault();
    setPets([...pets, {name: newPetName, type: newPetType, id: currentId}])
    setCurrentId(currentId + 1);
  }

 


  const addColor = (color: string) => {
    const newColor = colors.slice(0);
    newColor.push(color);
    setColors(newColor);
  };

  interface Pet {
    name: string;
    type: string;
    id: number;
  }

  const deletePet =(id: number)  => {
    const tempPets = pets.filter((pet) => pet.id !==id)
    setPets(tempPets)

  }

  const [pets, setPets] = useState<Pet[]>([
    { name: "Fluffer Nutters", type: "cat", id: 0 },
    { name: "Mocha", type: "dog", id: 1 },
    { name: "Sophie", type: "hampster", id: 2 },
    { name: "Buttercup", type: "horse", id: 3 }
  ]);

  console.log(newPetName)

  return (
    <div className="colors">
      <h1>Colors</h1>
      <ol>
        {colors.map((color, index) => (
          <li key={index}>{color}</li>
        ))}
      </ol>

      <button className="green" onClick={() => addColor("Green")}>Add Green</button>
      <button className="blue" onClick={() => addColor("Blue")}>Add Blue</button>
      <button className="violet" onClick={() => addColor("Violet")}>Add Violet</button>

      <h1>Pets</h1>

      <form onSubmit={addNewPet}>
        <label>Name:</label>
        <input value={newPetName}onChange= {event => setNewPetName(event.target.value)}></input>
        <label>Type:</label>
        <input value={newPetType}onChange= {event => setNewPetType(event.target.value)}></input>
        <input type= 'submit' value= 'Submit'></input>
      </form>

      <table className="table">
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Id</th>
        </tr>

        {pets.map((pet, index) => (
          <tr key={pet.id} data-index={index}>
            <td>{pet.name}</td>
            <td>{pet.type}</td>
            <td>{pet.id}</td>
            <td><button onClick={() => deletePet(pet.id)}>Delete</button></td>
          </tr>
        ))}
      </table>
    </div>
  );
}
