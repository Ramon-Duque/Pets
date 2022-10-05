import { MouseEvent, useState } from "react";
import './ArrayEx.css'

export default function ArraysEx() {
  const [colors, setColors] = useState(["red", "orange", "yellow"]);

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

  const [pets, setPets] = useState([
    { name: "Fluffer Nutters", type: "cat", id: 0 },
    { name: "Mocha", type: "dog", id: 1 },
    { name: "Sophie", type: "hampster", id: 2 },
    { name: "Buttercup", type: "horse", id: 3 }
  ]);

  return (
    <div className="colors">
      <h1>Colors</h1>
      <ol>
        {colors.map((color, index) => (
          <li key={index}>{color}</li>
        ))}
      </ol>

      <button onClick={() => addColor("Green")}>Add Green</button>
      <button onClick={() => addColor("Blue")}>Add Blue</button>
      <button onClick={() => addColor("Violet")}>Add Violet</button>

      <h1>Pets</h1>
      <table className="table">
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Action</th>
        </tr>

        {pets.map((pet, index) => (
          <tr data-index={index}>
            <td>{pet.name}</td>
            <td>{pet.type}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
