import { useState } from "react";
import Exercise1 from "./exercices/01-button-spinner/index";
import Exercise2 from "./exercices/02-animate-height/index";

export default function Example() {
  const [selected, setSelected] = useState("");

  return (
    <div className="">
      <div>
        <label htmlFor="pet-select">Choose a exercices:</label>

        <select
          name="pets"
          onChange={(e) => setSelected(e.target.value)}
          value={selected}
          id="pet-select"
        >
          <option value="">--Please choose an option--</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      {selected === "1" && <Exercise1/>}
      {selected === "2" && <Exercise2/>}
    </div>
  );
}
