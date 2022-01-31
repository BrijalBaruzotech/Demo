import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";

function CreateUser() {
  const [name, setName] = useState([""]);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name };

    axios
      .post(`https://61eff057732d93001778e6c0.mockapi.io/Users`, data)
      .then(history.push("/users"));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>UserName: </label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <br />
        <input type="submit"></input>
      </form>
    </div>
  );
}
export default CreateUser;
