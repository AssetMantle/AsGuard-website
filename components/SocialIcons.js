import React from "react";
import { FiGithub, FiTwitter } from "react-icons/fi";
import { BsEnvelope } from "react-icons/bs";

const SocialIcons = ({ spacing = 4, additionalClass = "" }) => (
  <div
    className={`d-flex align-items-start gap-${spacing} text-white body1 ${additionalClass}`}
  >
    <a
      className="text-white"
      href="https://twitter.com/AsGuardNetwork"
      target="_blank"
      color="inherit"
    >
      <FiTwitter />
    </a>
    <a
      className="text-white"
      href="https://github.com/AsGuardNetwork"
      target="_blank"
      color="inherit"
    >
      <FiGithub />
    </a>
    <a
      className="text-white body1"
      href="mailto:hello@asguard.network"
      target="_blank"
      color="inherit"
    >
      <BsEnvelope />
    </a>
  </div>
);

export default SocialIcons;
