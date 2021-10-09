import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Product from "./product";
import Add from "./add";
import Navb from "./nav";
import Edit from "./edit";
import Home from "./home";
import Detail from "./detail";
import Signup from "./page/signup";
import Signin from "./page/Signin";
export default function Routes(props) {
  return (
    <Router>
      <Navb />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/product" exact>
          <Product {...props} />
        </Route>
        <Route path="/product/add">
          <Add onAdd={props.onAdd} />
        </Route>
        <Route path="/product/edit/:id">
          <Edit onUpdate={props.onUpdate} />
        </Route>
        <Route path="/product/detail/:id">
          <Detail />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/signin">
          <Signin />
        </Route>
      </Switch>
    </Router>
  );
}
