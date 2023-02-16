import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import Swal from "sweetalert2";
import Edit from "../../img/edit.png";

function ModalEdit() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [photo, setPhoto] = useState(null);
  const token = localStorage.getItem("token");
  const user = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);
    console.log(e.target.files[0]);
  };
  const handleData = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("photo", photo);
    console.log(formData, "data dari handle data update");
    axios
      .put(`${process.env.REACT_APP_API}/users/edit`, formData, user, {
        "content-type": "multipart/form-data",
      })
      .then((res) => {
        console.log("Update photo succes");
        console.log(res);
        Swal.fire({
          title: "Nice, Good Job!",
          icon: "success",
          text: "Update Photo Success",
          type: "success",
          timer: 4000,
          showConfirmButton: false,
        }).then(() => {
          window.location.reload(false);
        });
      })
      .catch((err) => {
        console.log("Update photo profile failed");
        console.log(err);
        Swal.fire("Warning", "Update photo profile failed", "error");
      });
  };

  return (
    <div>
      <button className="btn" onClick={handleShow}>
        <img src={Edit} alt="" /> Ubah Profile
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Photo Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="file" name="photo" onChange={handlePhotoChange} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="white" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={(e) => handleData(e)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalEdit;
