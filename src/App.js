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
    <div>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <Link to="/users/">Users</Link>
          </li>
        </ul>
      </div>
      <Router>
        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
      </Router>
    </div>
  );
}

export default App;
