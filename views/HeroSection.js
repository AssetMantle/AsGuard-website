import React from "react";

export default function HeroSection({ heroSectionConfigData }) {
  return (
    <section
      className={heroSectionConfigData.sectionStyle}
      id={
        heroSectionConfigData.title &&
        heroSectionConfigData.title.toLowerCase().replaceAll(" ", "-")
      }
    >
      <div>
        <div
          className="d-flex align-items-center"
          style={{
            width: "100%",
            height: "100vh",
          }}
        >
          <div
            className="bg-image text-center d-flex flex-column justify-content-center align-items-center"
            style={{
              background: `url(${heroSectionConfigData.image}) no-repeat`,
              backgroundSize: "contain",
              width: "100%",
              height: "100%",
              backgroundPositionY: "center",
            }}
          >
            <div
              className="d-flex justify-content-center gap-2 text-uppercase"
              style={{ letterSpacing: "0.8em" }}
            >
              <h3 className="mb-3 h3">{heroSectionConfigData.title1}</h3>
              <h3
                className="mb-3 h3"
                style={heroSectionConfigData.title2Styles}
              >
                {heroSectionConfigData.title2}
              </h3>
            </div>

            <a
              className={`btn d-flex align-items-center gap-2 px-5 py-2 mt-4 ${heroSectionConfigData.button.variant}`}
              href={heroSectionConfigData.button.href}
              target="_blank"
            >
              {heroSectionConfigData.button.label}{" "}
              <i className={`bi ${heroSectionConfigData.button.endIcon}`}></i>
            </a>
          </div>
          <img
            src={heroSectionConfigData.floatingBoxImage1}
            style={{
              maxWidth: "200px",
              position: "absolute",
              left: "200px",
              top: "450px",
            }}
          />
          <img
            src={heroSectionConfigData.floatingBoxImage2}
            style={{
              maxWidth: "140px",
              position: "absolute",
              right: "250px",
              top: "250px",
            }}
          />
        </div>
      </div>
    </section>
  );
}
