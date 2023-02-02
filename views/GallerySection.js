import React from "react";
import Section from "../components/Section";

export default function GallerySection({ gallerySectionConfigData }) {
  return (
    <Section
      title={gallerySectionConfigData.title && gallerySectionConfigData.title}
      subTitle={
        gallerySectionConfigData.description &&
        gallerySectionConfigData.description
      }
    >
      {Array.isArray(gallerySectionConfigData.galleries) &&
        gallerySectionConfigData.galleries &&
        gallerySectionConfigData.galleries.length > 0 && (
          <div className="row flex-wrap">
            {gallerySectionConfigData.galleries.map((Gallery, index) => (
              <div className="col-12 col-sm-6 col-md-3 py-2" key={index}>
                <div
                  className={`card rounded-4 bg-${gallerySectionConfigData.paperVariant} text-center mx-auto`}
                  style={gallerySectionConfigData.optionStyles}
                >
                  {Gallery.image && (
                    <img
                      alt={Gallery.title}
                      src={Gallery.image}
                      style={{
                        border: "none",
                        width: "100%",
                        aspectRatio: "1/1",
                      }}
                    />
                  )}
                  {(Gallery.title || Gallery.description) && (
                    <div className="card-body p-2 text-center">
                      {Gallery.title && (
                        <h3
                          className={`${gallerySectionConfigData.titleVariant} ${gallerySectionConfigData.titleColor} pb-2`}
                        >
                          {Gallery.title}
                        </h3>
                      )}
                      {Gallery.description && (
                        <p
                          className={`${gallerySectionConfigData.descriptionVariant} ${gallerySectionConfigData.descriptionColor}`}
                        >
                          {Gallery.description}
                        </p>
                      )}
                    </div>
                  )}
                  {Gallery.buttons.length !== 0 && (
                    <div className="d-flex align-items-center p-2 justify-self-start justify-content-center justify-content-md-start">
                      {Gallery.buttons.map((button, i) => (
                        <a
                          key={`ff${i}`}
                          href={button.url && button.url}
                          style={{
                            px: 0,
                          }}
                          aria-label={`${button.text} about ${Gallery.title}`}
                          // size="small"
                        >
                          {button.text && (
                            <>
                              {button.text}{" "}
                              <i
                                className={`bi ${gallerySectionConfigData.endIcon}`}
                              ></i>
                            </>
                          )}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
    </Section>
  );
}
