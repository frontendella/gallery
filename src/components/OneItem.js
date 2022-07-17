import { useState } from "react";
import AddFavorites from "./AddFavorites";
import {Card, Button, Badge} from 'react-bootstrap';
import { Modal } from "react-bootstrap";
import "../styles/blocks/modal.css";
import "../styles/images.css";

const OneItem = (props) => {
  const { id, title, image, url } = props;

  const [showStatus, setShowStatus] = useState(false);

  const handleShow = () => setShowStatus(true);
  const handleClose = () => setShowStatus(false);

  return (
    <Card style={{width: '30%', marginBottom: '20px', marginRight: '30px', background: 'none'}}>
      <div className="items-list">
        <div key={url} className="items-list__item item">
          <Card.Img
            className="item__img"
            key={url}
            id={id}
            src={image}
            alt={title}
            onClick={handleShow}
          />

          <AddFavorites key={id} image={image} id={id} title={title} />

          <div>
            <div>
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

      <Modal show={showStatus} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>

        <Modal.Body>
          <div>
            <section>
              <img
                className="item__img"
                key={url}
                id={id}
                src={image}
                alt={title}
              />
            </section>

            <section className="modal-content">
              <div>{title}</div>
            </section>
          </div>
        </Modal.Body>
      </Modal>
    </Card>
  );
};

export default OneItem;
