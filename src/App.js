import React from "react";
import HelloWorld from "./Components/HelloWorld";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <HelloWorld name="Cobain" />
      <Footer />
    </div>
  );
}

export default App;
