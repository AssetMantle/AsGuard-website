import React from "react";
import { FiGithub, FiTwitter } from "react-icons/fi";
import { TbBrandTelegram, TbBrandDiscord } from "react-icons/tb";
import { BsInstagram } from "react-icons/bs";

const SocialIcons = ({ spacing = 4, additionalClass = "" }) => (
  <div
    className={`d-flex align-items-start gap-${spacing} text-white body1 ${additionalClass}`}
  >
    <a
      className="text-white"
      href="https://twitter.com/AssetMantle"
      target="_blank"
      color="inherit"
    >
      <FiTwitter />
    </a>
    <a
      className="text-white"
      href="https://discord.gg/BSdBQ4495d"
      target="_blank"
      color="inherit"
    >
      <TbBrandDiscord />
    </a>
    <a
      className="text-white"
      href="https://github.com/AssetMantle"
      target="_blank"
      color="inherit"
    >
      <FiGithub />
    </a>
    <a
      className="text-white"
      href="https://t.me/assetmantlechat"
      target="_blank"
      color="inherit"
    >
      <TbBrandTelegram />
    </a>
    <a
      className="text-white"
      href="https://www.instagram.com/assetmantle/"
      target="_blank"
      color="inherit"
    >
      <BsInstagram />
    </a>
  </div>
);

export default SocialIcons;
