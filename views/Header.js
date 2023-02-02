import React, { useEffect, useRef, useState } from "react";
import BasicMenu from "../components/BasicMenu";

// contents of menu and/or drawer
const itemList = [
  {
    menuName: "Products",
    isExternalURL: false,
    isNestMenuCollapsed: false,
    endIcon: "bi-chevron-down",
    ratioWidthExist: true,
    url: [
      {
        menuName: "In-House",
        menuIcon: <i className="bi bi-house-fill"></i>,
        menuDescription: "",
        isExternalURL: false,
        isNestMenuCollapsed: false,
        url: [
          {
            menuName: "MantlePlace",
            isExternalURL: true,
            isNestMenuCollapsed: true,
            url: "https://marketplace.assetmantle.one/",
          },
          {
            menuName: "MantleBuilder",
            isExternalURL: true,
            isNestMenuCollapsed: true,
            url: "https://docs.assetmantle.one/MantleBuilder_Overview/",
          },
          {
            menuName: "MantleWallet",
            isExternalURL: true,
            isNestMenuCollapsed: true,
            url: "https://wallet.assetmantle.one/",
          },
          {
            menuName: "MantleExplorer",
            isExternalURL: true,
            isNestMenuCollapsed: true,
            url: "https://explorer.assetmantle.one/",
          },
        ],
      },
      {
        menuName: "External",
        menuIcon: <i className="bi bi-box-arrow-up-right"></i>,
        menuDescription: "",
        isExternalURL: false,
        isNestMenuCollapsed: false,
        titleExist: true,
        url: [
          {
            menuName: "Wallet",
            isExternalURL: false,
            isNestMenuCollapsed: true,
            url: [
              {
                menuName: "Keplr",
                isExternalURL: true,
                isNestMenuCollapsed: true,
                url: "https://www.keplr.app/",
              },
              {
                menuName: "Cosmostation",
                isExternalURL: true,
                isNestMenuCollapsed: true,
                url: "https://wallet.cosmostation.io/asset-mantle",
              },
              {
                menuName: "Everstake",
                isExternalURL: true,
                isNestMenuCollapsed: true,
                url: "https://everstake.one/assetmantle",
              },
              {
                menuName: "Citadel",
                isExternalURL: true,
                isNestMenuCollapsed: true,
                url: "https://app.citadel.one/",
              },
            ],
          },
          {
            menuName: "Explorer",
            isExternalURL: false,
            isNestMenuCollapsed: true,
            url: [
              {
                menuName: "MintScan",
                isExternalURL: true,
                isNestMenuCollapsed: true,
                url: "https://www.mintscan.io/asset-mantle",
              },
              {
                menuName: "PostCapitalist",
                isExternalURL: true,
                isNestMenuCollapsed: true,
                url: "https://explorer.postcapitalist.io/AssetMantle",
              },
              {
                menuName: "BigDipper",
                isExternalURL: true,
                isNestMenuCollapsed: true,
                url: "https://bigdipper.live/assetmantle",
              },
              {
                menuName: "StakingRewards",
                isExternalURL: true,
                isNestMenuCollapsed: true,
                url: "https://www.stakingrewards.com/earn/asset-mantle/",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    menuName: "$MNTL",
    isExternalURL: false,
    isNestMenuCollapsed: false,
    endIcon: "bi-chevron-down",
    url: [
      {
        menuName: "Token",
        menuIcon: <i className="bi bi-box"></i>,
        menuDescription: "",
        isExternalURL: true,
        isNestMenuCollapsed: true,
        url: [
          {
            menuName: "Tokenomics",
            isExternalURL: true,
            isNestMenuCollapsed: true,
            url: "https://blog.assetmantle.one/2022/03/01/mntl-tokenomics-and-utility/",
          },
          {
            menuName: "MantleDrop",
            isExternalURL: true,
            isNestMenuCollapsed: true,
            url: "https://airdrop.assetmantle.one/",
          },
        ],
      },
      {
        menuName: "Tracking",
        menuIcon: <i className="bi bi-speedometer2"></i>,
        menuDescription: "",
        isExternalURL: true,
        isNestMenuCollapsed: true,
        url: [
          {
            menuName: "CoinGecko",
            isExternalURL: true,
            isNestMenuCollapsed: true,
            url: "https://www.coingecko.com/en/coins/assetmantle/usd",
          },
          {
            menuName: "CoinMarketCap",
            isExternalURL: true,
            isNestMenuCollapsed: true,
            url: "https://coinmarketcap.com/currencies/assetmantle/",
          },
        ],
      },
    ],
  },
  {
    menuName: "Resources",
    isExternalURL: false,
    isNestMenuCollapsed: true,
    endIcon: "bi-chevron-down",
    url: [
      {
        menuName: "Docs",
        menuIcon: <i className="bi bi-file-earmark-text"></i>,
        menuDescription: "",
        isExternalURL: true,
        isNestMenuCollapsed: false,
        url: [
          {
            menuName: "About",
            isExternalURL: false,
            isNestMenuCollapsed: false,
            url: "/about",
          },
          {
            menuName: "Whitepaper",
            isExternalURL: true,
            isNestMenuCollapsed: false,
            url: "https://docs.assetmantle.one/AssetMantle_Whitepaper/",
          },
          {
            menuName: "Developer Docs",
            isExternalURL: true,
            isNestMenuCollapsed: false,
            url: "https://docs.assetmantle.one/Quick_Setup#overview",
          },
        ],
      },
      {
        menuName: "Developer Resources",
        menuIcon: <i className="bi bi-code-slash"></i>,
        menuDescription: "",
        isExternalURL: true,
        isNestMenuCollapsed: false,
        url: [
          {
            menuName: "GitHub",
            isExternalURL: true,
            isNestMenuCollapsed: false,
            url: "https://github.com/AssetMantle",
          },
          {
            menuName: "Grants",
            isExternalURL: true,
            isNestMenuCollapsed: false,
            url: "https://grants.assetmantle.one/",
          },
          {
            menuName: "interNFT",
            isExternalURL: true,
            isNestMenuCollapsed: false,
            url: "https://internft.github.io/",
          },
          {
            menuName: "DevNet",
            isExternalURL: true,
            isNestMenuCollapsed: false,
            url: "https://devnet.assetmantle.one/",
          },
        ],
      },
    ],
  },
];

export default function Header(props) {
  const headerRef = useRef();

  useEffect(() => {
    const scroll = (e) => {
      if (window.scrollY > 50)
        headerRef.current.style.backgroundColor = "rgba(0,0,0,0.8)";
      else if (window.scrollY < 50)
        headerRef.current.style.backgroundColor = "";
    };
    window.addEventListener("scroll", scroll);
    return () => window.removeEventListener("scroll", scroll);
  }, []);
  return (
    <>
      <header
        className="position-fixed container-fluid top-0 start-0"
        ref={headerRef}
        style={{ zIndex: 1200 }}
      >
        <nav className="container-lg py-3 mx-auto">
          <div className="d-flex align-items-center">
            <div className="d-flex flex-grow-1">
              <img
                src="/static/Logo.svg"
                alt="logo"
                onClick={() => window.open("/", "_self")}
                style={{ cursor: "pointer", maxWidth: "200px" }}
              />
            </div>
            <button
              className="navbar-toggler d-flex d-sm-none bg-yellow-100"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="d-none d-sm-flex gap-3">
              {itemList &&
                Array.isArray(itemList) &&
                itemList.length > 0 &&
                itemList.map((data, index) => (
                  <BasicMenu
                    key={index}
                    title={data.menuName}
                    urls={data.url}
                    titleEndIcon={data.endIcon}
                    ratioWidthExist={data.ratioWidthExist}
                  />
                ))}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
