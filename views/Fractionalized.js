import React from "react";
import Section from "../components/Section";

export default function Fractionalized({ initiativeSectionConfigData }) {
  return (
    <Section
      title={initiativeSectionConfigData.title}
      subTitle={
        initiativeSectionConfigData.description &&
        initiativeSectionConfigData.description
      }
    >
      <div className="row ">
        <div className="col-12 col-md-6">
          {initiativeSectionConfigData.leftImage && (
            <img
              src={initiativeSectionConfigData.leftImage}
              alt={initiativeSectionConfigData.leftImage}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          )}
        </div>
        <div className="col-12 col-md-6">
          {Array.isArray(initiativeSectionConfigData.initiatives) &&
            initiativeSectionConfigData.initiatives &&
            initiativeSectionConfigData.initiatives.length > 0 && (
              <div className="d-flex gap-2 flex-column mt-8">
                {initiativeSectionConfigData.initiatives.map(
                  (initiative, index) => (
                    <div
                      className={`rounded-4 bg-${initiativeSectionConfigData.paperVariant} mx-auto mx-md-0 ms-md-auto`}
                      key={index}
                      style={{
                        width: "min(500px, 100%)",
                      }}
                    >
                      <div
                        className="card d-flex flex-row align-items-center ps-2 ps-md-0 pe-2 py-3 text-light bg-t"
                        style={initiativeSectionConfigData.listStyle}
                      >
                        {initiative.icon &&
                          (typeof initiative.icon === "string" ? (
                            <img
                              src={initiative.icon}
                              alt={initiative.title}
                              title={initiative.title}
                              style={{
                                width: "min(95px, 100%)",
                                height: "auto",
                              }}
                            />
                          ) : (
                            initiative.icon
                          ))}
                        <div className="card-body p-1 d-flex flex-column justify-content-center">
                          {initiative.title && (
                            <h4
                              className={`${initiativeSectionConfigData.titleVariant} ${initiativeSectionConfigData.titleColor}`}
                            >
                              {initiative.title}
                            </h4>
                          )}
                          {initiative.description && (
                            <p
                              className={`pt-1 ${initiativeSectionConfigData.descriptionVariant}`}
                            >
                              {initiative.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            )}
        </div>
      </div>
    </Section>
  );
}
