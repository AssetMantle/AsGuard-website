import React from "react";
import Section from "../components/Section";

export default function FastAndEasySetup({ fastAndEasySectionConfigData }) {
  return (
    <Section
      title={
        fastAndEasySectionConfigData.title && fastAndEasySectionConfigData.title
      }
      subTitle={
        fastAndEasySectionConfigData.description &&
        fastAndEasySectionConfigData.description
      }
    >
      {Array.isArray(fastAndEasySectionConfigData.featuresArray) &&
        fastAndEasySectionConfigData.featuresArray &&
        fastAndEasySectionConfigData.featuresArray.length > 0 && (
          <div
            className={`${fastAndEasySectionConfigData.optionContainerStyleClasses}`}
            style={{
              ...fastAndEasySectionConfigData.optionContainerStyles,
              width: "100%",
            }}
          >
            {fastAndEasySectionConfigData.featuresArray.map(
              (feature, index) => (
                <div
                  className={`rounded-4 bg-${fastAndEasySectionConfigData.paperVariant} text-center card hover-dark-100`}
                  style={{
                    ...fastAndEasySectionConfigData.optionStyles,
                    flex: "1",
                  }}
                  key={index}
                >
                  <div className="d-flex align-items-center justify-content-center flex-column gap-2 pb-2">
                    {feature.icon && typeof feature.icon === "string" ? (
                      <img
                        style={{ width: "150px", aspectRatio: "1/1" }}
                        src={feature.icon}
                        alt={feature.title}
                      />
                    ) : (
                      feature.icon
                    )}
                    {feature.title && (
                      <h4
                        className={`${feature.titleVariant} ${feature.titleColor}`}
                      >
                        {feature.title}
                      </h4>
                    )}
                  </div>
                  {feature.description && (
                    <p
                      className={`${feature.descriptionVariant} ${feature.descriptionColor}`}
                    >
                      {feature.description}
                    </p>
                  )}
                </div>
              )
            )}
          </div>
        )}
    </Section>
  );
}
