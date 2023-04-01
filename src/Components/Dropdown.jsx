import React, { useState, useEffect, useRef } from "react";

function Dropdown({ options, selected, setSelected, label }) {
  //to toggle the slections and close or open
  const [open, setOpen] = useState(false);
  const ref = useRef();

  //to close the dropdown when clicked on body
  useEffect(() => {
    const onBodyClick = (e) => {
      //see whethet the elem clicked on is inseide the component
      if (ref.current.contains(e.target)) {
        return;
      }
      //if it wasnt, close the dropdown
      setOpen(false);
    };
    document.body.addEventListener("click", onBodyClick);

    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);

  const renderedOptions = options.map((option, index) => {
    //to remove the selected color from the list when selected
    if (option.value === selected.value) {
      return null;
    }
    return (
      <div key={index}>
        <div
          className="item"
          //passes the selected option into the the state
          onClick={() => {
            setSelected(option);
          }}
        >
          {option.label}
        </div>
      </div>
    );
  });

  return (
    <div ref={ref}>
      <div className="ui form">
        <div className="field">
          <label className="label">{label}</label>
          <div
            onClick={() => {
              setOpen(!open);
            }}
            //if clicked change the state of false and toggle these classes
            className={`ui selection dropdown ${open ? "visible active" : ""}`}
          >
            <i className="dropdown icon"></i>
            <div className="text"> {selected.label}</div>
            <div className={`menu ${open ? "visible transition" : ""}`}>
              {renderedOptions}
            </div>
          </div>
        </div>
      </div>
      {/* <div
        style={{
          color: selected.value,
          marginTop: "2rem",
          textAlign: "center",
        }}
      >
        {`This text is ${selected.value}`}
      </div> */}
    </div>
  );
}

export default Dropdown;
