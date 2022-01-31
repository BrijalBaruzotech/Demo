import { BrowserRouter, Switch, Route } from "react-router-dom";
import UserDetails from "./Component/UserDetails";
import UserList from "./Component/UserList";
import CreateUser from "./CreateUser";
import Home from "./Home";
import UpdateUser from "./UpdateUser";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/users" component={UserList} />
          <Route exact path="/user/:id" component={UserDetails} />
          <Route exact path="/updateuser/:id" component={UpdateUser} />
          <Route exact path="/createUser" component={CreateUser} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
