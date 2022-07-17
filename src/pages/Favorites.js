import { FavoritesContext } from "../context/favorites-context";
import { useContext, useState } from "react";
import AddFavorites from "../components/AddFavorites";
import { Card } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import "../styles/images.css";
import Dialog from "../components/Dialog";

export const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);
  const [showStatus, setShowStatus] = useState(false);
  const handleShow = () => setShowStatus(true);
  const handleClose = () => setShowStatus(false);
  return (
    <>
      <h1 className="header__title"> Favorites </h1>
      {favorites.length > 0 ? (
        <div className="items-list itemlist">
          {favorites.map((item) => (
            <div className="items-list__item item">
              <Card.Img
                className="item__img"
                id={item.id}
                src={item.image}
                alt={item.title}
                onClick={handleShow}
              />
              <AddFavorites
                key={item.url}
                image={item.image}
                id={item.id}
                title={item.title}
              />
              <Dialog
                id={item.id}
                key={item.url}
                image={item.image}
                title={item.title}
                show={showStatus}
                onHide={handleClose}
              />
              <div>
                <div className="item__name text--center">
                  <h6>{item.title}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h2 className="header__title">
          {" "}
          <br />
          No items in your favorite's list! Add some!
        </h2>
      )}
    </>
  );
};
