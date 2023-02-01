import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Swal from "sweetalert";
import axios from "axios";

function ModalDelete() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  // eslint-disable-next-line no-unused-vars
  const handleShow = () => setShow(true);
  const token = localStorage.getItem("token");
  const user = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  // DELETE DATA
  const Delete = (id_product) => {
    axios
      .delete(`${process.env.REACT_APP_API_PRODUCT}/delete/${id_product}`, user)
      .then((res) => {
        console.log("Delete Product success");
        console.log(res);
        Swal.fire("Success", "Delete Product success", "success");
        window.location.reload(false);
      })
      .catch((err) => {
        console.log("Delete Product failed");
        console.log(err);
        Swal.fire("Warning", "Delete Product failed", "error");
      });
  };
  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure to delete this data? Deleted data cannot be recovered
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={() => Delete()}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalDelete;
