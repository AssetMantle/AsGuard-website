import React from "react";
import Section from "../components/Section";

export default function ExplanationSection({ explanationSectionData }) {
  return (
    <>
      <Section>
        <div className="row">
          <div className="col-12 col-lg-5 d-flex flex-column justify-content-center text-center text-md-start">
            <div className="d-flex flex-column gap-3 text-white">
              <h1 className={`${explanationSectionData.questionVariant}`}>
                {explanationSectionData.question}
              </h1>
              <p className={`${explanationSectionData.answerVariant}`}>
                {explanationSectionData.answer}
              </p>
            </div>
          </div>
          <div
            className="col-12 col-lg-7 d-flex justify-content-center"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/vvKVCbxWl1g"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </Section>
    </>
  );
}
