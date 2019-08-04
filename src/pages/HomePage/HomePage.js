import React from "react";

import { BusinessCard, SocialCrumbs, RandomQuote } from "../../components";
import "./HomePage.css";

const HomePage = props => {
  return (
    <div className="home-page-wrapper">
      <BusinessCard />
      <SocialCrumbs />
      <RandomQuote />
    </div>
  );
};

export default HomePage;
