import React from "react";
import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsPersonCircle,
  BsSearch,
  BsJustify,
  BsGripVertical,
  BsBrightnessHighFill
} from "react-icons/bs";



function Header({ OpenSidebar }) {
  const h1Style = {
    textAlign: 'center',
    color: '#fffcfc' ,
  };
  return (
    <header className="header">
      <div className="menu-icon" data-testid="menu-icon">
        <BsJustify className="icon" onClick={OpenSidebar} />
      </div>
      <div className="header-left">
        <BsSearch className="icon" />
      </div>
      <div className="header-center"> 
        <h1 style={h1Style}>Food Recipe Finder</h1>
      </div>
      <div className="header-right">
      <BsBrightnessHighFill className="icon"/>
        <BsFillEnvelopeFill className="icon" />
        <BsFillBellFill className="icon" />
        <BsGripVertical className="icon" />
        <BsPersonCircle className="icon" />
      </div>
    </header>
  );
}

export default Header;
