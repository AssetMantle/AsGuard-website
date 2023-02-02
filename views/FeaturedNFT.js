import React from "react";
import Section from "../components/Section";

export default function FeaturedNFT({ featuredNFTConfig }) {
  return (
    <Section
      title={featuredNFTConfig.title && featuredNFTConfig.title}
      subTitle={featuredNFTConfig.description && featuredNFTConfig.description}
    >
      <div
        className="mt-5 featuredNFT-grid"
        style={{ gap: `${featuredNFTConfig.gap}px` }}
      >
        {featuredNFTConfig.imageData &&
          Array.isArray(featuredNFTConfig.imageData) &&
          featuredNFTConfig.imageData.length > 0 &&
          React.Children.toArray(
            featuredNFTConfig.imageData.map((image) => (
              <div
                className="rounded-4 p-0 container-lg featuredNFT-grid-card"
                style={{
                  height: `${
                    featuredNFTConfig.imageHeight *
                      (image.rows ? image.rows : 1) +
                    featuredNFTConfig.gap * ((image.rows ? image.rows : 1) - 1)
                  }px`,
                  gridRowEnd: `span ${image.rows ? image.rows : 1}`,
                  gridColumnEnd: "span 1",
                }}
              >
                <img
                  src={image.img && image.img}
                  alt={image.title}
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                  }}
                />
                <div className="featuredNFT-grid-card-details d-flex flex-column align-items-start justify-content-end p-2 ps-3">
                  <a
                    href={image.href && image.href}
                    target="_blank"
                    className="am-link no-underline"
                  >
                    {image.author && image.author}{" "}
                    <i className="bi bi-patch-check"></i>
                  </a>
                  <p className="caption mb-1">{image.name && image.name}</p>
                </div>
              </div>
            ))
          )}
      </div>
    </Section>
  );
}
