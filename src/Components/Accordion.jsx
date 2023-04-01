import React, { useState } from "react";

function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index);
    console.log(index, "title clicked");
  };
  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? "active" : "";
    return (
      <React.Fragment key={index}>
        <div
          className={`title ${active}`}
          //arow method is used ere so the the coe knows to listen for a clicked bfo consoling
          onClick={() => onTitleClick(index)}
        >
          <i className="dropdown icon">{item.title}</i>
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderedItems}</div>;
}

export default Accordion;
