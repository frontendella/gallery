import { useState } from "react";
import AddFavorites from "./AddFavorites";
import { Card } from "react-bootstrap";
import Dialog from "./Dialog";
import "../styles/blocks/modal.css";
import "../styles/images.css";

const OneItem = (props) => {
  const { id, title, image, url } = props;
  const [showStatus, setShowStatus] = useState(false);
  const handleShow = () => setShowStatus(true);
  const handleClose = () => setShowStatus(false);

  return (
    <>
      <div key={url} className="items-list__item item">
        <Card.Img
          className="item__img"
          key={url}
          id={id}
          src={image}
          alt={title}
          onClick={handleShow}
        />

        <AddFavorites key={url} image={image} id={id} title={title} />

        <div>
          <div>
            <h6 className="item__name text--center">{title}</h6>
          </div>
        </div>
      </div>
      <Dialog
        key={url}
        image={image}
        id={id}
        title={title}
        show={showStatus}
        onHide={handleClose}
      />
    </>
  );
};

export default OneItem;
