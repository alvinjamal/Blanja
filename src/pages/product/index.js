import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./product.module.css";
import Alert from "../../Components/alert";
import { FaTrashAlt } from "react-icons/fa";
import Table from "react-bootstrap/Table";
import { Button, Modal, Form } from "react-bootstrap";
import swal from "sweetalert";

export default function Product() {
  const [data, setData] = useState([]);
  const [photo, setPhoto] = useState(null);
  const [message, setMessage] = useState({
    title: "",
    text: "",
    type: "success",
  });
  const [messageShow, setMessageShow] = useState(true);
  const [inputData, setInputData] = useState({
    name: "",
    stock: "",
    price: "",
    category_id: "1",
    search: "",
  });
  const [sortBy, setSortBy] = useState("name");
  const [sort, setSort] = useState("asc");
  const [selected, setSelected] = useState(null);
  const [onedit, setOnedit] = useState(false);
  const [temp, setTemp] = useState(null);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteData = () => {
    axios
      .delete(`http://localhost:3500/products/${selected}`)
      .then((res) => {
        handleClose();
        console.log("delete data success");
        console.log(res);
        setMessageShow(true);
        swal({
          title: "success",
          text: "Delete data success",
          type: "danger",
        });
        messageTime();
        getData();
      })
      .catch((err) => {
        console.log("Delete data fail");
        console.log(err);
        setMessageShow(true);
        setMessage({ title: "Fail", text: "Delete data fail", type: "danger" });
        messageTime();
      });
  };

  const editForm = (item) => {
    console.log(item);
    setTemp(item);
    setInputData({
      ...inputData,
      name: item.name,
      stock: item.stock,
      price: item.price,
    });
  };

  useEffect(() => {
    selected ? setOnedit(true) : setOnedit(false);
    !selected &&
      setInputData({
        ...inputData,
        name: "",
        stock: "",
        price: "",
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

  let users = `http://localhost:3500/products?sortby=${sortBy}&sort=${sort}&search=${inputData.search}`;
  const getData = () => {
    axios
      .get(users)
      .then((res) => {
        console.log("get data success");
        console.log(res.data.data);
        res.data && setData(res.data.data);
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

  const postForm = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", inputData.name);
    formData.append("stock", inputData.stock);
    formData.append("price", inputData.price);
    formData.append("category_id", inputData.category_id);
    formData.append("photo", photo);
    formData.append("search", inputData.search);

    if (!selected) {
      axios
        .post("http://localhost:3500/products", formData, {
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
          });
          messageTime();
          getData();
        })
        .catch((err) => {
          console.log("Post data failed please try again");
          console.log(err);
          setMessageShow(true);
          setMessage({
            title: "failed",
            text: "Post data failed please try again",
            type: "danger",
          });
          messageTime();
        });
    } else {
      axios
        .put(`http://localhost:3500/products/${selected}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log("input data success");
          console.log(res);
          setMessageShow(true);
          setMessage({
            title: "success",
            text: "update data success",
            type: "success",
          });
          messageTime();
          getData();
        })
        .catch((err) => {
          console.log("input data fail");
          setMessageShow(true);
          setMessage({ title: "fail", text: "post data fail", type: "danger" });
          messageTime();
          console.log(err);
        });
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
      {/* post data */}
      <Form onSubmit={postForm} className="container mt-4 p-2 border border-3 ">
        <h5 className="text">Add Product</h5>
        <div className="d-flex flex-row ">
          <input
            className="form-control"
            type="text"
            value={inputData.name}
            name="name"
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
          <button className="btn btn-primary" type="submit">
            Update
          </button>
        ) : (
          <button
            className="btn btn-danger"
            type="submit"
            style={{ marginTop: "10px" }}
          >
            Post
          </button>
        )}
      </Form>

      {/* filter */}
      <div className="container  mt-2 p-2 rounded container mt-4 p-2 border border-3">
        <h5 className="text">Filter</h5>
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

      {/* get data */}
      <div className="container mt-4 p-2 border border-3 ">
        <h5 className="text">Data Product</h5>
        <Table className="striped bordered hover">
          <thead>
            <tr>
              <th>Number</th>
              <th>Name</th>
              <th>Stock</th>
              <th>Price</th>
              <th>Photo</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index + 1}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.stock.toLocaleString()}</td>
                <td>{item.price.toLocaleString()}</td>
                <td>
                  <img src={item.photo} className={styles.photo} alt="" />
                </td>
                <td>
                  <FaTrashAlt
                    color="red"
                    onClick={() => {
                      setSelected(item.id);
                      handleShow();
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {/* alert */}
      {/* {messageShow && (
        <Alert title={message.title} text={message.text} type={message.type} />
      )} */}

      {/* Modal */}
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
            <Button variant="danger" onClick={() => deleteData()}>
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}
