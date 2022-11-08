import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./component/header/Header";
import Home from "./component/home/Home";
import Checkout from "./component/Checkout/Checkout";
import Login from "./component/Login/Login";
import Signup from "./component/Login/Signup";
import PrivetRoute from "./PrivetRoute";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          {/* This is the default page */}
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route exact path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <PrivetRoute exact path="/login">
            <Login />
          </PrivetRoute>
          <PrivetRoute exact path="/signup">
            <Signup />
          </PrivetRoute>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
