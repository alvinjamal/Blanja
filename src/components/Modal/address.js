import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button, Form } from "react-bootstrap";
import ModalNewAddress from "./new";

function ModalAddress() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        class="btn btn-danger myfont3"
        variant="outline-danger"
        onClick={handleShow}
        style={{ height: "50px", borderRadius: "25px", width: "15rem" }}
      >
        Choose another address
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title
            className="myfont3 text-center"
            id="contained-modal-title-vcenter"
          >
            Choose another address
          </Modal.Title>
        </Modal.Header>
        <Button variant="outline">
          <Modal.Body
            className="myfont text-center p-4 m-2"
            style={{ border: "dotted gray" }}
          >
            <ModalNewAddress />
          </Modal.Body>
        </Button>
        <Modal.Body>
          <div
            className="myfont text-start p-3 m-2"
            style={{ border: "groove red" }}
          >
            <h6 style={{ fontWeight: "bold" }}>Andreas Jane</h6>
            <p>
              Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten
              Banyumas, Jawa Tengah, 53181 [ Note: blok c 16] Sokaraja, Kab.
              Banyumas, 53181
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalAddress;
