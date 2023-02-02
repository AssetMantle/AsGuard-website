import React from "react";
import Section from "../components/Section";

export default function FeatureSection({ featureSectionConfigData }) {
  return (
    <Section
      title={featureSectionConfigData.title && featureSectionConfigData.title}
      subTitle={
        featureSectionConfigData.description &&
        featureSectionConfigData.description
      }
    >
      {Array.isArray(featureSectionConfigData.featuresArray) &&
        featureSectionConfigData.featuresArray &&
        featureSectionConfigData.featuresArray.length > 0 && (
          <div
            className={featureSectionConfigData.optionContainerStyleClasses}
            style={featureSectionConfigData.optionContainerStyles}
          >
            {featureSectionConfigData.featuresArray.map((feature, index) => (
              <div
                className={`rounded-4 bg-${featureSectionConfigData.paperVariant} text-center`}
                style={{ overflow: "hidden" }}
                key={index}
              >
                <div
                  className="card hover-dark-100"
                  style={featureSectionConfigData.optionStyles}
                >
                  <div className="d-flex align-items-center justify-content-center flex-column gap-2 pb-2">
                    {feature.icon && typeof feature.icon === "string" ? (
                      <img
                        style={{ width: "80px", aspectRatio: "1/1" }}
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
              </div>
            ))}
          </div>
        )}
    </Section>
  );
}
