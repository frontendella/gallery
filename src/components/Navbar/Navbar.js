import React, { useContext, useState } from "react";
import { FavoritesContext } from "../../context/favorites-context";
import { Link } from "react-router-dom";
import { SidebarData } from "../../data/SidebarData";
import Header from "../Header";
import { IconContext } from "react-icons";
import { HeartIcon } from "@heroicons/react/solid";
import "../../styles/App.css";
import "./Navbar.css";

function Navbar() {
  const [sidebar] = useState(true);
  const { favorites } = useContext(FavoritesContext);
  let FavoritesLength = "";
  let Favorites = "Favorites";
  favorites.length > 0
    ? (FavoritesLength = favorites.length) && FavoritesLength === 1
      ? (Favorites = "Favorite")
      : (Favorites = "Favorites")
    : (FavoritesLength = "No ");

  return (
    <>
      <Header />
      <IconContext.Provider value={{ color: "black" }}>
        <div className="header">
          <Link to="#" className="menu-bars"></Link>
        </div>

        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul>
            <li>
              <Link to="/">
                <HeartIcon />
                {FavoritesLength} {Favorites}
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
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