import React from "react";
import "./style.css";
import Button from "react-bootstrap/Button";
import Jas from "../../img/jas.png";
import Jaket from "../../img/kemal.png";

export default function myBag() {
  return (
    <header>
      <div>
        <div className="container-fluid p-3 mb-2 bg-new" />
        <div
          className="container"
          style={{ marginTop: "35px", marginLeft: "120px" }}
        >
          <h3 id="category" style={{ marginBottom: "25px" }}>
            My Bag
          </h3>
        </div>
        <div
          className="container-left shadow p-3 mb-5 bg-body rounded"
          style={{
            backgroundColor: "white",
            width: "800px",
            marginLeft: "159px",
          }}
        >
          <div
            className="container text-center"
            style={{ marginBottom: "10px" }}
          >
            <div className="row align-items-center">
              <div className="col-1">
                <label className="container-check">
                  <input type="checkbox" checked="checked" />
                  <span className="checkmark"></span>
                </label>
              </div>
              <div className="col-md-4">
                <h6>
                  Select all items{" "}
                  <h6 style={{ color: "#9B9B9B" }}> (2 items selected)</h6>
                </h6>
              </div>
              <div className="col-md-4">
                <button className="btn">
                  <h6
                    className="text-danger"
                    style={{ marginLeft: "330px", marginTop: "15px" }}
                  >
                    Delete
                  </h6>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="container-left shadow p-3 mb-5 bg-body rounded"
          style={{
            backgroundColor: "white",
            width: "800px",
            marginLeft: "159px",
          }}
        >
          <div className="container textCenter">
            <div className="row align-items-center">
              <div className="col-1">
                <label className="container-check">
                  <input type="checkbox" checked="checked" />
                  <span className="checkmark"></span>
                </label>
              </div>
              <div className="col">
                <img src={Jas} alt="jas" id="check-img" />
              </div>
              <div className="col">
                <h6>Men's formal suit - Black</h6>
                <h6 style={{ color: "#9b9b9b" }}>Zalora Cloth</h6>
              </div>
              <div className="col">
                <form>
                  <Button
                    classNameName=" btn-min "
                    variant="outline-secondary"
                    style={{
                      borderRadius: "50%",
                      marginRight: "10px",
                      width: "30px",
                    }}
                  >
                    -
                  </Button>
                  <span classNameName="text1">1</span>
                  <Button
                    classNameName=" btn-plus"
                    variant="outline-secondary"
                    style={{
                      borderRadius: "50%",
                      marginLeft: "10px",
                      width: "30px",
                    }}
                  >
                    +
                  </Button>
                </form>
              </div>
              <div className="col">
                <h6 className="text-dark">$ 20.0</h6>
              </div>
            </div>
          </div>
        </div>
        <div
          className="container-left shadow p-3 mb-5 bg-body rounded"
          style={{
            backgroundColor: "white",
            width: "800px",
            marginLeft: "159px",
          }}
        >
          <div className="container text-center">
            <div className="row align-items-center">
              <div className="col-1">
                <label className="container-check">
                  <input type="checkbox" checked="checked" />
                  <span className="checkmark"></span>
                </label>
              </div>
              <div className="col">
                <img
                  src={Jaket}
                  alt="jaket"
                  id="check-img"
                  style={{ height: "100px" }}
                />
              </div>
              <div className="col">
                <h6>Men's Jacket jeans</h6>
                <h6 style={{ color: "#9b9b9b" }}>Zalora Cloth</h6>
              </div>
              <div className="col">
                <form>
                  <Button
                    classNameName=" btn-min "
                    variant="outline-secondary"
                    style={{
                      borderRadius: "50%",
                      marginRight: "10px",
                      width: "30px",
                    }}
                  >
                    -
                  </Button>
                  <span classNameName="text1">1</span>

                  <Button
                    classNameName=" btn-plus shadow"
                    variant="outline-secondary"
                    style={{
                      borderRadius: "50%",
                      marginLeft: "10px",
                      width: "30px",
                    }}
                  >
                    +
                  </Button>
                </form>
              </div>
              <div className="col">
                <h6 className="text-dark">$ 20.0</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
