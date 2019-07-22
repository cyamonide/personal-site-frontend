import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import HomePage from "./HomePage";
import ResumePage from "./ResumePage";
import ProjectsPage from "./ProjectsPage";

import "./App.css";

function App() {
  return (
    <Router>
      <Route path="/" exact component={HomePage} />
      <Route path="/resume/" component={ResumePage} />
      <Route path="/projects/" component={ProjectsPage} />
    </Router>
  );
}

export default App;
