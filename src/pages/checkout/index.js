import React from "react";
import "./style.css";
import Jas from "../../img/jas.png";
import Jaket from "../../img/kemal.png";

export default function Checkout() {
  return (
    <header>
      <div className="container-fluid p-3 mb-2 bg-new">
        <div
          className="container"
          style={{ marginTop: "35px", marginLeft: "220px" }}
        >
          <h2 id="checkout">Checkout</h2>
          <h5
            style={{
              marginTop: "30px",
              marginBottom: "20px",
              fontWeight: "bold",
            }}
          >
            Shipping Address
          </h5>
        </div>
        <div
          className="container-left shadow p-3 mb-5 bg-body rounded"
          style={{
            backgroundColor: "white",
            width: "720px",
            height: "190px",
            marginLeft: "220px",
          }}
        >
          <div
            className="container text-start"
            style={{ marginBottom: "13px" }}
          >
            <div className="row align-items-center">
              <h6 style={{ fontWeight: "bold" }}>Andreas Jane</h6>
              <p>
                Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja,
                Kabupaten Banyumas, Jawa Tengah, 53181 [ Note: blok c 16]
                Sokaraja, Kab. Banyumas, 53181
              </p>
              <a href="/register" id="link">
                <button
                  className="btn btn-gray btn-outline-light btn-block btn-md"
                  id="button-cust-3"
                  style={{
                    marginTop: "23px",
                    height: "40px",
                    width: "13rem",
                    borderRadius: "40px",
                    border: "1px solid",
                    marginLeft: "30%",
                    color: "#9b9b9b",
                  }}
                >
                  Choose another address
                </button>
              </a>
            </div>
          </div>
        </div>
        <div
          className="container-left shadow p-3 mb-5 bg-body rounded"
          style={{
            backgroundColor: "white",
            width: "720px",
            height: "190px",
            marginLeft: "220px",
          }}
        >
          <div
            className="container text-start"
            style={{ marginBottom: "10px" }}
          >
            <div className="row align-items-center">
              <div className="col">
                <img src={Jas} alt="jas" id="check1" />
              </div>
              <div className="col">
                <h6>Men's formal suit - Black</h6>
                <h6 style={{ color: "#9b9b9b" }}>Zalora Cloth</h6>
              </div>
              <div className="col">
                <h6 style={{ marginLeft: "130px" }}>$ 20.0</h6>
              </div>
            </div>
          </div>
        </div>
        <div
          className="container-left shadow p-3 mb-5 bg-body rounded"
          style={{
            backgroundColor: "white",
            width: "720px",
            height: "190px",
            marginLeft: "220px",
          }}
        >
          <div
            className="container text-start"
            style={{ marginBottom: "10px" }}
          >
            <div className="row align-items-center">
              <div className="col" style={{ height: "100px" }}>
                <img src={Jaket} alt="jaket" id="check2" />
              </div>
              <div className="col">
                <h6>Men's Jacket jeans</h6>
                <h6 style={{ color: "#9b9b9b" }}>Zalora Cloth</h6>
              </div>
              <div className="col">
                <h6 style={{ marginLeft: "130px" }}>$ 20.0</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
