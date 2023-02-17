import React from "react";
import NextLink from "./NextLink";

const TitleAndSubtitle = (props) => {
  const {
    title = null,
    subTitle = null,
    textAlign = "center",
    isContent = false,
    subtitleWidth = 836,
  } = props;

  const SectionConfigData = {
    title,
    titleVariant: isContent ? "h2" : "h1",
    titleColor: "text-white",
    subTitle,
    subTitleVariant: "subtitle2",
    subTitleColor: "text-white",
    // subTitleStyle: { maxWidth: "min(836px, 100%)" }, // object of styles or false
  };

  return (
    <div
      className={`d-flex flex-column align-items-center ${
        textAlign &&
        textAlign !== "center" &&
        textAlign !== "left" &&
        textAlign !== "right" &&
        textAlign !== "start" &&
        textAlign !== "justify"
          ? textAlign
          : ""
      }`}
      style={{
        textAlign:
          textAlign &&
          (textAlign === "center" ||
            textAlign === "left" ||
            textAlign === "right" ||
            textAlign === "start" ||
            textAlign === "justify")
            ? textAlign
            : "left",
      }}
      id={
        title &&
        title
          .toLowerCase()
          .replaceAll(" ", "-")
          .replace(/[^a-z-]/g, "")
      }
    >
      {SectionConfigData.title && (
        <h1
          className="h1 mb-0"
          style={{ color: SectionConfigData.titleColor || "inherit" }}
        >
          <NextLink
            color="inherit"
            underline="none"
            href={`#${
              SectionConfigData.title &&
              SectionConfigData.title
                .toLowerCase()
                .replaceAll(" ", "-")
                .replace(/[^a-z-]/g, "")
            }`}
          >
            {SectionConfigData.title}
          </NextLink>
        </h1>
      )}

      {SectionConfigData.subTitle && (
        <p
          className="subtitle1 mb-5"
          style={{
            color: SectionConfigData.titleColor || "inherit",
            width: `min(${subtitleWidth}px, 100%)`,
            ...SectionConfigData.subTitleStyle,
          }}
        >
          {SectionConfigData.subTitle}
        </p>
      )}
    </div>
  );
};

export default TitleAndSubtitle;
