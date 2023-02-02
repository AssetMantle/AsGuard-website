import React, { useState } from "react";
import Section from "../components/Section";

export default function ChainSection({ chainSectionConfigData }) {
  const [showDescription, setShowDescription] = useState();
  return (
    <Section
      title={chainSectionConfigData.title}
      subTitle={chainSectionConfigData.subTitle}
    >
      <div className="row pt-4" style={{ width: "100%" }}>
        <div
          className="col-12 col-md-6"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "transparent",
          }}
        >
          {/* Left Sub-section */}
          <div
            className="d-flex gap-2 flex-column align-items-center justify-content-center"
            style={{ maxWidth: "400px" }}
          >
            {Array.isArray(chainSectionConfigData.chains) &&
              chainSectionConfigData.chains &&
              chainSectionConfigData.chains.length > 0 && (
                <div className="row">
                  {chainSectionConfigData.chains.map((data, index) => (
                    <div
                      className="col-6 d-flex justify-content-center align-items-center p-0"
                      style={{
                        cursor: "pointer",
                      }}
                      key={index}
                      onBlur={() => setShowDescription()}
                      onFocus={() => setShowDescription(index + 1)}
                      onMouseOver={() => setShowDescription(index + 1)}
                      onMouseOut={() => setShowDescription()}
                    >
                      <img src={data.icon} alt={data.alt} width="90%" />
                    </div>
                  ))}
                </div>
              )}
            <p
              className={`${chainSectionConfigData.descriptionVariant} text-${chainSectionConfigData.descriptionColor} text-center`}
              style={{
                maxWidth: "385px",
              }}
            >
              {showDescription
                ? chainSectionConfigData.chains[showDescription - 1].title
                : chainSectionConfigData.defaultChainDescription}
            </p>
          </div>
        </div>

        <div
          className="col-12 col-md-6"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "transparent",
          }}
        >
          {/* Right Sub-section */}
          <div
            className="d-flex flex-column gap-2 py-4 align-items-center justify-content-center"
            sx={{
              width: "100%",
              flexGrow: 1,
            }}
          >
            <div className="d-flex flex-row gap-2 align-items-center justify-content-center">
              {chainSectionConfigData.subSectionTitleIcon && (
                <img
                  src={chainSectionConfigData.subSectionTitleIcon}
                  alt={
                    chainSectionConfigData.subSectionTitle &&
                    chainSectionConfigData.subSectionTitle
                  }
                  style={{ width: "50%" }}
                />
              )}
              {chainSectionConfigData.subSectionTitle && (
                <h1
                  className={`${
                    chainSectionConfigData.subSectionTitleVariant || "h1"
                  } text-${
                    chainSectionConfigData.subSectionTitleColor || "primary"
                  }`}
                >
                  {chainSectionConfigData.subSectionTitle}
                </h1>
              )}
            </div>
            {chainSectionConfigData.subSectionDescription && (
              <p
                className={`${
                  chainSectionConfigData.subSectionDescriptionVariant || "body1"
                }`}
                style={
                  chainSectionConfigData.subSectionDescriptionStyle &&
                  chainSectionConfigData.subSectionDescriptionStyle
                }
              >
                {chainSectionConfigData.subSectionDescription}
              </p>
            )}
            {chainSectionConfigData.ctas &&
              chainSectionConfigData.ctas.length > 0 && (
                <div className="d-flex align-items-center justify-content-center gap-2 flex-wrap pt-1">
                  {chainSectionConfigData.ctas.map((cta, index) => (
                    <a
                      className={`btn button-${
                        cta.variant ? cta.variant : "primary"
                      }`}
                      key={index}
                      size="large"
                      href={cta.url && cta.url}
                      target={cta.target && cta.target}
                    >
                      {cta.title && cta.title}{" "}
                      {cta.icon && <i className={`bi ${cta.icon}`}></i>}
                    </a>
                  ))}
                </div>
              )}
          </div>
        </div>
      </div>
    </Section>
  );
}
