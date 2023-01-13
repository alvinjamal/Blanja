import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button, Form } from "react-bootstrap";

function ModalNewAddress() {
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
        <h6 className="myfont3" style={{ marginTop: "9px" }}>
          Choose another address
        </h6>
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        size="xl"
      >
        <Modal.Header closeButton>
          <Modal.Title className="myfont3 text-center">
            Choose another address
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          className="myfont text-center p-4 m-2"
          style={{ border: "dotted gray" }}
        >
          Add new address
        </Modal.Body>
        <Modal.Body>
          <div
            className="row align-items-center"
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

export default ModalNewAddress;
