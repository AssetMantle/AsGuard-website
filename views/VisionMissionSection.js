import React from "react";
import Section from "../components/Section";

export default function VisionMissionSection({ visionMissionSectionData }) {
  return (
    <>
      <Section
        background={visionMissionSectionData.backgroundImage}
        title={visionMissionSectionData.title}
      >
        <div className="row mt-4">
          <div className="col-12 col-lg-4"></div>

          <div className="col-12 col-lg-8">
            <div
              className={`bg-${visionMissionSectionData.paperVariant} px-2 text-white rounded-4`}
            >
              <div className="row">
                {visionMissionSectionData.list.map((ele, index) => (
                  <div key={index} className="col-12 col-md-6 p-4">
                    <div className="d-flex flex-column">
                      <h4
                        className={`${visionMissionSectionData.titleVariant} text-primary`}
                      >
                        {ele.title}
                      </h4>
                      <p
                        className={`${visionMissionSectionData.infoVariant} m-0 mt-2`}
                        style={{ fontWeight: "200" }}
                      >
                        {ele.info}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
