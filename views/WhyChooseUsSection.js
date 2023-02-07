import React from "react";
import Section from "../components/Section";

export default function WhyChooseUsSection({ whyChooseUsSectionConfigData }) {
  return (
    <Section
      title={
        whyChooseUsSectionConfigData.title && whyChooseUsSectionConfigData.title
      }
      subTitle={
        whyChooseUsSectionConfigData.description &&
        whyChooseUsSectionConfigData.description
      }
    >
      {Array.isArray(whyChooseUsSectionConfigData.featuresArray) &&
        whyChooseUsSectionConfigData.featuresArray &&
        whyChooseUsSectionConfigData.featuresArray.length > 0 && (
          <div className="row flex-wrap mt-1 p-5">
            {whyChooseUsSectionConfigData.featuresArray.map(
              (feature, index) => (
                <div
                  className="col-12 col-md-6 d-flex justify-content-center p-2"
                  key={index}
                >
                  <div
                    className={`card text-white bg-translucent d-flex flex-row rounded-4`}
                    style={{
                      maxWidth: "600px",
                      height: "100%",
                      flexGrow: 1,
                      padding: "32px 34px",
                      gap: "16px",
                    }}
                  >
                    {feature.image && typeof feature.image === "string" ? (
                      <div
                        style={{
                          width: "110px",
                          height: "110px",
                          alignSelf: "center",
                        }}
                      >
                        <img
                          style={{ width: "110px", aspectRatio: "1/1" }}
                          src={feature.image}
                          alt={feature.title}
                        />
                      </div>
                    ) : (
                      feature.image
                    )}
                    <div
                      style={whyChooseUsSectionConfigData.seperatorLineStyles}
                    ></div>
                    <div>
                      {feature.title && (
                        <p
                          className={`${feature.titleVariant} ${feature.titleColor} text-uppercase mb-1`}
                        >
                          {feature.title}
                        </p>
                      )}
                      {feature.description && <p>{feature.description}</p>}
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        )}
    </Section>
  );
}
