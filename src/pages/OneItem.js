import { useContext, useState, useEffect } from "react";

import ImagesList from "./ImagesList";
import "../styles/blocks/modal.css";
import "../styles/favorites.css";
import "../styles/images.css";
import AddFavorites from "../components/AddFavorites";
import { FavoritesContext } from "../store/favorites-context";
import { Modal,  } from "react-bootstrap";

const OneItem = (props) => {
  const { id, title, image, url } = props;
  // const AddFavorites = props.AddFavorites;

  const [showStatus, setShowStatus] = useState(false);

  const handleShow = () => setShowStatus(true);
  const handleClose = () => setShowStatus(false);

  return (
    <div>
      {/* {error && <p>Error!: {error.message}</p>} */}

      <div className="items-list">
        <div key={url} className="items-list__item item">
          <img
            className="item__img"
            key={url}
            id={id}
            src={image}
            // onClick={handlerIcon}
            alt={title}
            onClick = {handleShow }
          />

          <AddFavorites key={id} image={image} id={id} title={title} />

          <div className="item__info">
            <div className="caption">
              <h6 className="item__name text--center">{title}</h6>

              <div className="item__description">
                Statham stars as Arthur Bishop, a professional assassin who
                specializes in making his hits look like accidents, suicides, or
                the acts of petty criminals.
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>

      <Modal show={showStatus} onHide={handleClose} className="modal-body">
        <Modal.Header closeButton>

        </Modal.Header>

        <Modal.Body>
          <div className="movie_detail">
            <section>
              <img
                className="item__img"
                key={url}
                id={id}
                src={image}
                // onClick={handlerIcon}
                alt={title}
              />
            </section>

            <section className="modal-content">
              <div className="movie_title">{title}</div>
            </section>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default OneItem;
