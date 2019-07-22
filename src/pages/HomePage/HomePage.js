import React from "react";

import { BusinessCard, SocialCrumbs } from "../../components";
import "./HomePage.css";

const HomePage = props => {
  return (
    <div className="home-page-wrapper">
      <BusinessCard />
      <SocialCrumbs />
      <div className="temp">
        <code>Stay tuned for updates.</code>
      </div>
    </div>
  );
};

export default HomePage;
