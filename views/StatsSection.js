import React from "react";
import Section from "../components/Section";
import SocialIcons from "../components/SocialIcons";

export default function StatsSection({ statsSectionConfigData }) {
  return (
    <Section containerClass={`pt-2 mt-0 stats-bg`}>
      <div className="d-flex flex-column align-items-center">
        <p
          className="text-capitalize text-white text-center m-0 mx-auto"
          style={statsSectionConfigData.descriptionStyle}
        >
          {statsSectionConfigData.description}
        </p>
        <div style={statsSectionConfigData.seperatorLineStyles}></div>
        <div
          className="w-auto bg-translucent rounded-5 px-5 py-1 mb-5 mt-4"
          style={statsSectionConfigData.socialLinkPillStyles}
        >
          <SocialIcons
            additionalClass="justify-content-center justify-content-md-start body1"
            spacing={4}
            size="small"
          />
        </div>
        {Array.isArray(statsSectionConfigData.stats) &&
          statsSectionConfigData.stats &&
          statsSectionConfigData.stats.length > 0 && (
            <div className="d-flex flex-wrap align-items-center justify-content-center gap-4 w-100">
              {React.Children.toArray(
                statsSectionConfigData.stats.map((stats) => (
                  <div
                    className={`d-flex flex-column align-items-center bg-t h-100 p-2 rounded-4 mx-auto`}
                    style={statsSectionConfigData.stateCardStyles}
                  >
                    {stats.title && (
                      <h1
                        className="d-flex text-uppercase text-white text-start"
                        style={statsSectionConfigData.statsTitleStyles}
                      >
                        {stats.title}
                        <div>
                          <img
                            src={statsSectionConfigData.plusImage}
                            style={statsSectionConfigData.plusImageStyles}
                          />
                        </div>
                      </h1>
                    )}
                    {stats.description1 && (
                      <p
                        className="text-primary text-uppercase text-left small m-0 ms-auto ms-sm-0 me-auto"
                        style={statsSectionConfigData.statsSubTitleStyles}
                      >
                        {stats.description1}
                      </p>
                    )}
                    {stats.description2 && (
                      <p
                        className="text-primary text-uppercase text-left small m-0 ms-auto ms-sm-0 me-auto"
                        style={statsSectionConfigData.statsSubTitleStyles}
                      >
                        {stats.description2}
                      </p>
                    )}
                  </div>
                ))
              )}
            </div>
          )}
      </div>
    </Section>
  );
}
