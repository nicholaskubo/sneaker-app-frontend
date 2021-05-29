import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import cyan from "@material-ui/core/colors/cyan";
import red from "@material-ui/core/colors/red";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Shoe from "./pages/Shoe";
import ErrorPage from "./pages/Error";

class App extends Component {
  theme = createMuiTheme({
    palette: {
      primary: {
        main: cyan[200],
      },
      secondary: {
        red
      },
      tonalOffset: 0.2,
    },
  });

  state = {
    logged_in: false,
    token: null,
    search: ""
  };

  handleLogin = (token) => {
    this.setState({ logged_in: true, token });
  };

  handleInputChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
}

  componentDidMount() {
    const authToken = localStorage.getItem("token");
    if (authToken) {
      this.setState({ logged_in: true, token: authToken });
    }
  }

  render() {
    return (
      <div className="App">
        <ThemeProvider theme={this.theme}>
          <Router>
            
            <NavBar logged_in={this.state.logged_in} handleInputChange={this.handleInputChange} />
              
            <Switch>
                
              <Route exact path="/" component={Home} />

              <Route path="/signin" component={() => (
                  !this.state.logged_in ? <SignIn handleLogin={this.handleLogin} /> : <Redirect to="/" />
              )} />

              <Route path="/signup" component={() => (
                  !this.state.logged_in ? <SignUp handleLogin={this.handleLogin} /> : <Redirect to="/" />
              )} />

              <Route path="/logout" component={() => {
                  localStorage.clear()
                  this.setState({ logged_in: false, token: null })
                  return <Redirect to="/" />
              }} />

              <Route path="/user/:id" component={(props) => <Profile {...props}/>} />

              <Route path="/user_shoe/:id" component={(props) => <Shoe {...props}/>} />

              {/* <Route path="/profile" component={() => (
                  this.state.logged_in ? <Profile /> : <Redirect to="/login" />
              )} /> */}
              
              <Route path="*" component={ErrorPage}/>
                
            </Switch>
          </Router>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
