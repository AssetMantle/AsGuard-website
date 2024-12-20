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
      <div
        className="bg-image text-center d-flex flex-column justify-content-center align-items-center w-100 py-6 py-md-5"
        style={{
          backgroundImage: `linear-gradient(
            0deg,
            rgba(14, 14, 14, 0) 41.37%,
            rgba(14, 14, 14, 0.8) 48.46%,
            rgba(14, 14, 14, 0.8) 61.44%,
            rgba(14, 14, 14, 0) 70.43%
          ), url(${heroSectionConfigData.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
          backgroundRepeat: "no-repeat",
          height: "min(928px, 100vh)",
        }}
      >
        <div
          className="d-flex align-items-center justify-content-center gap-2 text-uppercase"
          style={{ letterSpacing: "0.3em" }}
        >
          <h3 className="mb-3 h2 mx-1 text-center">
            {heroSectionConfigData.title1}{" "}
            <span style={heroSectionConfigData.title2Styles}>
              {heroSectionConfigData.title2}
            </span>
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
    </section>
  );
}
