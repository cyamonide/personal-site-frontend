import React from "react";
import { Grid, Link } from "@material-ui/core";

import { BusinessCard, SocialCrumbs, RandomQuote } from "../../components";
import "./HomePage.css";

const HomePage = (props) => {
  return (
    <>
      <div className="home-page-wrapper">
        <div>
          <h1>
            SIMON LIU <span className="subtle">// cyamonide</span>
          </h1>
        </div>
        <div className="home-page-card">
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={5}>
              <h2>Contact</h2>
            </Grid>
            <Grid item xs={7}>
              <p>hello@cyamonide.me</p>
            </Grid>
          </Grid>
        </div>
        <div className="home-page-card">
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={5}>
              <h2>Education</h2>
            </Grid>
            <Grid item xs={7}>
              <p>
                Computer Science <span className="subtle">at</span>
              </p>
              <p>University of Waterloo</p>
            </Grid>
          </Grid>
        </div>
        <div className="home-page-card">
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={5}>
              <h2>Work</h2>
            </Grid>
            <Grid item xs={7}>
              <p>
                Software Engineering Intern{" "}
                <span className="subtle">working on</span>
              </p>
              <p>
                Infrastructure <span className="subtle">at</span>
              </p>
              <p>
                Coursera <span className="subtle">Mountain View</span>
              </p>
            </Grid>
          </Grid>
        </div>
        <div className="home-page-card">
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={5}>
              <h2>Interests</h2>
            </Grid>
            <Grid item xs={7}>
              <p>
                Formula 1 <span className="subtle">fan</span>
              </p>
              <p>
                Mountain bike <span className="subtle">rider</span>
              </p>
              <p>
                Tech <span className="subtle">enthusiast</span>
              </p>
            </Grid>
          </Grid>
        </div>
        <div className="home-page-card">
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={5}>
              <h2>Social</h2>
            </Grid>
            <Grid item xs={7}>
              <p>
                <Link href="https://resume.cyamonide.me">Resume</Link>
              </p>
              <p>
                <Link href="https://www.linkedin.com/in/cyamonide/">LinkedIn</Link>
              </p>
              <p>
                <Link href="http://github.com/cyamonide/">GitHub</Link>
              </p>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className="home-page-wrapper">
        <BusinessCard />
        <SocialCrumbs />
        <RandomQuote />
      </div>
    </>
  );
};

export default HomePage;
