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
      containerClass={`choosing-bg`}
      subtitleWidth={630}
    >
      {Array.isArray(whyChooseUsSectionConfigData.featuresArray) &&
        whyChooseUsSectionConfigData.featuresArray &&
        whyChooseUsSectionConfigData.featuresArray.length > 0 && (
          <div className="row flex-wrap mt-1 py-5 px-1 px-md-5 w-100">
            {React.Children.toArray(
              whyChooseUsSectionConfigData.featuresArray.map((feature) => (
                <div className="col-12 col-lg-6 d-flex justify-content-center p-2">
                  <div
                    className={`text-white bg-translucent d-flex flex-column flex-sm-row rounded-4 h-100 p-4 gap-3`}
                    style={{
                      maxWidth: "600px",
                      flexGrow: 1,
                    }}
                  >
                    {feature.image && typeof feature.image === "string" ? (
                      <div
                        style={{
                          width: "110px",
                          minWidth: "110px",
                          aspectRatio: "1/1",
                          alignSelf: "center",
                        }}
                      >
                        <img
                          style={{ width: "100%", aspectRatio: "1/1" }}
                          src={feature.image}
                          alt={feature.title}
                        />
                      </div>
                    ) : (
                      feature.image
                    )}
                    <div className="purple_line_res"></div>
                    <div>
                      {feature.title && (
                        <h5
                          className={`${feature.titleVariant} ${feature.titleColor} mb-1`}
                        >
                          {feature.title}
                        </h5>
                      )}
                      {feature.description && (
                        <p className={`mb-0 ${feature.descriptionVariant}`}>
                          {feature.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
    </Section>
  );
}
