import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Gopay from "../../img/gopay.png";
import Pos from "../../img/pos.png";
import Card from "../../img/card.png";
import { Button, Form } from "react-bootstrap";

function ModalPayment() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button
        class="btn btn-danger myfont3"
        onClick={handleShow}
        style={{ height: "50px", borderRadius: "40px", width: "350px" }}
      >
        <h6 className="myfont3" style={{ marginTop: "9px" }}>
          Select payment
        </h6>
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="myfont3">Payment</Modal.Title>
        </Modal.Header>
        <Modal.Body className="myfont">Payment method</Modal.Body>
        <Modal.Body>
          <div className="row align-items-center mb-3">
            <div className="col-4">
              <img src={Gopay} alt="" />
            </div>
            <div className="col-4">
              <h5 className="myfont3">Gopay</h5>
            </div>
            <div className="col-4">
              <Form>
                {["checkbox"].map((type) => (
                  <div key={`default-${type}`} className="mb-3">
                    <Form.Check
                      inline
                      name="group1"
                      type={type}
                      id={`inline-${type}-1`}
                    />
                  </div>
                ))}
              </Form>
            </div>
          </div>
          <div className="row align-items-center mb-3">
            <div className="col-4">
              <img src={Pos} alt="" />
            </div>
            <div className="col-4">
              <h5 className="myfont3">Pos Indonesia</h5>
            </div>
            <div className="col-4">
              <Form>
                {["checkbox"].map((type) => (
                  <div key={`default-${type}`} className="mb-3">
                    <Form.Check
                      inline
                      name="group1"
                      type={type}
                      id={`inline-${type}-1`}
                    />
                  </div>
                ))}
              </Form>
            </div>
          </div>
          <div className="row align-items-center mb-3">
            <div className="col-4">
              <img
                src={Card}
                alt=""
                style={{ width: "54px", height: "38px" }}
              />
            </div>
            <div className="col-4">
              <h5 className="myfont3">Mastercard</h5>
            </div>
            <div className="col-4">
              <Form>
                {["checkbox"].map((type) => (
                  <div key={`default-${type}`} className="mb-3">
                    <Form.Check
                      inline
                      name="group1"
                      type={type}
                      id={`inline-${type}-1`}
                    />
                  </div>
                ))}
              </Form>
            </div>
          </div>
        </Modal.Body>
        <hr />
        <Modal.Body className="myfont">Shopping summary</Modal.Body>
        <Modal.Body className="myfont3">
          <div className="row align-items-center mb-3">
            <div className="col-1">
              <h6 className="myfont3 color-font">Order</h6>
            </div>
            <div className="col-3 offset-8">
              <h5 className="myfont">$ 40.0</h5>
            </div>
          </div>
          <div className="row align-items-center mb-3">
            <div className="col-1">
              <h6 className="myfont3 color-font">Delivery</h6>
            </div>
            <div className="col-3 offset-8">
              <h5 className="myfont">$ 5.0</h5>
            </div>
          </div>
        </Modal.Body>
        <Modal.Body>
          <div className="row">
            <div className="col-5">
              <h6 className="myfont">Shopping Summary</h6>
              <h5 className="myfont text-danger">$ 45.0</h5>
            </div>
            <div className="col-5 offset-2">
              <Button
                variant="danger"
                className="rounded-pill"
                style={{ width: "180px" }}
                onClick={handleClose}
              >
                Buy
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalPayment;
