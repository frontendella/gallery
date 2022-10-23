import { Modal } from "react-bootstrap";

const Dialog = (props) => {
  return (
    <Modal show={props.show} onHide={props.onHide} size="lg" centered>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body className="modal-content">
        <div className="item_detail">
          <section>
            <img
              className="item__img"
              key={props.thumbnailUrl}
              id={props.id}
              src={props.image}
              alt={props.title}
            />
          </section>
          <section>
            <div className="item_title">{props.title}</div>
          </section>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Dialog;
