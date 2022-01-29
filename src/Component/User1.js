import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const User1 = () => {
  const [users, setProduct] = useState([]);
  const [newName, setname] = useState([]);
  const [isPending, setPending] = useState(true);
  const history = useHistory();

  
  const { id } = useParams();

  const updateUser = (id) => {

    const updateName = {name: `name1`}
    axios.put(`https://61eff057732d93001778e6c0.mockapi.io/Users/${id}`, updateName)
        .then(response => this.setState({ updatedAt: response.data.updatedAt }))
         .then(history.push('/users'));
        
  }
  
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
      <h1> Here is the User {id}</h1>
      {isPending && <div>Loading...</div>}
      {users && (
        <div>
          <p>User ID: {users.id}</p>
          <p>User Name: {users.name}</p>
        </div>
      )}

      <div>
      <form>
          <label>UserName: </label>
          <input
            type="text"
            value={newName}
            onChange={(e) => setname(e.target.value)}
            required
          />
        </form>
      </div>
      <p>{newName}</p>
      <div>
        <button onClick={updateUser}>Update</button>
      </div>
      </div>
  
  );
};

export default User1;