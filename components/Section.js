import React from "react";
import TitleAndSubtitle from "./TitleAndSubtitle";

const Section = (props) => {
  const {
    title = null,
    subTitle = null,
    subtitleWidth,
    background = "none",
    backgroundColor = "transparent",
    children,
    containerClass = "",
  } = props;

  return (
    <section
      className={`my-16 py-4 text-sm-center text-md-start ${containerClass}`}
      style={{
        backgroundColor,
      }}
    >
      <div
        className="container-lg"
        style={{
          background,
        }}
      >
        {title || subTitle ? (
          <div className="d-flex flex-column align-items-center gap-8">
            <TitleAndSubtitle
              title={title}
              subTitle={subTitle}
              subtitleWidth={subtitleWidth}
            />
            {children}
          </div>
        ) : (
          children
        )}
      </div>
    </section>
  );
};

export default Section;
