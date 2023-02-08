import Link from "next/link";
import { React, useState } from "react";
import Section from "../components/Section";

export default function CollabsSection({ stakingEcosystemsConfigData }) {
  const [activeFilters, setActiveFilters] = useState([]);
  const [projects, setProjects] = useState("All Projects");
  const [searchData, setSearchData] = useState("");
  const getSortedArray = () => {
    if (searchData.length) {
      sortedData = stakingEcosystemsConfigData.list.filter((element) => {
        return (
          element.name.toLowerCase().includes(searchData.toLowerCase()) ||
          element.description.toLowerCase().includes(searchData.toLowerCase())
        );
      });
      return sortedData;
    }

    const compareArray =
      projects == "All Projects" ? activeFilters : [...activeFilters, projects];
    const sortedData = stakingEcosystemsConfigData.list.filter((element) =>
      compareArray.every(
        (compareArrayItem) => element.filters.indexOf(compareArrayItem) != -1
      )
    );
    return sortedData;
  };

  let sortedArray = getSortedArray();

  return (
    <>
      <Section
        title={
          stakingEcosystemsConfigData.title && stakingEcosystemsConfigData.title
        }
        subTitle={
          stakingEcosystemsConfigData.description &&
          stakingEcosystemsConfigData.description
        }
      >
        {/* Textbox and Number of Search results text */}
        <div className="d-flex flex-column gap-5">
          {/* Ecosystems */}
          <div className="row flex-wrap">
            {sortedArray.map((ele, index) => {
              return (
                <div
                  className="col-12 col-md-4 d-flex justify-content-center p-2"
                  key={index}
                >
                  <div
                    className={`card text-white bg-${stakingEcosystemsConfigData.cardVariant} d-flex flex-column rounded-4 p-3`}
                    style={{
                      maxWidth: "400px",
                      height: "100%",
                      flexGrow: 1,
                    }}
                  >
                    <div className="card-body">
                      {"heading" in ele ? (
                        "icon" in ele ? (
                          <div className="d-flex flex-row">
                            <div
                              className="mb-2"
                              style={{
                                width: "100%",
                                height: "30px",
                              }}
                            >
                              <img
                                src={ele.icon}
                                alt={ele.icon}
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "contain",
                                  objectPosition: "left",
                                }}
                              />
                            </div>
                            <h4 className="h4">{ele.heading}</h4>
                          </div>
                        ) : (
                          <h4 className="h4">{ele.heading}</h4>
                        )
                      ) : (
                        <div
                          className="mb-2"
                          style={{
                            width: "100%",
                            height: "30px",
                          }}
                        >
                          <img
                            src={ele.icon}
                            alt={ele.icon}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "contain",
                              objectPosition: "left",
                            }}
                          />
                        </div>
                      )}

                      <h4
                        className={`${stakingEcosystemsConfigData.nameVariant} mt-4`}
                      >
                        {ele.name}
                      </h4>
                      <p
                        className={`${stakingEcosystemsConfigData.descriptionVariant} mt-2`}
                      >
                        {ele.description}
                      </p>
                      {ele.stakeNowButton ? (
                        <div className="d-flex justify-content-end gap-2 mt-4">
                          <Link href="/chainReport/abc">
                            <a
                              className={`btn d-flex align-items-center gap-2 py-2 button-secondary bg-t`}
                            >
                              Learn More
                              <i className={`bi bi-arrow-up-right`}></i>
                            </a>
                          </Link>
                          <a
                            className={`btn d-flex align-items-center gap-2 py-2 button-primary`}
                            href={ele.stakeNowButton}
                            target="_blank"
                          >
                            Stake Now
                            <i className={`bi bi-arrow-up-right`}></i>
                          </a>
                        </div>
                      ) : (
                        <div className="d-flex justify-content-end gap-2 mt-4">
                          <a
                            className={`btn d-flex align-items-center gap-2 py-2 button-primary disabled`}
                            href={ele.stakeNowButton}
                            target="_blank"
                          >
                            Coming Soon
                            <i className={`bi bi-arrow-up-right`}></i>
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>
    </>
  );
}
