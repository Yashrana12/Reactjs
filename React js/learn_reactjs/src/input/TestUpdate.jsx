import { useState } from "react";
import { Button, Table } from "react-bootstrap";

export default function TestUpdate() {
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

  function update(index, data) {
    setName(data); // to display data in input
    setInd(index); // for use index in updateInArray method
  }

  function updateInArray() {
    if (ind || ind === 0) {
      arr.splice(ind, 1, name); // remoe old element and add new element in array
      setArr([...arr]); // set new array
      setName(""); // to balnk input
      setInd(null); // to set null
    } else {
      alert("select any record");
    }
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

          <Button
            className=" "
            onClick={() => updateInArray()}
            variant="primary"
          >
            Save Changes
          </Button>
        </div>

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
                      <Button onClick={() => update(i, e)} variant="info">
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
