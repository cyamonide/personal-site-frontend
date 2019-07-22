import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

const Index = () => {
  return <h2>Home</h2>;
};

const About = () => {
  return <h2>About</h2>;
};

const Users = () => {
  return <h2>Users</h2>;
};

function App() {
  return (
    <Router>
      <Route path="/" exact component={Index} />
      <Route path="/about/" component={About} />
      <Route path="/users/" component={Users} />
    </Router>
  );
}

export default App;
