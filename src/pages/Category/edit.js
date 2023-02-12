/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import NavbarComponent from "../../Components/Navbar";

function Category() {
  // const token = localStorage.getItem("token");
  const [data, setData] = useState([]);
  const { id_category } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/products/${id_category}`)
      .then((res) => {
        console.log("Get product by category success");
        console.log(res.data);
        res.data && setData(res.data.data);
      })
      .catch((err) => {
        console.log("Get product by category fail");
        console.log(err);
      });
  }, []);
  return (
    <div>
      <NavbarComponent />
      <div className="container-fluid bg-new">
        <div className="container py-3">
          <div className="row py-3">
            <div className="col-1">
              <Link to="/home" className="link-title-detail">
                <h6 className="color-font myfont3">Home</h6>
              </Link>
            </div>
          </div>
          <h1 className="myfont text-title">{data[0]?.category_id}</h1>
          <div className="container">
            <div
              className="row row-cols-1 row-cols-md-5 g-4"
              style={{ marginTop: "8px" }}
            >
              {data ? (
                data.map((item) => (
                  <div className="col-2" key={item.id_product}>
                    <div
                      className="card"
                      style={{ width: "210px" }}
                      onClick={() =>
                        navigate(`/Product-Detail/${item.id_product}`)
                      }
                    >
                      <img
                        src={item.photo}
                        style={{ height: "200px" }}
                        alt=""
                      />
                      <div className="card-body">
                        <Link to="/Product-Detail" className="link-product">
                          <h3 className="text-product">{item.name_product}</h3>
                        </Link>
                        <h4 className="text-price">{item.price}</h4>
                        <h5 className="text-brand">{item.brand}</h5>
                        <h6>
                          <FaStar className="fastar" />
                          <FaStar className="fastar" />
                          <FaStar className="fastar" />
                          <FaStar className="fastar" />
                          <FaStar className="fastar" />
                        </h6>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <h1>...Loading</h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Category;
