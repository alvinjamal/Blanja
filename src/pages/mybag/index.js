import React from "react";
import "./style.css";
import Jas from "../../img/jas.png";
import Jaket from "../../img/kemal.png";

export default function myBag() {
  return (
    <header>
      <div class="container-fluid p-3 mb-2 bg-new" />
      <div class="container" style={{ marginTop: "35px", marginLeft: "120px" }}>
        <h3 id="category" style={{ marginBottom: "25px" }}>
          My Bag
        </h3>
      </div>
      <div
        class="container-left shadow p-3 mb-5 bg-body rounded"
        style={{
          backgroundColor: "white",
          width: "800px",
          marginLeft: "159px",
        }}
      >
        <div class="container text-center" style={{ marginBottom: "10px" }}>
          <div class="row align-items-center">
            <div class="col-1">
              <label class="container-check">
                <input type="checkbox" checked="checked" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div class="col-md-4">
              <h6>
                Select all items{" "}
                <h6 style={{ color: "#9B9B9B" }}> (2 items selected)</h6>
              </h6>
            </div>
            <div class="col">
              <button class="btn">
                <h6
                  class="text-danger"
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
        class="container-left shadow p-3 mb-5 bg-body rounded"
        style={{
          backgroundColor: "white",
          width: "800px",
          marginLeft: "159px",
        }}
      >
        <div class="container textCenter">
          <div class="row align-items-center">
            <div class="col-1">
              <label class="container-check">
                <input type="checkbox" checked="checked" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div class="col">
              <img src={Jas} alt="jas" id="check-img" />
            </div>
            <div class="col">
              <h6>Men's formal suit - Black</h6>
              <h6 style={{ color: "#9b9b9b" }}>Zalora Cloth</h6>
            </div>
            <div class="col">
              <form>
                <div class="counter1" style={{ marginLeft: "80px" }}>
                  <button
                    class="btn clr-btn shadow"
                    type="submit"
                    style={{ borderRadius: "50%", backgroundColor: "#D4D4D4" }}
                  />
                  <div class="count1">1</div>
                  <button
                    class="btn clr-btn shadow"
                    type="submit"
                    style={{ borderRadius: "50%", backgroundColor: "white" }}
                  />
                </div>
              </form>
            </div>
            <div class="col">
              <h6 class="text-dark">$ 20.0</h6>
            </div>
          </div>
        </div>
      </div>
      <div
        class="container-left shadow p-3 mb-5 bg-body rounded"
        style={{
          backgroundColor: "white",
          width: "800px",
          marginLeft: "159px",
        }}
      >
        <div class="container text-center">
          <div class="row align-items-center">
            <div class="col-1">
              <label class="container-check">
                <input type="checkbox" checked="checked" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div class="col">
              <img src={Jaket} alt="jaket" id="check-img" />
            </div>
            <div class="col">
              <h6>Men's Jacket jeans</h6>
              <h6 style={{ color: "#9b9b9b" }}>Zalora Cloth</h6>
            </div>
            <div class="col">
              <form>
                <div class="counter1" style={{ marginLeft: "80px" }}>
                  <button
                    class="btn clr-btn shadow"
                    type="submit"
                    style={{ borderRadius: "50%", backgroundColor: "#D4D4D4" }}
                  />
                  <div class="count1">1</div>
                  <button
                    class="btn clr-btn shadow"
                    type="submit"
                    style={{ borderRadius: "50%", backgroundColor: "white" }}
                  />
                </div>
              </form>
            </div>
            <div class="col">
              <h6 class="text-dark">$ 20.0</h6>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
