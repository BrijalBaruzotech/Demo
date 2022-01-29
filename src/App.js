import { BrowserRouter, Switch, Route } from "react-router-dom";
import User1 from "./Component/User1";
import Products from "./Component/Products";
import Creat from "./Creat";
import Home from "./Home";

function App() {
  return (
    <div>

      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>    
          <Route exact path='/users' component={Products}/>
          <Route exact path="/user/:id" component={User1} />
          <Route exact path='/createUser' component={Creat}/>
          
        </Switch>
      </BrowserRouter>

      
    </div>
  );
}
export default App;
