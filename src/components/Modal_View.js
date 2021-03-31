import React, { useState } from "react";
import { Modal } from "react-bootstrap";

export default function ModalView({ open, gif }) {
  const [close, setClose] = useState(false);

  return (
    <Modal show={open} onHide={() => setClose(true)}>
      <Modal.Header closeButton>
        <Modal.Body>
          <img className="img-gifs" src={gif.images.original.url} alt="" />
        </Modal.Body>
      </Modal.Header>
    </Modal>
  );
}
