import React from "react";

import mugshot from "./mugshot2.jpg";
import "./BusinessCard.css";

const BusinessCard = props => {
  return (
    <div className="card-wrapper">
      <div className="card-image-wrapper">
        <img src={mugshot} alt="mugshot" />
      </div>
      <div className="card-text-wrapper">
        <div>
          <span className="name nf-blue">
            <b>Simon Liu</b>&nbsp;
          </span>
          <span className="nf-cyan">
            {"//"} <a href="https://github.com/cyamonide/">cyamonide</a>
          </span>
          <br />
          <span className="nf-grey divider"></span>
          <br />
          <span className="nf-grey">{"/* Professional inquiries */"}</span>{" "}
          <br />
          <span className="nf-purple">
            <a href="mailto:simonliu362@gmail.com">simonliu362@gmail.com</a>
          </span>
          <br />
          <span className="nf-grey">{"/* Everything else */"}</span> <br />
          <span className="nf-purple">
            <a href="mailto:cyamonide@gmail.com">cyamonide@gmail.com</a>
          </span>
          <br />
          <br />
          <span className="nf-grey">{"/* School */"}</span> <br />
          <span className="nf-yellow school">Computer Science</span>
          <span className="nf-red">University of Waterloo</span>
          <br />
          <span className="nf-grey">{"/* Work */"}</span> <br />
          <span className="nf-yellow work">SWE Intern</span>
          <span className="nf-red">Capital One</span>
          <br />
          <span className="nf-grey">{"/* Interests */"}</span> <br />
          <span className="nf-green">F1 fan, MTB rider, tech enthusiast</span>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
