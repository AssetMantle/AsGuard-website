import React from "react";
import Section from "../components/Section";

export default function UniverseSection({ configData }) {
  return (
    <Section
      title={configData.sectionTitle}
      subTitle={configData.sectionSubTitle}
    >
      <a
        className={`btn ${configData.buttonVariant} h2 my-5`}
        href="/ecosystems"
      >
        Learn More <i className="bi bi-chevron-right"></i>
      </a>
      <div style={{ width: "100%" }}>
        <div className="row">
          {React.Children.toArray(
            configData.subSections.map((data) => (
              <div
                className="col-12 col-md-6  d-flex flex-column gap-3 px-2"
                style={{ boxSizing: "border-box" }}
              >
                <div
                  className="d-flex justify-content-center align-items-center bg-translucent rounded-4"
                  style={{ ...configData.headerLogoStyles }}
                >
                  <img
                    src={data.logo}
                    alt={data.alt}
                    style={{
                      width: "auto",
                      height: "auto",
                      ...data.styles,
                    }}
                  />
                </div>
                <div
                  className={`bg-${configData.paperVariant} rounded-4 justify-content-around align-items-start pb-2 mb-3`}
                  style={{ flex: "1", width: "100%", boxSizing: "border-box" }}
                >
                  <div className="row m-0" style={{ width: "100%" }}>
                    {data.items.map((element, index) => {
                      return (
                        <div
                          key={index}
                          className="col-12 col-sm-6 p-2"
                          style={{ boxSizing: "border-box" }}
                        >
                          <div
                            className="d-flex flex-column align-items-center mx-auto"
                            style={{ maxWidth: "173px" }}
                          >
                            <div className="d-flex justify-content-center">
                              <img
                                width="98px"
                                src={element.image}
                                alt={element.title}
                              ></img>
                            </div>
                            <h4
                              className={`${configData.titleVariant} ${configData.titleColor} text-center mb-3 mx-auto`}
                            >
                              {element.title}
                            </h4>
                            <div className="d-flex flex-column gap-3 text-center justify-content-center">
                              {element.subData.map((listItem, idx) => (
                                <p
                                  key={idx}
                                  className={`${configData.listVariant} m-0`}
                                >
                                  {listItem}
                                </p>
                              ))}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </Section>
  );
}
