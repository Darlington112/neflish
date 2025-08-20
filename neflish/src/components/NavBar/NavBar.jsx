import React from "react";
import "./NavBar.css";
import { IoSearch } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import profileIcon from "../../assets/caret_icon.svg";
import profileImg from "../../assets/profile_img.png";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="nav-left">
        <img src={logo} alt="" />
        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/tv_shows">Tv Shows</NavLink>
          <NavLink to="/movies">Movies</NavLink>
          <NavLink to="/new_and_popular">New & Popular</NavLink>
          <NavLink to="/my_list">My List</NavLink>
          <NavLink to="/browse_by_language">Browse by Language</NavLink>
        </div>
      </div>
      <div className="nav-right">
        <IoSearch />
        <p>Children</p>
        <FaBell />
        <div className="profile">
          <Link to="/login" className="signIn-link">
            <img src={profileImg} alt="" className="profileImg" />
            <img src={profileIcon} alt="" />
          </Link>

          <Link to="/login" className="signIn">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
