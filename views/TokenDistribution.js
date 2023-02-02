import React from "react";
import Section from "../components/Section";

export default function TokenDistribution({ tokenDistributionData }) {
  // console.log(tokenDistributionData);
  return (
    <Section
      title={tokenDistributionData.title}
      subTitle={tokenDistributionData.description}
    >
      <div
        className="pb-2 mb-4"
        style={{
          width: "100%",
          overflow: "auto",
        }}
      >
        <img
          src={tokenDistributionData.chart}
          alt={tokenDistributionData.chartName}
        />
      </div>
      <div
        className={`bg-${tokenDistributionData.paperVariant} row align-items-center p-3 my-5 text-white rounded-4`}
      >
        {/* <Grid container spacing={3} sx={{ alignItems: "center", p: 3 }}> */}
        <div className="col-12 col-sm-6 col-md-3 p-3">
          <div className="d-flex flex-row gap-2 align-items-center">
            <h3
              className={`${tokenDistributionData.numberVariant} ${tokenDistributionData.numberColor}`}
            >
              {tokenDistributionData.overview.genesis.number}
            </h3>
            <p
              className={`${tokenDistributionData.titleVariant}`}
              style={{ lineHeight: "100%" }}
            >
              {tokenDistributionData.overview.genesis.title}
            </p>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-3 p-3">
          <div className="d-flex flex-row gap-2 align-items-center">
            <h3
              className={`${tokenDistributionData.numberVariant} ${tokenDistributionData.numberColor}`}
            >
              {tokenDistributionData.overview.circular.number}
            </h3>
            <p
              className={`${tokenDistributionData.titleVariant}`}
              style={{ lineHeight: "100%" }}
            >
              {tokenDistributionData.overview.circular.title}
            </p>
          </div>
        </div>
        <div className="col-12 col-sm-5 p-3">
          <p className="body2 text-center text-md-start">
            {tokenDistributionData.overview.description}
          </p>
        </div>
        {/* </Grid> */}
      </div>
      <div className="my-5" style={{ width: "100%" }}>
        <div className="row">
          {tokenDistributionData.pies &&
            Array.isArray(tokenDistributionData.pies) &&
            tokenDistributionData.pies.length > 0 &&
            React.Children.toArray(
              tokenDistributionData.pies.map((pie) => (
                <div className="col-12 col-md-6 p-0 p-sm-3">
                  <img
                    src={pie.chart}
                    alt={pie.name}
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              ))
            )}
        </div>
      </div>
    </Section>
  );
}
