import React from "react";
import TitleAndSubtitle from "../components/TitleAndSubtitle";

export default function CollabsHeroSection({ configData }) {
  return (
    <section className="container-lg text-center my-4 py-2 bg-t">
      <div className="d-flex flex-column gap-4">
        <TitleAndSubtitle
          title={configData.title}
          subTitle={configData.subTitle}
        />
        <div className="d-flex">
          <img src={configData.image} alt="image" width="100%" />
        </div>
      </div>
    </section>
  );
}
