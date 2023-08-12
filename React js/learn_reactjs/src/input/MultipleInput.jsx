import { useState } from "react";
import { Button, Form, Table } from "react-bootstrap";

export default function MultipleInput() {
  let [userData, setUserData] = useState({
    email: "",
    address: "",
  });

  let [arr, setArr] = useState([]);

  function getData(e) {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  }

  function addData() {
    setArr([...arr, userData]);
    setUserData({
      email: "",
      address: "",
    });
  }

  return (
    <>
      <h1>{userData.name}</h1>
      <h1>{userData.name}</h1>

      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email :</Form.Label>
          <Form.Control
            value={userData.email}
            name="email"
            class="d-inline"
            type="text"
            onChange={(e) => getData(e)}
            placeholder="Enter Email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Addrss :</Form.Label>
          <Form.Control
            value={userData.address}
            name="address"
            class="d-inline"
            type="text"
            onChange={(e) => getData(e)}
            placeholder="Enter Address"
          />
        </Form.Group>

        <Button variant="primary" onClick={() => addData()}>
          Add
        </Button>
      </Form>

      {arr.length > 0 ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No .</th>
              <th>Email</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {arr.map((e, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{e.email}</td>
                  <td>{e.address}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      ) : null}
    </>
  );
}
