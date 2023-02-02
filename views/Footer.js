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
      <footer
        sx={{ py: 8 }}
        className="py-6 bg-translucent text-white rounded-4"
      >
        <div className="container-lg d-flex flex-column gap-2">
          {FooterConfigData.showTopData === true && (
            <div className="row gap-4 bg-t">
              <div className="col-12 col-sm-6 col-md-3">
                {FooterConfigData.colOne.list &&
                  Array.isArray(FooterConfigData.colOne.list) &&
                  FooterConfigData.colOne.list.length > 0 && (
                    <div className="d-flex flex-column pt-3 gap-3 text-center text-md-start">
                      {React.Children.toArray(
                        FooterConfigData.colOne.list.map((item, index) => (
                          <div className="d-flex flex-column gap-1 bg-t align-items-center align-items-md-start">
                            <p className="caption">{item.title}</p>
                            <NextLink
                              color="primary.main"
                              underline="hover"
                              variant="caption"
                              href={`mailto:${item.text}`}
                            >
                              {item.text}
                            </NextLink>
                          </div>
                        ))
                      )}
                      <SocialIcons
                        additionalClass="justify-content-center justify-content-md-start body1"
                        spacing={3}
                        size="small"
                      />
                    </div>
                  )}
              </div>
              <div
                className="col-12 col-sm-6 col-md-3"
                style={{ textAlign: "center" }}
              >
                {FooterConfigData.colTwo.list &&
                  Array.isArray(FooterConfigData.colTwo.list) &&
                  FooterConfigData.colTwo.list.length > 0 && (
                    <div className="d-flex flex-column pt-3 gap-3">
                      {React.Children.toArray(
                        FooterConfigData.colTwo.list.map((item, index) => (
                          <NextLink
                            className="text-primary caption hover-underline"
                            href={item.link.href}
                            key={`${index}sa${item}`}
                          >
                            {item.link.text}
                          </NextLink>
                        ))
                      )}
                    </div>
                  )}
              </div>
              <div
                className="col-12 col-sm-6 col-md-3"
                style={{ textAlign: "center" }}
              >
                {FooterConfigData.colThree.list &&
                  Array.isArray(FooterConfigData.colThree.list) &&
                  FooterConfigData.colThree.list.length > 0 && (
                    <div className="d-flex flex-column pt-3 gap-3">
                      {React.Children.toArray(
                        FooterConfigData.colThree.list.map((item, index) => (
                          <NextLink
                            className="text-primary caption hover-underline"
                            href={item.link.href}
                            key={`${index}sa${item}`}
                          >
                            {item.link.text}
                          </NextLink>
                        ))
                      )}
                    </div>
                  )}
              </div>
              <div
                className="col-12 col-sm-6 col-md-2"
                style={{ textAlign: "center" }}
              >
                {FooterConfigData.colFour.list &&
                  Array.isArray(FooterConfigData.colFour.list) &&
                  FooterConfigData.colFour.list.length > 0 && (
                    <div className="d-flex flex-column pt-3 gap-3">
                      {React.Children.toArray(
                        FooterConfigData.colFour.list.map((item, index) => (
                          <NextLink
                            className="text-primary caption hover-underline"
                            href={item.link.href}
                            key={`${index}sa${item}`}
                          >
                            {item.link.text}
                          </NextLink>
                        ))
                      )}
                    </div>
                  )}
              </div>
            </div>
          )}
          <hr className="bg-gray-800" style={{ height: "1px" }} />
          <div className="d-flex align-items-center pt-3 pb-5 gap-2 flex-column flex-sm-row justify-content-between align-items-center">
            <img src="/static/Logo.svg" style={{ maxWidth: "200px" }}></img>
            <p className="caption text-center">
              © AssetMantle {new Date().getFullYear()} - All rights reserved{" "}
            </p>
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
