import React, { useContext } from "react";
import { Modal } from "react-bootstrap";
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
      <Modal.Header className="modal-header" closeButton>
        <img src={gif.images.original.url} alt="" />
        <ul>
          <li>Nome: {gif.username}</li>
          <li>Altura: {gif.images.original.height}</li>
          <li>Largura: {gif.images.original.width}</li>
        </ul>
      </Modal.Header>
    </Modal>
  );
}
