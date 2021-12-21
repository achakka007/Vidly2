import React from 'react';
import "./App.css";
import { Route, Redirect, Switch } from 'react-router-dom';
import Movies from "./components/movies";
import MovieForm from './components/movieForm';
import NotFound from './components/notFound';
import Customers from './components/customers';
import Rentals from './components/rentals';
import NavBar from './components/navBar';
import LoginForm from './components/common/loginForm';
import RegisterForm from './components/common/registerForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <NavBar></NavBar>
      <main className="container">
        <Switch>
          <Route path="/register" component={RegisterForm}></Route>
          <Route path="/login" component={LoginForm}></Route>
          <Route path="/movies/:id" component={MovieForm}></Route>
          <Route path="/movies" component={Movies}></Route>
          <Route path="/customers" component={Customers}></Route>
          <Route path="/rentals" component={Rentals}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Redirect from="/" exact to="/movies"></Redirect>
          <Redirect to="/not-found"></Redirect>
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
