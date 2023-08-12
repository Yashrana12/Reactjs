import { useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
// import "./TestMultiInput.css";

export default function TestMultiInput() {
  let [userData, setUserData] = useState({
    company: "",
    model: "",
    color: "",
    storage: "",
    price: "",
  });

  let [arr, setArr] = useState([]);
  let [ind, setInd] = useState(null);

  function getData(e) {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  }

  function addData() {
    setArr([...arr, userData]);
    setUserData({
      company: "",
      model: "",
      color: "",
      storage: "",
      price: "",
    });
  }

  function deleteHandler(index) {
    arr.splice(index, 1);
    setArr([...arr]);
  }

  function updateFun(index, data) {
    setUserData(data);
    setInd(index);
  }

  function updateChnage() {
    arr.splice(ind, 1, userData);
    setArr([...arr]);
    setUserData("");
    setInd(null);
  }

  function deleteAll() {
    setArr([]);
  }
  return (
    <>
      <div className="divInp">
        <h1>{userData.name}</h1>
        <h1>{userData.name}</h1>
        <h1>{userData.name}</h1>
        <h1>{userData.name}</h1>
        <h1>{userData.name}</h1>

        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="d-inline">Compney :</Form.Label>
            <Form.Control
              value={userData.company}
              name="company"
              type="text"
              onChange={(e) => getData(e)}
              placeholder="Enter Compnay Name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="d-inline">Models :</Form.Label>
            <Form.Control
              value={userData.model}
              name="model"
              type="text"
              onChange={(e) => getData(e)}
              placeholder="Enter Model"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="d-inline">Colors :</Form.Label>
            <Form.Control
              value={userData.color}
              name="color"
              type="text"
              onChange={(e) => getData(e)}
              placeholder="Enter Color"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="d-inline">Storage :</Form.Label>
            <Form.Control
              value={userData.storage}
              name="storage"
              type="text"
              onChange={(e) => getData(e)}
              placeholder="Enter Storage"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="d-inline">Price :</Form.Label>
            <Form.Control
              value={userData.price}
              name="price"
              type="text"
              onChange={(e) => getData(e)}
              placeholder="Enter Price"
            />
          </Form.Group>
          <Button variant="primary" onClick={() => addData()}>
            Add
          </Button>{" "}
          <Button variant="success" onClick={() => updateChnage()}>
            Save Changes
          </Button>{" "}
          <Button variant="danger" onClick={() => deleteAll()}>
            Delete All
          </Button>
        </Form>

        {arr.length > 0 ? (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>No .</th>
                <th>Compnay</th>
                <th>Model</th>
                <th>Color</th>
                <th>Storage</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {arr.map((e, i) => {
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{e.company}</td>
                    <td>{e.model}</td>
                    <td>{e.color}</td>
                    <td>{e.storage}</td>
                    <td>{e.price}</td>
                    <td>
                      <Button
                        variant="warning"
                        onClick={() => deleteHandler(i)}
                      >
                        Delete
                      </Button>

                      <Button variant="info" onClick={() => updateFun(i, e)}>
                        Update
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        ) : null}
      </div>
    </>
  );
}
