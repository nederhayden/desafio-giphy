import React, { useState } from "react";
import { Modal } from "react-bootstrap";

export default function ModalView({ open, gif }) {
  const [close, setClose] = useState(false);

  return (
    <Modal dialogClassName='modal' show={open} onHide={() => setClose(true)} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Body>
          <img className="img-gifs" src={gif.images.original.url} alt="" />
        </Modal.Body>
      </Modal.Header>
    </Modal>
  );
}
