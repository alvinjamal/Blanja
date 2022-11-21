import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Profile.module.css";
import DatePicker from "react-datepicker";
import Assets from "./";
import Accordion from "react-bootstrap/Accordion";
import "react-datepicker/dist/react-datepicker.css";

export default function Profile() {
  const [data, setData] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  let users = "https://jsonplaceholder.typicode.com/users/1";
  useEffect(() => {
    axios
      .get(users)
      .then((res) => {
        console.log("get data success");
        console.log(res);
        res.data && setData(res.data);
      })
      .catch((err) => {
        console.log("get data fail");
        console.log(err);
      });
  }, []);
  return (
    <div className="bg-light w-100 h-100 d-flex flex-row">
      <div
        className="col-3 d-flex flex-column pt-5 "
        style={{ height: "90vh", backgroundColor: "white" }}
      >
        <div className="justify-content-center d-flex flex-row ">
          <div className="d-flex flex-row h-25 justify-content-center ">
            <img
              src="https://res.cloudinary.com/demo/image/facebook/65646572251.jpg"
              alt=""
              className="img rounded-pill"
              style={{ height: "120px" }}
            />
            <div className="d-flex flex-column h-50 mt-3 ms-2">
              <h6>Johanes Michael</h6>
              <p>
                <img src={Assets.edit} alt="" />
                Ubah profile
              </p>
            </div>
          </div>
        </div>

        <div className="w-50 justify-content-center d-flex flex-column mt-5 ms-5">
          <p className="fw-bold">
            <img src={Assets.homeLogo} alt="" className="me-2" />
            Store
          </p>
          <p className="fw-bold">
            <img src={Assets.cubeLogo} alt="" className="me-2" />
            Product
          </p>
          <p className="fw-bold">
            <img src={Assets.cartLogo} alt="" className="me-2" />
            Order
          </p>

          <Accordion flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <p className="fw-bold">
                  <img src={Assets.cubeLogo} alt="" className="me-2" />
                  Product
                </p>
              </Accordion.Header>
              <Accordion.Body>
                <p className="fw-bold">My Product</p>
                <p className="fw-bold">Seiling Product</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Accordion Item #2</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
      {/* <ul>
            <li>
        {data ? data.name : "data not found"}
            </li>
            <li>
        {data ? data.email : "data not found"}
            </li>
            <li>
        {data ? data.phone : "data not found"}
            </li>
        </ul> */}

      <div className="container p-5">
        <h1>My Profile</h1>
        <h5 className="text-secondary mb-3">Manage your profile information</h5>
        <div className={styles.line}></div>

        <div className="container col-12 row">
          <div className="col col-8 row">
            {/* form */}
            <div className="col col-12 row ">
              <div className="col col-3">Name</div>
              <div className="col col-9">
                <input
                  type="text"
                  className="form-control"
                  value={data ? data.name : "data not found"}
                />
              </div>
            </div>
            <div className="col col-12 row ">
              <div className="col col-3">Email</div>
              <div className="col col-9">
                <input
                  type="text"
                  className="form-control"
                  value={data ? data.email : "data not found"}
                />
              </div>
            </div>
            <div className="col col-12 row ">
              <div className="col col-3">Phone Number</div>
              <div className="col col-9">
                <input
                  type="text"
                  className="form-control"
                  value={data ? data.phone : "data not found"}
                />
              </div>
            </div>
            <div className="col col-12 row ">
              <div className="col col-3">Gender</div>
              <div className="col col-9 row">
                <div c>
                  <input
                    class="form-check-input mt-1"
                    type="radio"
                    value=""
                    aria-label="Radio button for following text input"
                    name="gender"
                    id="gender1"
                  />
                  <span className="ms-2">Laki-Laki</span>
                  <input
                    class="form-check-input mt-1 ms-2"
                    type="radio"
                    value=""
                    aria-label="Radio button for following text input"
                    name="gender"
                    id="gender"
                  />
                  <span className="ms-2">Perempuan </span>
                  <div></div>
                </div>
              </div>
              <div className="col col-12 row  mt-3">
                <div className="col col-3">Date of birth</div>
                <div className="col col-9">
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col col-4">
            <img
              src="https://res.cloudinary.com/demo/image/facebook/65646572251.jpg"
              className={styles.image}
              alt="..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
