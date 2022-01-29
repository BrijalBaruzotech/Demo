import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Products() {
  const [users, setProduct] = useState([]);
  const [isPending, setPending] = useState(true);

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
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Products;
