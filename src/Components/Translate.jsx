import React, { useState } from "react";
import Covert from "./Covert";
import Dropdown from "./Dropdown";

const options = [
  {
    label: "yoruba",
    value: "yo",
  },
  {
    label: "igbo",
    value: "ig",
  },
  {
    label: "hausa",
    value: "ha",
  },
];
function Translate() {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");

  return (
    <div>
      <div className="ui form">
        <Dropdown
          label="select a language"
          options={options}
          selected={language}
          setSelected={setLanguage}
        />
        <div className="field">
          <label>Enter text</label>
          <input
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>

        <hr />
        <h3 className="ui header">Output </h3>
        <Covert language={language} text={text} />
      </div>
    </div>
  );
}

export default Translate;
