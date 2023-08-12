import { useState } from "react";
import { Button, Table } from "react-bootstrap";

export default function ChangeUpdata() {
  let [name, setName] = useState("");
  let [arr, setArr] = useState([]);
  let [ind, setInd] = useState(null);

  // to get value
  function getData(e) {
    setName(e.target.value);
  }

  // to add input value to array
  function addData() {
    setArr([...arr, name]);
    setName("");
  }

  // to delete data from array
  function deleteHandler(index) {
    arr.splice(index, 1);
    setArr([...arr]);
  }

  // update
  function updateFun(index, data) {
    setName(data);
    setInd([...arr]);
  }

  function updateChanges() {
    arr.splice(ind, 1, name);
    setArr([...arr]);
    setName("");
    setInd(null);
  }

  // delete all
  function deleteAll() {
    setArr([]);
  }
  return (
    <>
      <h1>Update Changes</h1>
      <div>
        <label htmlFor="name">Name :</label>
        <input
          onChange={(e) => getData(e)}
          type="text"
          value={name}
          id="name"
          placeholder="Enter Your Name"
        />

        <div className="d-inline">
          <Button
            className=""
            onClick={() => addData()}
            variant="btn btn-danger"
          >
            Add Name
          </Button>

          <Button onClick={() => updateChanges()} variant="success">
            Save Changes
          </Button>
        </div>
        <Button className=" " onClick={() => deleteAll()}>
          Delete All{" "}
        </Button>
        {arr.length > 0 ? (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>No .</th>
                <th>First Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {arr.map((e, i) => {
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{e}</td>
                    <td>
                      <Button
                        variant="warning"
                        onClick={() => deleteHandler(i)}
                      >
                        Delete
                      </Button>

                      <Button onClick={() => updateFun(i, e)} variant="info">
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
