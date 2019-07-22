import React from "react";

import { BusinessCard } from "../../components";
import "./HomePage.css";

const HomePage = props => {
  return (
    <div className="home-page-wrapper">
      <BusinessCard />
      <div className="temp">
        <code>Stay tuned for updates.</code>
      </div>
    </div>
  );
};

export default HomePage;
