/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Modal, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Edit from "../../img/edit.png";

function ModalEditProduct(props) {
  const [data, setData] = useState([]);
  const [photo, setPhoto] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [postData, setPostData] = useState({
    id_product: data?.id_product,
    name_product: data?.name_product,
    stock: data?.stock,
    price: data?.price,
    // category_id: data?.category_id,
    brand: data?.brand,
  });

  const handleChange = (e) => {
    setPostData({
      ...postData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (props.item) {
      setData(props.item);
    }
  }, [props.item]);

  const handleData = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    // formData.append("name_product", postData.name_product);
    formData.append("stock", postData.stock);
    formData.append("price", postData.price);
    // formData.append("category_id", postData.category_id);
    // formData.append("brand", postData.brand);
    // formData.append("photo", photo);
    axios
      .put(
        `${process.env.REACT_APP_API}/products/update/${props.item.id_product}`,
        formData
      )
      .then((res) => {
        console.log("Update product success");
        console.log(res);
        Swal.fire("Success", "Update product success", "success");
        Swal.fire({
          title: "Success",
          icon: "success",
          text: "Update product success",
          type: "success",
          timer: 3000,
          showConfirmButton: false,
        }).then(() => {
          window.location.reload(false);
        });
      })
      .catch((err) => {
        console.log("Update product failed");
        console.log(err);
        Swal.fire("Warning", "Update product failed", "error");
      });
  };
  // };

  // const handlePhotoChange = (e) => {
  //   setPhoto(e.target.files[0]);
  //   console.log(e.target.files[0]);
  // };

  return (
    <div>
      <Button
        className="btn"
        variant="outline-info"
        style={{ borderRadius: "20px" }}
        onClick={handleShow}
      >
        <img src={Edit} alt="" />
      </Button>

      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ fontWeight: "bold" }}>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container mt-2 p-2 rounded container mt-4 p-2 border border-3">
            <div className="row">
              <div className="col-lg-12 mb-2">
                <h4 className="myfont4 mt-4" style={{ fontWeight: "bold" }}>
                  Product
                </h4>
              </div>
              <hr />
            </div>
            <Form>
              <div className="row">
                {/* <div className="col-lg-12">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>
                      <h6 className="myfont3 color-font">Name </h6>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={data?.name_product}
                      className="myfont3"
                      name="name"
                      onChange={(e) => handleChange(e)}
                      value={postData.name_product}
                    />
                  </Form.Group>
                </div> */}
                <div className="col-lg-12">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>
                      <h6 className="myfont3 color-font">Stock </h6>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={data?.stock}
                      className="myfont3"
                      name="stock"
                      onChange={(e) => handleChange(e)}
                      value={postData.stock}
                    />
                  </Form.Group>
                </div>
                <div className="col-lg-12">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>
                      <h6 className="myfont3 color-font">Price </h6>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={data?.price}
                      className="myfont3"
                      name="price"
                      onChange={(e) => handleChange(e)}
                      value={postData.price}
                    />
                  </Form.Group>
                </div>
                {/* <div className="col-lg-12">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>
                  <h6 className="myfont3 color-font">Category</h6>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder={data?.category_id}
                  className="myfont3"
                  name="category_id"
                  onChange={(e) => handleChange(e)}
                  value={postData.category_id}
                />
              </Form.Group>
            </div> */}
                {/* <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>
                    <h6 className="myfont3 color-font">Upload</h6>
                  </Form.Label>
                  <div className="row">
                    <div className="col-lg-12">
                      <Form.Control
                        type="file"
                        className="myfont3"
                        name="photo"
                        onChange={handlePhotoChange}
                      />
                    </div>
                  </div>
                </Form.Group>
                <div className="col-lg-12">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>
                      <h6 className="myfont3 color-font">Brand </h6>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={data?.brand}
                      className="myfont3"
                      name="brand"
                      onChange={(e) => handleChange(e)}
                      value={postData.brand}
                    />
                  </Form.Group>
                </div> */}
                {/* <hr className="mt-1" /> */}
                {/* <div className="col-lg-12 align-items-center mb-5 mt-1">
                  <button
                    className="btn btn-danger text-white"
                    type="submit"
                    onClick={(e) => handleData(e)}
                    style={{
                      width: "40rem",
                      marginLeft: "20rem",
                      borderRadius: "10px",
                    }}
                  >
                    Update Product
                  </button>
                </div> */}
              </div>
            </Form>
          </div>
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
export default ModalEditProduct;
