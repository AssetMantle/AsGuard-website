import React from "react";
import Section from "../components/Section";

export default function TokenUtility({ tokenUtilityData }) {
  return (
    <Section
      title={tokenUtilityData.title}
      subTitle={tokenUtilityData.description}
    >
      <div className="row" spacing={{ xs: 1, md: 3 }}>
        {tokenUtilityData.options &&
          Array.isArray(tokenUtilityData.options) &&
          tokenUtilityData.options.length > 0 &&
          React.Children.toArray(
            tokenUtilityData.options.map((option) => (
              <div className={`col-12 col-md-6 p-2`}>
                <div
                  className={`bg-${tokenUtilityData.paperVariant} card text-center rounded-4 text-white`}
                  style={{ height: "100%" }}
                >
                  <img
                    alt={option.title}
                    src={option.icon && option.icon}
                    style={{
                      margin: "40px auto 10px",
                      border: "none",
                      width: "80px",
                      height: "auto",
                      objectPosition: "center",
                    }}
                  />
                  <div className="card-body">
                    <h3
                      className={`${tokenUtilityData.optionsTitleVariant} ${tokenUtilityData.optionsColor}`}
                    >
                      {option.title}
                    </h3>
                    <p
                      className={`${tokenUtilityData.optionsDescriptionVariant} pt-4`}
                    >
                      {option.description}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
      </div>
    </Section>
  );
}
