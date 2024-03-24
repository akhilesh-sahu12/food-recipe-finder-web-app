import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillEnvelopeFill, BsSearch, BsPeopleFill, BsPersonLock, BsShop, BsFillGearFill, BsHouseDoorFill} from 'react-icons/bs';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className="sidebar-title">
        <Link to="/">
          <div className="sidebar-brand">
            <BsShop className="icon_header" /> Food Recipe Finder
          </div>
        </Link>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Link to="/">
            <BsHouseDoorFill className="icon" /> Home
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/recipes-search">
            <BsSearch className="icon" /> Recipe Search
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/dashboard">
            <BsPeopleFill className="icon" /> Dashboard
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/login">
            <BsPersonLock className="icon" /> Login
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/register">
            <BsPeopleFill className="icon" /> Register
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/settings">
            <BsFillGearFill className="icon" /> Settings
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/contact">
            <BsFillEnvelopeFill className="icon" /> Contact Us
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
