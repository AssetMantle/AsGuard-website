import Link from "next/link";
import React, { useState } from "react";
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
        containerClass={`eco-bg`}
        subtitleWidth={630}
      >
        <div
          className="d-flex flex-wrap align-items-center gap-3 mx-auto my-5"
          style={{ maxWidth: "800px" }}
        >
          {React.Children.toArray(
            sortedArray.map((ele) => (
              <div
                className={`card text-white bg-${stakingEcosystemsConfigData.cardVariant} d-flex flex-column rounded-4 p-3`}
                style={{
                  width: "min(350px,100%)",
                  height: "100%",
                  flexGrow: 1,
                }}
              >
                <div className="card-body">
                  {"heading" in ele ? (
                    "icon" in ele ? (
                      <div className="d-flex flex-row">
                        <div className="mb-2" style={ele.dimensions}>
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
                    <div className="mb-2" style={ele.dimensions}>
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
                    {ele.description} 0.00%
                  </p>
                  {ele.stakeNowButton ? (
                    <div className="d-flex justify-content-end gap-2 mt-4">
                      <Link href={ele.learnMoreButton}>
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
            ))
          )}
        </div>
      </Section>
    </>
  );
}
