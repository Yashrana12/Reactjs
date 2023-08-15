import { useState } from "react";
import { Button, Col, Form, Row, Table } from "react-bootstrap";
// import { AiOutlineDelete } from "react-icons";
// import "./TestMultiInput.css";

export default function MultiInputForm() {
  let [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    eamil: "",
    contact: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  let [formArr, setFormArr] = useState([]);

  function setData(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function getData() {
    setFormArr([...formArr, formData]);
    setFormData({
      firstname: "",
      lastname: "",
      eamil: "",
      contact: "",
      address: "",
      city: "",
      state: "",
      zip: "",
    });
  }
  let [formInd, setFormInd] = useState(null);

  // for delete
  function deleteHandler(index) {
    formArr.splice(index, 1);
    setFormArr([...formArr]);
  }

  // for update
  function updateFun(index, formData) {
    setFormData(formData);
    setFormInd([...formArr]);
  }

  // for save update changes
  function updateChanges() {
    formArr.splice(formInd, 1, formData);
    setFormArr([...formArr]);
    setData("");
    setFormInd(null);
  }

  let [selectedGander, setSelectedGander] = useState("null");

  function selectGander(e) {
    setSelectedGander(e.target.value);
  }
  return (
    <>
      <h1 className="text-center">Student Info</h1>
      <div
        className="main "
        style={{
          height: "100vh",
          width: "100wh",
        }}
      >
        <div className="margin" style={{ margin: "0px 300px" }}>
          <div className="padding" style={{ padding: "100px 0px" }}>
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter First Name"
                    name="firstname"
                    value={formData.firstname}
                    onChange={(e) => setData(e)}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Last Name"
                    name="lastname"
                    value={formData.lastname}
                    onChange={(e) => setData(e)}
                  />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  placeholder="Enter Email Id"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setData(e)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Contact Nmber</Form.Label>
                <Form.Control
                  placeholder="Enter Contact Number"
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={(e) => setData(e)}
                  maxLength={10}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress1">
                <form className="m-auto">
                  <label htmlFor="">Gander :</label>
                  {"  "}
                  <div className="radio d-inline">
                    <input
                      type="radio"
                      value="male"
                      name="gander"
                      id="male"
                      checked={selectedGander === "male"}
                      onChange={(e) => selectGander(e)}
                    />
                    <label htmlFor="male">Male</label>
                  </div>
                  {"  "}
                  <div className="radio d-inline">
                    <input
                      type="radio"
                      value="female"
                      name="gander"
                      id="female"
                      checked={selectedGander === "female"}
                      onChange={(e) => selectGander(e)}
                    />
                    <label htmlFor="female">Female</label>
                  </div>
                  {"  "}
                  <div className="radio d-inline">
                    <input
                      type="radio"
                      value="other"
                      name="gander"
                      id="other"
                      checked={selectedGander === "other"}
                      onChange={(e) => selectGander(e)}
                    />
                    <label htmlFor="other">Others</label>

                    {/* <p>
                      Select Gander <strong>{selectedGander}</strong>
                    </p> */}
                  </div>
                </form>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  placeholder="Apartment, studio, or floor"
                  name="address"
                  value={formData.address}
                  onChange={(e) => setData(e)}
                />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    placeholder="Enter City"
                    name="city"
                    value={formData.city}
                    type="text"
                    onChange={(e) => setData(e)}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>State</Form.Label>
                  <Form.Control
                    placeholder="Enter State"
                    name="state"
                    value={formData.state}
                    onChange={(e) => setData(e)}
                  />
                  <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>Gujarat</option>
                    <option>Rajeshthan</option>
                    <option>Utter Pradesh</option>
                    <option>Maharastra</option>
                    <option>Punjab</option>
                    <option>Delhi</option>
                    <option>Goa</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control
                    name="zip"
                    value={formData.zip}
                    placeholder="Enter Zip Code"
                    onChange={(e) => setData(e)}
                  />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>

              <Button variant="primary" onClick={() => getData()}>
                Submit
              </Button>
              <Button onClick={() => updateChanges()} variant="success">
                Save Chnages
              </Button>
            </Form>
            {
              <Table striped bordered hover>
                <thead style={{ backgroundColor: "lightseagreen" }}>
                  <tr>
                    <th>No .</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Cotact</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Zip</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {formArr.map((e, i) => {
                    return (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{e.firstname}</td>
                        <td>{e.lastname}</td>
                        <td>{e.email}</td>
                        <td>{e.contact}</td>
                        <td>{e.address}</td>
                        <td>{e.city}</td>
                        <td>{e.state}</td>
                        <td>{e.zip}</td>
                        <td>
                          <Button
                            variant="info"
                            onClick={() => deleteHandler(i)}
                          ></Button>
                          <Button
                            onClick={() => updateFun(i, e)}
                            variant="info"
                          >
                            {" "}
                            Update
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            }
          </div>
        </div>
      </div>
    </>
  );
}
