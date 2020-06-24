import React from "react";
import HelloWorld from "./Components/HelloWorld";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <h1 className="font-bold text-2xl">
              <HelloWorld name="Cobain" />
            </h1>
          </Route>

          <Route exact path="/about">
            <h1 className="font-bold text-2xl">About us</h1>
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
