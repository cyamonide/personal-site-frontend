import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import "./SocialCrumbs.css";

const SocialCrumbs = props => {
  return (
    <div className="social-crumbs-wrapper">
      <div>
        <a href="mailto:simonliu362@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
      <div>
        <a
          href="https://github.com/cyamonide/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
      <div>
        <a
          href="https://linkedin.com/in/cyamonide/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
      <div>
        <a
          // href="http://api.cyamonide.me/documents/resume"
          href="http://cyamonide.me/resume/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFileAlt} />
        </a>
      </div>
    </div>
  );
};

export default SocialCrumbs;
