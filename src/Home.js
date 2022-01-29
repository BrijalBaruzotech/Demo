import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <p>Wel Come to demo Project!!!!!</p>

      <div>
        <p>
          <Link to="/users">User List</Link>
        </p>
        <p>Create New User</p>
        <p>
          <Link to="/createUser">Create New User</Link>
        </p>
      </div>
    </div>
  );
}
export default Home;
