import React from "react";
import Section from "../components/Section";

export default function HowToStakeSection({ howToStakeSectionConfigData }) {
  return (
    <Section
      title={
        howToStakeSectionConfigData.title && howToStakeSectionConfigData.title
      }
      subTitle={
        howToStakeSectionConfigData.description &&
        howToStakeSectionConfigData.description
      }
      subtitleWidth={640}
    >
      {Array.isArray(howToStakeSectionConfigData.steps) &&
        howToStakeSectionConfigData.steps &&
        howToStakeSectionConfigData.steps.length > 0 && (
          <div
            className={howToStakeSectionConfigData.optionContainerStyleClasses}
            style={howToStakeSectionConfigData.optionContainerStyles}
          >
            {howToStakeSectionConfigData.steps.map((step, index) => (
              <div
                className={`rounded-4 text-center`}
                style={{ overflow: "hidden" }}
                key={index}
              >
                <div
                  className="card"
                  style={howToStakeSectionConfigData.optionStyles}
                >
                  <div className="d-flex align-items-center justify-content-center flex-column gap-2 pb-2">
                    {step.image && typeof step.image === "string" ? (
                      <div
                        style={{
                          width: "200px",
                          aspectRatio: "1/1",
                          background:
                            "linear-gradient(157.26deg, rgba(217, 217, 217, 0.16) -5.39%, rgba(217, 217, 217, 0.08) 108.05%);",
                          backdropFilter: "blur(23.724px)",
                          borderRadius: "50%",
                        }}
                        className="d-flex align-items-center justify-content-center"
                      >
                        <img
                          src={step.image}
                          alt={step.title}
                          style={step.dimensions}
                        />
                      </div>
                    ) : (
                      step.image
                    )}
                    {step.title && (
                      <p
                        className={`${step.titleVariant} ${step.titleColor} text-uppercase mt-3`}
                      >
                        {step.title}
                      </p>
                    )}
                  </div>
                  {step.description && (
                    <p
                      className={`${step.descriptionVariant} ${step.descriptionColor}`}
                    >
                      {step.description}
                    </p>
                  )}
                  {step.link && (
                    <a
                      className={`${step.linkColor} text-capitalize h6`}
                      href={`${step.link}`}
                      style={{ textDecoration: "none" }}
                    >
                      {step.linkTitle}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
    </Section>
  );
}
