import { React, useState } from "react";
import Section from "../components/Section";

export default function CollabsSection({ configData }) {
  const [activeFilters, setActiveFilters] = useState([]);
  const [projects, setProjects] = useState("All Projects");
  const [searchData, setSearchData] = useState("");
  let filters = [];

  const getFilters = (array) => {
    array.map((item) => {
      item.filters.map((element) => {
        if (filters.includes(element)) {
          return;
        }
        filters.push(element);
      });
    });
  };

  const handleDropdownChange = (event) => {
    setActiveFilters([]);
    setProjects(event.target.value);
  };

  const getSortedArray = () => {
    if (searchData.length) {
      sortedData = configData.list.filter((element) => {
        return (
          element.name.toLowerCase().includes(searchData.toLowerCase()) ||
          element.description.toLowerCase().includes(searchData.toLowerCase())
        );
      });
      return sortedData;
    }

    const compareArray =
      projects == "All Projects" ? activeFilters : [...activeFilters, projects];
    const sortedData = configData.list.filter((element) =>
      compareArray.every(
        (compareArrayItem) => element.filters.indexOf(compareArrayItem) != -1
      )
    );
    getFilters(sortedData);
    return sortedData;
  };

  let sortedArray = getSortedArray();

  return (
    <>
      <Section>
        {/* Textbox and Number of Search results text */}
        <div className="d-flex flex-column gap-5">
          <div className="d-flex flex-column flex-sm-row justify-content-between">
            <div className="d-flex flex-row align-items-center pe-2 gap-3 text-white search-input rounded-2">
              <input
                type="text"
                className="form-control bg-t body2 text-white"
                placeholder="Search"
                value={searchData}
                onChange={(e) => {
                  setSearchData(e.target.value);
                }}
              />
              <i
                className="bi bi-x-lg"
                onClick={() => setSearchData("")}
                style={{
                  cursor: "pointer",
                }}
              ></i>
            </div>

            <select
              className="form-select form-select-lg bg-t text-white pe-5"
              aria-label="Default select example"
              style={{
                width: "max-content",
              }}
              onChange={handleDropdownChange}
            >
              {configData.dropdownFilters.map((ele, index) => (
                <option
                  value={ele.text}
                  key={index}
                  className="body1 text-primary bg-gray-800"
                >
                  {ele.text}
                </option>
              ))}
            </select>
          </div>

          {/* Filters  */}
          <div className="d-flex flex-row justify-content-start gap-3 flex-wrap">
            {filters.map(
              (type, index) =>
                type !== "AssetMantle" &&
                type !== "MantleLabs" && (
                  <button
                    key={index}
                    className={`px-3 py-2 ${
                      activeFilters.includes(type)
                        ? "button-primary"
                        : "button-secondary bg-t"
                    }`}
                    onClick={() => {
                      if (activeFilters.includes(type)) {
                        return setActiveFilters(
                          activeFilters.filter((filter) => {
                            return filter !== type;
                          })
                        );
                      }
                      setActiveFilters([...activeFilters, type]);
                    }}
                  >
                    {type}
                  </button>
                )
            )}
          </div>

          {/* Ecosystems */}
          <div className="row flex-wrap">
            {sortedArray.map((ele, index) => {
              return (
                <div
                  className="col-12 col-md-4 d-flex justify-content-center p-2"
                  key={index}
                >
                  <div
                    className={`card text-white bg-${configData.cardVariant} d-flex flex-column rounded-4`}
                    style={{
                      maxWidth: "400px",
                      height: "100%",
                      flexGrow: 1,
                    }}
                  >
                    <div className="d-flex flex-row justify-content-between gap-2 p-3">
                      {ele.filters[ele.filters.length - 1] == "AssetMantle" ? (
                        <img
                          width="32px"
                          height="auto"
                          src={"/CollabsSection/AM_LogoMark.png"}
                          alt="AssetMantle Logo"
                          style={{ width: "32px", height: "auto" }}
                        />
                      ) : (
                        <img
                          width="32px"
                          src={"/CollabsSection/ML_Logo.png"}
                          alt="MakersLab Logo"
                          style={{ width: "32px", height: "auto" }}
                        />
                      )}
                      <button className="px-2 py-1 button-primary caption">
                        {activeFilters.length == 0
                          ? ele.filters[0]
                          : activeFilters[0]}
                      </button>
                    </div>
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

                      <h4 className={`${configData.nameVariant} text-primary`}>
                        {ele.name}
                      </h4>
                      <p className={`${configData.descriptionVariant}`}>
                        {ele.description}
                      </p>
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
