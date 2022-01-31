import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const UpdateUser = () => {
  const [users, setProduct] = useState([]);
  const [name, setName] = useState([]);
  const [isPending, setPending] = useState(true);
  const history = useHistory();

  const { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name: `${name}` };
    axios
      .put(`https://61eff057732d93001778e6c0.mockapi.io/Users/${id}`, data)
      .then(history.push("/users"));
  };

  useEffect(() => {
    setTimeout(() => {
      axios
        .get(`https://61eff057732d93001778e6c0.mockapi.io/Users/${id}`)
        .then((res) => {
          setProduct(res.data);
          setPending(false);
        });
    }, 1000);
  }, [id]);

  return (
    <div className="userDetails">
      <h1> Here is the User {id} </h1>
      {isPending && <div>Loading...</div>}
      {users && (
        <div>
          <p>User ID: {users.id}</p>
          <p>User Name: {users.name}</p>
        </div>
      )}

      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            defaultValue={users.name}
            onChange={(e) => setName(e.target.value)}
          />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
