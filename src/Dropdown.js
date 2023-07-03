import { useState } from "react";

const Dropdown = () => {
  const [isActive, setActive] = useState(false);
  const [list] = useState(["Option 1", " Option 2", "Option 3" ,"All"]);
  const [value, setValue] = useState("");

  const onClickHandeler = (e) => {
    setValue(e.target.textContent);
    setActive(false);
  };

  const onMouseHover = () => {
    setActive(true);
  };
  const onClick = () => {
    setActive(!isActive);
  };

  const options = list.map((result, index) => {
    return (
      <a href="#" onClick={onClickHandeler} key={index}>
        {result}
      </a>
    );
  });

  return (
    <div className="dropdown">
      <h1>Dropdown-List App</h1>
      <h3>{value}</h3>
      <button className="dropbtn" onMouseEnter={onMouseHover} onClick={onClick}>
        Choose
      </button>
      <div
        className="dropdown-content"
        style={{ display: `${isActive ? "block" : "none"}` }}
      >
        {options}
      </div>
    </div>
  );
};

export default Dropdown;
