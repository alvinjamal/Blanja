import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import NavbarComponent from "../../Components/Navbar";

const EditProduct = () => {
  const [data, setData] = useState(null);
  const token = localStorage.getItem("token");
  const [photo, setPhoto] = useState("");

  const navigate = useNavigate();
  const { id_product } = useParams();
  console.log(id_product);

  const user = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  let getData = `${process.env.REACT_APP_API_PRODUCT}/${id_product}`;
  useEffect(() => {
    axios
      .get(getData, user)
      .then((res) => {
        console.log("Get detail product success");
        console.log(res.data.data[0]);
        res.data && setData(res.data.data[0]);
      })
      .catch((err) => {
        console.log("Get detail product fail");
        console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [postData, setPostData] = useState({
    name: data?.name,
    stock: data?.stock,
    price: data?.price,
    category_id: data?.category_id,
    brand: data?.brand,
  });
  const handleChange = (e) => {
    setPostData({
      ...postData,
      [e.target.name]: e.target.value,
    });
  };
  const handleData = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", postData.name);
    formData.append("stock", postData.stock);
    formData.append("price", postData.price);
    formData.append("category_id", postData.category_id);
    formData.append("brand", postData.brand);
    formData.append("photo", photo);
    axios
      .put(
        `${process.env.REACT_APP_API}/products/${id_product}`,
        formData,
        user
      )
      .then((res) => {
        console.log("Update product success");
        console.log(res);
        Swal.fire("Success", "Update product success", "success");
        navigate(`/product`);
      })
      .catch((err) => {
        console.log("Update product failed");
        console.log(err);
        Swal.fire("Warning", "Update product failed", "error");
      });
  };
  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);
    console.log(e.target.files[0]);
  };
  return (
    <div>
      <NavbarComponent />
      <div className="container mt-2 p-2 rounded container mt-4 p-2 border border-3">
        <div className="row">
          <div className="col-lg-12 mb-2">
            <h3 className="myfont4 mt-4" style={{ fontWeight: "bold" }}>
              Product
            </h3>
          </div>
          <hr />
        </div>
        <Form>
          <div className="row">
            <div className="col-lg-12">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>
                  <h6 className="myfont3 color-font">Name </h6>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder={data?.name}
                  className="myfont3"
                  name="name"
                  onChange={(e) => handleChange(e)}
                  value={postData.name}
                />
              </Form.Group>
            </div>
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
            <div className="col-lg-12">
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
            </div>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
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
            </div>
            <hr className="mt-1" />
            <div className="col-lg-12 align-items-center mb-5 mt-1">
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
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};
export default EditProduct;
