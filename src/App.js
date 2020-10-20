import React from "react";
import { BrowserRouter, Link, Switch } from "react-router-dom";
import "./App.css";
import AnonRoute from "./components/auth/AnonRoute";
import PrivateRoute from "./components/auth/PrivateRoute";
import Navbar from "./components/Navbar/Navbar";
import { validateSession } from "./services/userService";
import Home from "./views/Home";
import Login from "./views/Login";
import Signup from "./views/Signup";

class App extends React.Component {
  state = {
    authenticated: false,
    user: {},
  };
  componentDidMount = () => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      validateSession(accessToken)
        .then((response) => {
          console.log(response, "RESPONSE");
          this.authenticate(response.session.userId);
        })
        .catch((err) => console.log(err));
    }
  };

  authenticate = (user) => {
    this.setState({
      authenticated: true,
      user,
    });
  };

  handleLogout = () => {
    localStorage.clear();
    this.setState({
      authenticated: false,
      user: {},
    });
  };
  render() {
    const { authenticated } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <nav>
            {authenticated && <Link to="/"> Home </Link>}
            {!authenticated && <Link to="/login"> Login </Link>}
            {!authenticated && <Link to="/signup"> Signup </Link>}
            {authenticated && (
              <Link to={"/"} onClick={this.handleLogout}>
                Logout
              </Link>
            )}
          </nav>
          <h1 className='intro--header'>Welcome to IronNext</h1>
          <p className='intro--text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam temporibus fugiat vitae delectus, at quam nisi animi adipisci quidem quod quo, voluptates dolores blanditiis odit, reiciendis nulla perferendis? Quasi, mollitia!</p>
          <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, sunt!</h2>
          <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, sunt!</h3>
          <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, sunt!</h4>
          <Switch>
            <PrivateRoute
              exact
              path="/"
              user={this.state.user}
              authenticated={authenticated}
              component={Home}
            />
            <AnonRoute
              exact
              path="/login"
              authenticated={authenticated}
              authenticate={this.authenticate}
              component={Login}
            />
            <AnonRoute
              exact
              path="/signup"
              authenticated={authenticated}
              authenticate={this.authenticate}
              component={Signup}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
