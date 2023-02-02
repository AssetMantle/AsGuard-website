import React from "react";
import Section from "../components/Section";
import TitleAndSubtitle from "../components/TitleAndSubtitle";

export default function DiverseActor({ diverseActorConfigData }) {
  return (
    <Section>
      <div className="row align-items-center">
        <div className="col-12 col-md-5">
          <div
            className="d-flex flex-column px-2"
            style={{
              maxWidth: "272px",
              maxWidth: diverseActorConfigData.contentMaxWidth
                ? diverseActorConfigData.contentMaxWidth
                : "480px",
            }}
          >
            {diverseActorConfigData.title && (
              <TitleAndSubtitle
                title={diverseActorConfigData.title}
                textAlign="text-center text-md-start"
                isContent
              />
            )}
            {diverseActorConfigData.description &&
            Array.isArray(diverseActorConfigData.description) ? (
              <div
                className="d-flex flex-column gap-4 pb-2 pt-4 text-center text-md-start"
                style={
                  diverseActorConfigData.descriptionStyle || {
                    maxWidth: "92%",
                  }
                }
              >
                {diverseActorConfigData.description.map((item, index) => (
                  <p
                    className={`${diverseActorConfigData.descriptionVariant} ${diverseActorConfigData.descriptionColor}`}
                    key={index}
                  >
                    {item}
                  </p>
                ))}
              </div>
            ) : (
              <p
                className={`${diverseActorConfigData.descriptionVariant} ${diverseActorConfigData.descriptionColor}`}
                styles={
                  diverseActorConfigData.descriptionStyle
                    ? diverseActorConfigData.descriptionStyle
                    : {
                        pb: 2,
                        maxWidth: "92%",
                      }
                }
              >
                {diverseActorConfigData.description}
              </p>
            )}
          </div>
        </div>
        <div className="col-12 col-md-7">
          {diverseActorConfigData.rightSidedImage && (
            <img
              src={diverseActorConfigData.rightSidedImage}
              alt={diverseActorConfigData.title}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          )}
        </div>
      </div>
    </Section>
  );
}
