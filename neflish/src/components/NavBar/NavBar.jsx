import React from "react";
import "./NavBar.css";
import { IoSearch } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import profileIcon from "../../assets/caret_icon.svg";
import profileImg from "../../assets/profile_img.png";
import logo from "../../assets/logo.png";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="nav-left">
        <img src={logo} alt="" />
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/">Tv Shows</a>
          <a href="/">Movies</a>
          <a href="/">New & Popular</a>
          <a href="/">My List</a>
          <a href="/">Browse by Language</a>
        </div>
      </div>
      <div className="nav-right">
        <IoSearch />
        <p>Children</p>
        <FaBell />
        <div className="profile" title="Sign In">
          <img src={profileImg} alt="" className="profileImg" />
          <img src={profileIcon} alt="" />
        </div>
        <a href="/" className="signIn">
          Sign In
        </a>
      </div>
    </div>
  );
};

export default NavBar;
