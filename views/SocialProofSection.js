import React from "react";
import Section from "../components/Section";

export default function SocialProofSection({ socialProofConfigData }) {
  return (
    <Section
      title={socialProofConfigData.title}
      subTitle={socialProofConfigData.description}
    >
      {Array.isArray(socialProofConfigData.features) &&
        socialProofConfigData.features &&
        socialProofConfigData.features.length > 0 && (
          <div
            className="d-flex align-items-center justify-content-center justify-content-md-around flex-wrap pt-5"
            style={{ ...socialProofConfigData.optionContainerStyles }}
          >
            {socialProofConfigData.features.map((feature, index) => (
              <a
                className="card p-3 d-flex social_proof-hover"
                style={{
                  width: "min(178px,100%)",
                  height: "100%",
                  background: "transparent",
                }}
                key={index}
                component="a"
                href={feature.link && feature.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt={feature.title && feature.title}
                  src={feature.image && feature.image}
                  style={{ border: "none", width: "100%", height: "auto" }}
                />
              </a>
            ))}
          </div>
        )}
    </Section>
  );
}
