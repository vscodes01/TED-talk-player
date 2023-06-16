import React from "react";
import "./Header.css";

function Header(props) {
  const clickHandler = (event) => {
    props.onCategoryGetter(event.target.innerText);
  };

  return (
    <div className="header">
      <h3 className="title font-link">Top TEDs</h3>
      <h3 className="category font-link" onClick={clickHandler}>
        Happiness
      </h3>
      <h3 className="category font-link" onClick={clickHandler}>
        Psychology
      </h3>
      <h3 className="category font-link" onClick={clickHandler}>
        Efficiency
      </h3>
      <h3 className="category font-link" onClick={clickHandler}>
        Others
      </h3>
    </div>
  );
}

export default Header;
