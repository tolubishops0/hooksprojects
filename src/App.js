import React, { useState } from "react";
import Accordion from "./Components/Accordion";
import Search from "./Components/Search";
import Dropdown from "./Components/Dropdown";
import Translate from "./Components/Translate";
const items = [
  {
    title: "what is react?",
    content: " recat is a frontend js frameword",
  },
  { title: "why use react?", content: " recat is a frontend js frameword" },
  {
    title: "how to use react?",
    context: "check the documentation",
  },
];
const options = [
  {
    label: "the color red",
    value: "red",
  },
  {
    label: "the color green",
    value: "green",
  },
  {
    label: "the color blue",
    value: "blue",
  },
];

function App() {
  // const [selected, setSelected] = useState(options[0]);
  // const [showDropDown, setShowDropDown] = useState(true);

  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search/> */}
      {/* <button onClick={() => setShowDropDown(!showDropDown)}>
        Toggle dropdown
      </button>
      {showDropDown ? (
        <Dropdown
          options={options}
          selected={selected}
          setSelected={setSelected}
        />
      ) : null} */}
      <Translate />
    </div>
  );
}

export default App;
