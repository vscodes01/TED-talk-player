import React from "react";
import "./Header.css";

function Header(props) {
  const clickHandler = (event) => {
    props.onCategoryGetter(event.target.innerText);
  };

  return (
    <div className="header">
      <h3 className="title">Top3 TEDs</h3>
      <h3 className="category" value="Happiness" onClick={clickHandler}>
        Happiness
      </h3>
      <h3 className="category" value="Psychology" onClick={clickHandler}>
        Psychology
      </h3>
      <h3 className="category" value="Efficiency" onClick={clickHandler}>
        Efficiency
      </h3>
    </div>
  );
}

export default Header;
