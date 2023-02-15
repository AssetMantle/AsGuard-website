import React from "react";
import Section from "../components/Section";
import { useRouter } from "next/router";

const chainDetailConfigData = {
  title: "Chain STake details",
  description: "Find comprehensive details pertaining to",
  seperatorLineStyles: {
    width: "1px",
    height: "100%",
    background: "#F2AF13",
    borderRadius: "2px",
  },
};

export default function ChainDetail() {
  const router = useRouter();
  const query = router.query;
  const data = JSON.parse(query.detail);
  return (
    <Section
      title={chainDetailConfigData.title && chainDetailConfigData.title}
      subTitle={
        chainDetailConfigData.description && chainDetailConfigData.description
      }
    >
      <div className="row flex-wrap mt-1 w-100">
        <div className="col-12 col-md-6 d-flex justify-content-center p-2">
          <div
            className={`card text-white bg-translucent d-flex flex-row rounded-4`}
            style={{
              width: "100%",
              height: "100%",
              flexGrow: 1,
              padding: "32px 34px",
              gap: "16px",
            }}
          >
            <div
              style={{
                alignSelf: "center",
              }}
            >
              <p>Chain ID</p>
              <p>Chain Version</p>
              <p>Chain Name</p>
              <p>Token</p>
              <p>Chain Status</p>
            </div>
            <div style={chainDetailConfigData.seperatorLineStyles}></div>
            <div>
              <p className={`text-uppercase mb-1`}>{data.chainId}</p>
              <p className={`text-uppercase mb-1`}>{data.chainVersion}</p>
              <p className={`text-uppercase mb-1`}>{data.chainName}</p>
              <p className={`text-uppercase mb-1`}>{data.token}</p>
              <p className={`text-uppercase mb-1`}>{data.chainId}</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center p-2">
          <div
            className={`card text-white bg-translucent d-flex flex-row rounded-4`}
            style={{
              width: "100%",
              height: "100%",
              flexGrow: 1,
              padding: "32px 34px",
              gap: "16px",
            }}
          >
            <div
              style={{
                alignSelf: "center",
              }}
            >
              <p>sfjshfh</p>
            </div>
            <div style={chainDetailConfigData.seperatorLineStyles}></div>
            <div>
              <p className={`text-uppercase mb-1`}>sjkfjshfdds</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
