import React from "react";

interface Props {
  MenuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu = ({ MenuOpen, setMenuOpen }: Props) => {
  return (
    <div className="menu">
      <button
        className={`${MenuOpen && "menuopen"}`}
        onClick={() => {
          setMenuOpen(!MenuOpen);
        }}
      >
        <div className="bar"></div>
        <div className="bar"></div>
      </button>
    </div>
  );
};

export default Menu;
