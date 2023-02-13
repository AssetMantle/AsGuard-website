import React from "react";
import Section from "../components/Section";
import SocialIcons from "../components/SocialIcons";

export default function StatsSection({ statsSectionConfigData }) {
  return (
    <Section containerClass={`pt-2 mt-0 stats-bg`}>
      <div className="d-flex flex-column align-items-center">
        <p
          className="text-capitalize text-white"
          style={statsSectionConfigData.descriptionStyle}
        >
          {statsSectionConfigData.description}
        </p>
        <div style={statsSectionConfigData.seperatorLineStyles}></div>

        <div style={statsSectionConfigData.socialLinkPillStyles}>
          <SocialIcons
            additionalClass="justify-content-center justify-content-md-start body1"
            spacing={4}
            size="small"
          />
        </div>
        {Array.isArray(statsSectionConfigData.stats) &&
          statsSectionConfigData.stats &&
          statsSectionConfigData.stats.length > 0 && (
            <div className="row flex-wrap">
              {statsSectionConfigData.stats.map((stats, index) => (
                <div className="col-12 col-sm-6 col-md-3 py-2" key={index}>
                  <div
                    className={`card rounded-4 mx-auto`}
                    style={statsSectionConfigData.stateCardStyles}
                  >
                    {stats.title && (
                      <h1 style={statsSectionConfigData.statsTitleStyles}>
                        {stats.title}
                        <img
                          src={statsSectionConfigData.plusImage}
                          style={statsSectionConfigData.plusImageStyles}
                        />
                      </h1>
                    )}
                    {stats.description1 && (
                      <p style={statsSectionConfigData.statsSubTitleStyles}>
                        {stats.description1}
                      </p>
                    )}
                    {stats.description2 && (
                      <p style={statsSectionConfigData.statsSubTitleStyles}>
                        {stats.description2}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
      </div>
    </Section>
  );
}
