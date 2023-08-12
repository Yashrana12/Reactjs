import { useState } from "react";
import { Form } from "react-bootstrap";

export default function CheckBox() {
  let [hobbie, setHobbie] = useState("");

  function selectHobbie(e) {
    setHobbie(e.target.value);
  }

  return (
    <>
      <Form>
        <input
          type="checkbox"
          name="hobbie"
          value="singing"
          onChange={(e) => selectHobbie(e)}
          checked={hobbie == "singing"}
        />
        <label htmlFor="hobbie">Singing</label>

        <input
          type="checkbox"
          name="hobbie"
          value="dancing"
          onChange={(e) => selectHobbie(e)}
          checked={hobbie == "dancing"}
        />
        <label htmlFor="hobbie">Dancing</label>

        <input
          type="checkbox"
          name="hobbie"
          value="reading"
          onChange={(e) => selectHobbie(e)}
          checked={hobbie == "reading"}
        />
        <label htmlFor="hobbie">Reading</label>

        <input
          type="checkbox"
          name="hobbie"
          value="traveling"
          onChange={(e) => selectHobbie(e)}
          checked={hobbie == "traveling"}
        />
        <label htmlFor="hobbie">Traveling</label>
      </Form>
    </>
  );
}
