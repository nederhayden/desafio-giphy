import React, { useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import { ModalContext } from "../contexts/ModalContext";
import "./Modal_View.scss";

export default function ModalView({ gif }) {
  const { showModal, setShowModal } = useContext(ModalContext);

  return (
    <Modal
      dialogClassName="modal"
      show={showModal}
      onHide={() => setShowModal(!showModal)}
      centered
    >
      <Modal.Body className="modal-body">
        <img className="modal-img" src={gif.images.original.url} alt="" />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => setShowModal(!showModal)}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
