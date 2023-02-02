import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { FiLinkedin, FiGithub, FiTwitter, FiGlobe } from "react-icons/fi";
import { FaBehance } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import Section from "../components/Section";

export default function TeamSection({ teamsConfigData }) {
  return (
    <Section
      title={teamsConfigData.title}
      subTitle={teamsConfigData.description}
    >
      {Array.isArray(teamsConfigData.members) &&
        teamsConfigData.members &&
        teamsConfigData.members.length > 0 && (
          <div
            className="pt-5 mt-3 d-flex justify-content-center am-splide-container"
            style={{ width: "100%", position: "relative" }}
          >
            <Splide
              hasTrack={false}
              options={{
                type: "loop",
                rewind: true,
                width: "90%",
                gap: "32px",
                perPage: 4,
                breakpoints: {
                  900: {
                    perPage: 2,
                  },
                  600: {
                    perPage: 1,
                  },
                },
              }}
            >
              <SplideTrack>
                {Array.isArray(teamsConfigData.members) &&
                  teamsConfigData.members &&
                  teamsConfigData.members.length > 0 &&
                  teamsConfigData.members.map((member, index) => (
                    <SplideSlide key={index}>
                      <div
                        className="card rounded-2 p-0 text-center text-md-start d-flex flex-column m-auto m-md-0"
                        style={teamsConfigData.optionStyles}
                      >
                        {member.image && (
                          <img
                            className="card-img-top"
                            // height={member.height ? member.height : 420}
                            src={member.image}
                            alt={member.title}
                            style={{
                              border: "none",
                              width: "100%",
                              aspectRatio: "1/1",
                              borderRadius: "50%",
                              objectPosition: "top",
                            }}
                          />
                        )}
                        {(member.name || member.designation) && (
                          <div className="card-body p-0 pt-5 pb-2">
                            {member.name && (
                              <h4
                                className={`${teamsConfigData.nameVariant} ${teamsConfigData.nameColor}`}
                                color={teamsConfigData.nameColor}
                              >
                                {member.name}
                              </h4>
                            )}
                            {member.designation && (
                              <p
                                className={`${teamsConfigData.designationVariant} ${teamsConfigData.designationColor} pt-1`}
                              >
                                {member.designation}
                              </p>
                            )}
                          </div>
                        )}
                        {member.social &&
                          Array.isArray(member.social) &&
                          member.social.length > 0 && (
                            <div
                              className="mt-auto pb-5 mb-3 pt-2 d-flex border-color-light_gray text-white gap-3 justify-content-center justify-content-md-start"
                              style={{
                                borderTop: "0.5px solid",
                              }}
                            >
                              {member.social.map((button, index) => (
                                <div key={`sefs${index}`}>
                                  <a
                                    className="text-primary text-hover-main body2"
                                    style={{ ...teamsConfigData.linkStyles }}
                                    href={button.href && button.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    {button.icon === "LinkedIn" && (
                                      <FiLinkedin />
                                    )}
                                    {button.icon === "GitHub" && <FiGithub />}
                                    {button.icon === "Twitter" && <FiTwitter />}
                                    {button.icon === "Behance" && <FaBehance />}
                                    {button.icon === "Website" && <FiGlobe />}
                                    {button.icon === "Instagram" && (
                                      <BsInstagram />
                                    )}
                                  </a>
                                </div>
                              ))}
                            </div>
                          )}
                      </div>
                    </SplideSlide>
                  ))}
              </SplideTrack>
              <div className="splide__arrows">
                <button
                  className="splide__arrow splide__arrow--prev bg-t"
                  style={{
                    outline: "none !important",
                    position: "absolute",
                  }}
                >
                  <i className="bi bi-arrow-left"></i>
                </button>
                <button
                  className="splide__arrow splide__arrow--next bg-t"
                  style={{
                    outline: "none !important",
                    position: "absolute",
                  }}
                >
                  <i className="bi bi-arrow-right"></i>
                </button>
              </div>
            </Splide>
          </div>
        )}
    </Section>
  );
}
