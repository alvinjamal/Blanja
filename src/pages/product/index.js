/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./product.module.css";
import { FaTrashAlt } from "react-icons/fa";
import Table from "react-bootstrap/Table";
import { Button, Modal, Form } from "react-bootstrap";
import swal from "sweetalert";
import NavbarComponent from "../../components/Navbar";
import Swal from "sweetalert2";
import ModalEditProduct from "../../components/Modal/edit";

export default function Product() {
  const [data, setData] = useState([]);
  const token = localStorage.getItem("token");
  const [photo, setPhoto] = useState(null);
  const [id_product, setIdProduct] = useState("");
  const user = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const [message, setMessage] = useState({
    title: "",
    text: "",
    type: "success",
  });
  const [messageShow, setMessageShow] = useState(true);
  const [inputData, setInputData] = useState({
    name_product: "",
    stock: "",
    price: "",
    brand: "",
    category_id: "1",
    search: "",
  });
  const [sortBy, setSortBy] = useState("name_product");
  const [sort, setSort] = useState("asc");
  const [selected, setSelected] = useState(null);
  const [onedit, setOnedit] = useState(false);
  const [temp, setTemp] = useState(null);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // EDIT DATA
  const editForm = (item) => {
    console.log(item);
    setTemp(item);
    setInputData({
      ...inputData,
      name_product: item.name_product,
      stock: item.stock,
      price: item.price,
      brand: item.brand,
      category_id: item.category_id,
    });
  };

  useEffect(() => {
    selected ? setOnedit(true) : setOnedit(false);
    !selected &&
      setInputData({
        ...inputData,
        name_product: "",
        stock: "",
        price: "",
        brand: "",
        category_id: "1",
      });
    !selected && setPhoto(null);
  }, [selected]);

  const messageTime = () => {
    setTimeout(() => setMessageShow(false), 3000);
  };
  useEffect(() => {
    console.log("checked", sortBy);
    getData();
  }, [sortBy, sort, inputData.search]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
    }
    getData();
  }, []);

  // GET DATA
  let users = `${process.env.REACT_APP_API_PRODUCT}?sortby=${sortBy}&sort=${sort}&search=${inputData.search}`;
  const getData = () => {
    axios
      .get(users)
      .then((res) => {
        console.log("get data success");
        console.log(res.data.data);
        res.data && setData(res.data.data);
        setIdProduct(res.data.data[0].id_product);
        !selected && setMessageShow(true);
        !selected &&
          setMessage({
            title: "success",
            text: "get data success",
            type: "success",
          });
        !selected && messageTime();
        setSelected(null);
      })
      .catch((err) => {
        console.log("get data fail");
        console.log(err);
        setData([]);
        setMessageShow(true);
        setMessage({ title: "fail", text: "get data fail", type: "danger" });
        messageTime();
      });
  };
  useEffect(() => {
    getData();
  }, [inputData.search]);
  useEffect(() => {
    getData();
  }, []);

  // DELETE DATA
  const Delete = () => {
    axios
      .delete(`${process.env.REACT_APP_API}/products/delete/${selected}`)
      .then((res) => {
        console.log("Delete Product success");
        console.log(res);
        setMessageShow(true);
        swal({
          title: "success",
          text: "Delete Product success",
          type: "danger",
          icon: "success",
        });
        messageTime();
        getData();
      })
      .catch((err) => {
        console.log("Delete Product failed");
        console.log(err);
        setMessageShow(true);
        Swal.fire("Warning", "Delete Product failed", "error");
        messageTime();
      });
  };

  // POST DATA
  const postForm = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name_product", inputData.name_product);
    formData.append("stock", inputData.stock);
    formData.append("price", inputData.price);
    formData.append("photo", photo);
    formData.append("brand", inputData.brand);
    formData.append("category_id", inputData.category_id);

    if (!selected) {
      axios
        .post(`${process.env.REACT_APP_API}/products/add`, formData, user, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          handleClose();
          console.log("Post data success");
          console.log(res);
          setMessageShow(true);
          swal({
            title: "success",
            text: "Post data success",
            type: "danger",
            icon: "success",
          });
          messageTime();
          getData();
        })
        .catch((err) => {
          console.log("Add Product failed please try again");
          console.log(err);
          Swal.fire("Warning", "Add Product failed", "error");
        });
    } else {
    }
  };
  const handlePhoto = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <NavbarComponent />
      <Form onSubmit={postForm} className="container mt-4 p-2 border border-3 ">
        <h5 className="text" style={{ fontWeight: "bold" }}>
          Add Product
        </h5>
        <div className="d-flex flex-row ">
          <input
            className="form-control"
            type="text"
            value={inputData.name_product}
            name="name_product"
            onChange={handleChange}
            placeholder="Nama"
          />
          <input
            className="form-control"
            type="number"
            value={inputData.stock}
            name="stock"
            onChange={handleChange}
            placeholder="Stock"
            style={{ marginLeft: "10px" }}
          />

          <input
            className="form-control"
            type="text"
            value={inputData.brand}
            name="brand"
            onChange={handleChange}
            placeholder="Brand"
            style={{ marginLeft: "10px" }}
          />
        </div>
        <div className="d-flex flex-row">
          <input
            className="form-control"
            type="number"
            value={inputData.price}
            name="price"
            onChange={handleChange}
            placeholder="Price"
            style={{ marginTop: "10px" }}
          />
          {/* <input
            className="form-control"
            type="text"
            name="category_id"
            value={inputData.category_id}
            onChange={handleChange}
            placeholder="Category"
            style={{ marginLeft: "10px", marginTop: "10px" }}
          /> */}
          <input
            className="form-control"
            type="file"
            name="photo"
            onChange={handlePhoto}
            placeholder="Photo"
            required
            style={{ marginLeft: "10px", marginTop: "10px" }}
          />
        </div>

        {onedit ? (
          <Button className="btn btn-primary" type="submit">
            Update
          </Button>
        ) : (
          <Button
            className="btn btn-danger"
            type="submit"
            style={{ marginTop: "10px" }}
          >
            Post
          </Button>
        )}
      </Form>

      {/* filter */}
      <div className="container  mt-2 p-2 rounded container mt-4 p-2 border border-3">
        <h5 className="text" style={{ fontWeight: "bold" }}>
          Filter
        </h5>
        <div className="container d-flex flex-row">
          <div className="">
            <div
              className={`btn ${
                sortBy === "name" ? "btn-danger" : "btn-secondary"
              } ms-1`}
              onClick={() => setSortBy("name")}
            >
              Name
            </div>
            <div
              className={`btn ${
                sortBy === "stock" ? "btn-danger" : "btn-secondary"
              } ms-1`}
              onClick={() => setSortBy("stock")}
            >
              Stock
            </div>
            <div
              className={`btn ${
                sortBy === "price" ? "btn-danger" : "btn-secondary"
              } ms-1`}
              onClick={() => setSortBy("price")}
            >
              Price
            </div>
          </div>
          <div className="ms-1 border-start border-dark">
            <div
              className={`btn ${
                sort === "asc" ? "btn-danger" : "btn-secondary"
              } ms-1`}
              onClick={() => setSort("asc")}
            >
              Asc
            </div>
            <div
              className={`btn ${
                sort === "desc" ? "btn-danger" : "btn-secondary"
              } ms-1`}
              onClick={() => setSort("desc")}
            >
              Desc
            </div>
          </div>
          <div className="search ms-2">
            <input
              type="search"
              className="form-control"
              value={inputData.search}
              name="search"
              onChange={handleChange}
              placeholder="Search"
              style={{ marginLeft: "10px", borderRadius: "10px" }}
            />
          </div>
        </div>
      </div>

      <div className="container mt-4 p-2 border border-3 ">
        <h5 className="text" style={{ fontWeight: "bold" }}>
          Data Product
        </h5>
        <Table className="striped bordered hover">
          <thead>
            <tr>
              <th>Number</th>
              <th>Name</th>
              <th>Stock</th>
              <th>Price</th>
              <th>Brand</th>
              <th>Photo</th>
              <th>Action</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index + 1}>
                <td>{index + 1}</td>
                <td>{item.name_product}</td>
                <td>{item.stock}</td>
                <td>{item.price?.toLocaleString()}</td>
                <td>{item.brand}</td>
                <td>
                  <img src={item.photo} className={styles.photo} alt="" />
                </td>
                <td>
                  <FaTrashAlt
                    color="red"
                    onClick={() => {
                      setSelected(item.id_product);
                      handleShow();
                    }}
                  />
                </td>
                <td>
                  <ModalEditProduct item={item} />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
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
    </div>
  );
}
