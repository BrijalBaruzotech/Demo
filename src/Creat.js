import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Creat() {
  const [id, setId] = useState([""]);
  const [name, setName] = useState([""]);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, id };

    fetch("https://61eff057732d93001778e6c0.mockapi.io/Users", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    }).then(() => {
      console.log("User Added!!");
      history.push("/Products");
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>UserID: </label>
        <input
          type="text"
          required
          value={id}
          onChange={(e) => setId(e.target.value)}
        ></input>
        <br />
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
export default Creat;
