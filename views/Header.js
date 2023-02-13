import React, { useEffect, useRef, useState } from "react";

// contents of menu button
const menuButtonList = [
  {
    label: "Stake Now",
    endIcon: "bi-arrow-up-right",
    variant: "button-primary",
    href: "https://wallet.assetmantle.one/",
  },
];

export default function Header() {
  return (
    <>
      <header
        className="position-fixed container-fluid top-0 start-0"
        style={{
          zIndex: 1200,
          backgroundColor: "rgba(4, 4, 4, 0.8)",
          backdropFilter: "blur(1px)",
        }}
      >
        <nav className="container-lg py-3 mx-auto">
          <div className="d-flex align-items-center">
            <div className="d-flex flex-grow-1">
              <img
                src="/static/asGuardLogo.svg"
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
              {/* {itemList &&
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
                ))} */}
              <div className="d-flex flex-wrap justify-content-center justify-content-md-start gap-2">
                {menuButtonList &&
                  Array.isArray(menuButtonList) &&
                  menuButtonList.length > 0 &&
                  menuButtonList.map((button, index) => (
                    <a
                      key={index}
                      className={`btn d-flex align-items-center gap-2 ${button.variant}`}
                      href={button.href}
                      target="_blank"
                    >
                      {button.label} <i className={`bi ${button.endIcon}`}></i>
                    </a>
                  ))}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
