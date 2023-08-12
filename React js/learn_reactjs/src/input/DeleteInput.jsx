import { useState } from "react";
import { Button, Table } from "react-bootstrap";

export default function DeleteInput() {
  let [name, setName] = useState("");
  let [arr, setArr] = useState([]);

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

  function deleteAll() {
    setArr([]);
  }
  return (
    <>
      <div>
        <label htmlFor="name">Name :</label>
        <input
          onChange={(e) => getData(e)}
          type="text"
          value={name}
          id="name"
          placeholder="Enter Your Name"
        />
        <Button className="" onClick={() => addData()} variant="btn btn-danger">
          Add Name
        </Button>

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
