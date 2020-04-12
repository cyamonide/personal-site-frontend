import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { HomePage, ProjectsPage } from "./pages";
import { BusinessCard } from "./components";

import "./App.css";

function App() {
  return (
    <Router>
      <Route path="/" exact component={HomePage} />
      <Route path="/projects/" component={ProjectsPage} />
      <Route path="/working/" component={BusinessCard} />
    </Router>
  );
}

export default App;
