import React, { useContext, useState } from "react";
import { FavoritesContext } from "../../context/favorites-context";
import { Link } from "react-router-dom";
import { SidebarData } from "../../data/SidebarData";
import { IconContext } from "react-icons";
import { HeartIcon } from "@heroicons/react/solid";
import logo from "../../assets/logo.svg";
import "../../styles/blocks/logo.css";
import "../../styles/App.css";
import "./Navbar.css";

function Navbar() {
  const [sidebar] = useState(true);
  const { favorites } = useContext(FavoritesContext);
  let FavoritesLength = "";
  let Favorites = "Favorites";
  favorites.length > 0
    ? (FavoritesLength = favorites.length) && FavoritesLength === 1
      ? (Favorites = " Favorite")
      : (Favorites = " Favorites")
    : (FavoritesLength = "No ");

  return (
    <>
      <IconContext.Provider value={{ color: "black" }}>
        <nav className="sidebar">
          <header>
            <a href="/">
              <img className="logo" src={logo} alt="Logo" />
            </a>
          </header>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <HeartIcon stroke="black" color="#e56a77" />{" "}
                <span className="link-text">
                  {FavoritesLength} {Favorites}
                </span>
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className="nav-item">
                  <Link to={item.path} className="nav-link">
                    {item.icon}
                    <span className="link-text">{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
