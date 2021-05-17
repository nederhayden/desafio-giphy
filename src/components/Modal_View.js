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
        <div>
          <span>
            <p>Título:</p>
            <p>{gif.title}</p>
          </span>
          <span>
            <p>Altura:</p>
            <p>{gif.images.original.height}</p>
          </span>
          <span>
            <p>Largura:</p>
            <p>{gif.images.original.width}</p>
          </span>
        </div>
      </Modal.Header>
    </Modal>
  );
}
