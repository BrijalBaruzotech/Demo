import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function UserList() {
  const [users, setProduct] = useState([]);
  const [isPending, setPending] = useState();

  const userDelete = (id) => {
    axios
      .delete(`https://61eff057732d93001778e6c0.mockapi.io/Users/${id}`)
      .then(() => {
        window.location.reload(false);
        console.log("User Deleted!!!!");
      });
  };

  useEffect(() => {
    setTimeout(() => {
      axios
        .get("https://61eff057732d93001778e6c0.mockapi.io/Users")
        .then((res) => {
          setProduct(res.data);
          setPending(false);
        });
    }, 1000);
  }, []);

  return (
    <div>
      {isPending === true ? (
        "loading"
      ) : (
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr>
                  <td className="th">{user.id}</td>
                  <td>
                    <Link to={`/user/${user.id}`}>{user.name}</Link>
                  </td>
                  <td>
                    <button onClick={() => userDelete(user.id)}>Delete</button>
                  </td>
                  <td>
                    <Link to={`/updateuser/${user.id}`}>
                      <button>Update</button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default UserList;

