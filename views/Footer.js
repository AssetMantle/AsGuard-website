import React, { useEffect, useRef } from "react";
import { FiLinkedin, FiGithub, FiTwitter } from "react-icons/fi";
import { TbBrandTelegram, TbBrandDiscord } from "react-icons/tb";
import { MdNorthEast } from "react-icons/md";
import SocialIcons from "../components/SocialIcons";
import NextLink from "../components/NextLink";

const FooterConfigData = {
  showTopData: true,
  titleVariant: "body2",
  colOne: {
    title: "Email",
    list: [
      {
        title: "For information & support:",
        text: "hello@assetmantle.one",
        email: "hello@assetmantle.one",
      },
      {
        title: "For collaborations & interests:",
        text: "communications@assetmantle.one",
        email: "communications@assetmantle.one",
      },
    ],
  },
  colTwo: {
    title: "Placeholder",
    list: [
      {
        title: "Documentation",
        link: {
          text: "Documentation",
          href: "https://docs.assetmantle.one/",
        },
      },
      {
        title: "Blog",
        link: {
          text: "Blog",
          href: "http://blog.assetmantle.one/",
        },
      },
      {
        title: "Whitepaper",
        link: {
          text: "Whitepaper",
          href: "https://docs.assetmantle.one/AssetMantle_Whitepaper/",
        },
      },
      {
        title: "Buy $MNTL",
        link: {
          text: "Buy $MNTL",
          href: "https://app.osmosis.zone/?from=USDC&to=MNTL",
        },
      },
      {
        title: "Tokenomics",
        link: {
          text: "Tokenomics",
          href: "/about#mntl-token-distribution",
        },
      },
    ],
  },
  colThree: {
    title: "Products",
    list: [
      {
        title: "MantlePlace",
        link: {
          text: "MantlePlace",
          href: "https://marketplace.assetmantle.one/",
        },
      },
      {
        title: "MantleBuilder",
        link: {
          text: "MantleBuilder",
          href: "https://docs.assetmantle.one/MantleBuilder_Overview/",
        },
      },
      {
        title: "MantleWallet",
        link: {
          text: "MantleWallet",
          href: "https://wallet.assetmantle.one/",
        },
      },
      {
        title: "MantleExplorer",
        link: {
          text: "MantleExplorer",
          href: "https://explorer.assetmantle.one/",
        },
      },
      {
        title: "MantlePlace Devnet",
        link: {
          text: "MantlePlace Devnet",
          href: "https://devnet.assetmantle.one/",
        },
      },
      {
        title: "Mantle-1 Chain",
        link: {
          text: "Mantle-1 Chain",
          href: "/about#mntl-token-info",
        },
      },
    ],
  },
  colFour: {
    title: "Placeholder",
    list: [
      {
        title: "interNFT",
        link: {
          text: "interNFT",
          href: "https://internft.org/",
        },
      },
      {
        title: "Grants",
        link: {
          text: "Grants",
          href: "https://grants.assetmantle.one/",
        },
      },
      {
        title: "Airdrops",
        link: {
          text: "Airdrops",
          href: "https://airdrop.assetmantle.one/",
        },
      },
      {
        title: "About",
        link: {
          text: "About",
          href: "/about",
        },
      },
      {
        title: "Ecosystems",
        link: {
          text: "Ecosystems",
          href: "/ecosystems",
        },
      },
      {
        title: "Access our Resources",
        link: {
          icon: <MdNorthEast />,
          text: "MediaKit",
          href: "https://docs.assetmantle.one/MediaKit",
        },
      },
    ],
  },
};

export default function Footer(props) {
  const backToTopRef = useRef();

  useEffect(() => {
    const scroll = (e) => {
      backToTopRef.current.style.opacity = window.scrollY / 600;
    };
    window.addEventListener("scroll", scroll);
    return () => window.removeEventListener("scroll", scroll);
  }, []);
  return (
    <>
      <footer sx={{ py: 8 }} className="py-3 bg-translucent text-white">
        <div className="container-lg d-flex flex-column gap-2">
          <div className="d-flex align-items-center pt-3 pb-3 gap-2 flex-column flex-sm-row justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-4">
              <img
                src="/static/asGuardLogo.svg"
                style={{ maxWidth: "200px" }}
              ></img>
              <p className="caption text-center mb-0 text-gray">
                © AsGuard {new Date().getFullYear()} - All rights reserved{" "}
              </p>
            </div>
            <div className="d-flex align-items-center gap-4">
              <SocialIcons
                additionalClass="justify-content-center justify-content-md-start body1"
                spacing={3}
                size="small"
              />
              <div className="caption text-center d-flex align-items-center gap-2">
                <p className="mb-0 text-gray">Powered by </p>
                <img src="/static/Logo.svg" style={{ maxWidth: "140px" }}></img>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div
        ref={backToTopRef}
        className="back-to-top text-white position-fixed bottom-0 end-0 pb-3 pe-3"
        style={{ opacity: "0" }}
      >
        <div
          className="d-flex align-items-center justify-content-center rounded-circle bg-gray-800 px-3 py-2  bg-yellow-100-hover"
          style={{ aspectRatio: "1/1", fontWeight: "900" }}
        >
          <i className="bi bi-chevron-up"></i>
        </div>
      </div>
    </>
  );
}
