import React from "react";
import Movies from "./components/movies.jsx";
import Customers from "./components/Customers.jsx";
import Rentals from "./components/Rentals";
import NotFound from "./components/NotFound.jsx";
import { Route, Redirect, Switch } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import MovieForm from "./components/MovieForm";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/movies/:id" component={MovieForm} />
          <Route path="/movies" component={Movies}></Route>
          <Route path="/customers" component={Customers}></Route>
          <Route path="/rentals" component={Rentals}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
