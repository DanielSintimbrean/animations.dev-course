import { useState } from "react";
import Exercise1 from "./exercices/01-button-spinner/index";
import Exercise2 from "./exercices/02-animate-height/index";
import Exercise3 from "./exercices/03-layout-animation/index";
import Exercise4 from "./exercices/04-game-list/index";

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
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
      {selected === "1" && <Exercise1/>}
      {selected === "2" && <Exercise2/>}
      {selected === "3" && <Exercise3/>}
      {selected === "4" && <Exercise4/>}
    </div>
  );
}
