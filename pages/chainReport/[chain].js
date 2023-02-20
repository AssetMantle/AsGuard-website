import React, { useEffect, useState } from "react";
import Section from "../../components/Section";
import { useRouter } from "next/router";

const chainDetailConfigData = {
  title: "Chain Stake details",
  description: "Find comprehensive details pertaining to",
  seperatorLineStyles: {
    width: "1px",
    height: "100%",
    background: "#F2AF13",
    borderRadius: "2px",
  },
  cardTitleBGStyles: {
    width: "fit-content",
    borderRadius: "16px 16px 0 0",
    marginBottom: "-2px",
  },
};

export default function ChainReport() {
  const [chainInfo, setChainInfo] = useState("");
  const [vulnerabilityMetrics, setVulnerabilityMetrics] = useState("");
  const router = useRouter();
  const { chain } = router.query;

  useEffect(() => {
    const fetchChainInfo = async () => {
      const response = await fetch(
        `https://proxy.atomscan.com/directory/${chain}/chain.json`
      );
      const responseJson = await response.json();
      setChainInfo(responseJson);
    };
    fetchChainInfo();

    const fetchVulnerabilityMetrics = async () => {
      const response = await fetch(
        `https://raw.githubusercontent.com/AsGuardNetwork/chain-reports/gh-pages/reports.json`
      );
      const responseJson = await response.json();
      const singleChainData = responseJson.TableContent.find((obj) => {
        return obj.Chainname === chain;
      });
      setVulnerabilityMetrics(singleChainData);
    };
    fetchVulnerabilityMetrics();
  }, []);

  return (
    <Section
      title={chainDetailConfigData.title && chainDetailConfigData.title}
      subTitle={
        chainDetailConfigData.description && chainDetailConfigData.description
      }
      containerClass={"chain_report-bg"}
    >
      <div className="row flex-wrap mt-1 w-100">
        <div className="col-12 col-lg-6 d-flex justify-content-center px-2 px-sm-3 py-3">
          <div className="d-flex flex-column bg-t w-100">
            <div
              className="bg-translucent p-3 pb-1"
              style={chainDetailConfigData.cardTitleBGStyles}
            >
              <div className="button-primary px-4 py-2">Chain Info</div>
            </div>
            <div
              className={`text-white bg-translucent d-flex flex-row`}
              style={{
                width: "100%",
                height: "100%",
                flexGrow: 1,
                padding: "32px 34px",
                gap: "16px",
                borderRadius: "0 16px 16px 16px",
              }}
            >
              <div>
                <p className="text-uppercase">Chain ID</p>
                <p className="text-uppercase">Chain Version</p>
                <p className="text-uppercase">Chain Name</p>
                <p className="text-uppercase">Chain Status</p>
                <p className="text-uppercase">Websites</p>
                <p className="text-uppercase">Explorers</p>
              </div>
              <div style={chainDetailConfigData.seperatorLineStyles}></div>
              <div>
                <p>{chainInfo.chain_id && chainInfo.chain_id}</p>
                <p>
                  {vulnerabilityMetrics.ChainVersion &&
                    vulnerabilityMetrics.ChainVersion}
                </p>
                <p>{chainInfo.chain_name && chainInfo.chain_name}</p>
                <p className="text-capitalize d-flex align-items-center gap-2">
                  {chainInfo.status && chainInfo.status}
                  {chainInfo.status &&
                    (chainInfo.status === "live" ? (
                      <i className={`bi bi-check-circle text-success`}></i>
                    ) : (
                      <i className={`bi bi-x-circle text-danger`}></i>
                    ))}
                </p>
                <p>
                  {chainInfo.website && (
                    <a
                      href={chainInfo.website}
                      target="_blank"
                      style={{ textDecoration: "none", wordBreak: "break-all" }}
                      className="text-primary"
                    >
                      {String(chainInfo.website).indexOf("//") > -1
                        ? String(chainInfo.website).split("/")[2]
                        : String(chainInfo.website).split("/")[0]}
                    </a>
                  )}
                </p>
                {chainInfo.explorers &&
                  Array.isArray(chainInfo.explorers) &&
                  chainInfo.explorers.length > 0 &&
                  React.Children.toArray(
                    chainInfo.explorers.map((explorer) => (
                      <p>
                        <a
                          href={explorer.url}
                          target="_blank"
                          style={{
                            textDecoration: "none",
                            wordBreak: "break-all",
                          }}
                          className="text-primary"
                        >
                          {explorer.url.split("//")[1]}
                        </a>
                      </p>
                    ))
                  )}
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 d-flex justify-content-center px-2 px-sm-3 py-3">
          <div className="d-flex flex-column bg-t w-100">
            <div
              className="bg-translucent p-3 pb-1"
              style={chainDetailConfigData.cardTitleBGStyles}
            >
              <div className="button-primary px-3 py-2">
                Vulnerability Metrics
              </div>
            </div>
            <div
              className={`text-white bg-translucent d-flex flex-row`}
              style={{
                width: "100%",
                height: "100%",
                flexGrow: 1,
                padding: "32px 34px",
                gap: "16px",
                borderRadius: "0 16px 16px 16px",
              }}
            >
              <div>
                <p className="text-uppercase">Vulnerability</p>
                <p className="text-uppercase" style={{ color: "#E44651" }}>
                  Critical
                </p>
                <p className="text-uppercase" style={{ color: "#FF9133" }}>
                  High
                </p>
                <p className="text-uppercase" style={{ color: "#6FB4B5" }}>
                  Mid
                </p>
                <p className="text-uppercase" style={{ color: "#148919" }}>
                  Low
                </p>
                <p className="text-uppercase">Trivy</p>
                <p className="text-uppercase">Grype</p>
                <p className="text-uppercase">SBOM</p>
                <p className="text-uppercase">Container Image</p>
              </div>
              <div style={chainDetailConfigData.seperatorLineStyles}></div>
              <div>
                <p>&nbsp;</p>
                <p>
                  {vulnerabilityMetrics.SeverityCritical &&
                    vulnerabilityMetrics.SeverityCritical}
                </p>
                <p>
                  {vulnerabilityMetrics.SeverityHigh &&
                    vulnerabilityMetrics.SeverityHigh}
                </p>
                <p>
                  {vulnerabilityMetrics.SeverityMedium &&
                    vulnerabilityMetrics.SeverityMedium}
                </p>
                <p>
                  {vulnerabilityMetrics.SeverityLow &&
                    vulnerabilityMetrics.SeverityLow}
                </p>
                <p>
                  {vulnerabilityMetrics.TrivyVulReportUrl && (
                    <a
                      href={`${vulnerabilityMetrics.TrivyVulReportUrl.replace(
                        ".",
                        "https://asguardnetwork.github.io/chain-reports"
                      )}`}
                      download
                      style={{ textDecoration: "none" }}
                      className="text-primary"
                    >
                      Report
                    </a>
                  )}
                </p>
                <p>
                  {vulnerabilityMetrics.GrypeVulReportUrl && (
                    <a
                      href={`${vulnerabilityMetrics.GrypeVulReportUrl.replace(
                        ".",
                        "https://asguardnetwork.github.io/chain-reports"
                      )}`}
                      download
                      style={{ textDecoration: "none" }}
                      className="text-primary"
                    >
                      Report
                    </a>
                  )}
                </p>
                <p>
                  {vulnerabilityMetrics.TrivySBOMReportUrl && (
                    <a
                      href={`${vulnerabilityMetrics.TrivySBOMReportUrl.replace(
                        ".",
                        "https://asguardnetwork.github.io/chain-reports"
                      )}`}
                      download
                      style={{ textDecoration: "none" }}
                      className="text-primary"
                    >
                      Report
                    </a>
                  )}
                </p>
                {vulnerabilityMetrics.ContainerPull &&
                  Array.isArray(vulnerabilityMetrics.ContainerPull) &&
                  vulnerabilityMetrics.ContainerPull.length > 0 &&
                  React.Children.toArray(
                    vulnerabilityMetrics.ContainerPull.map((container) => (
                      <p>
                        <a
                          href={vulnerabilityMetrics.ContainerRegistryUrl}
                          target="_blank"
                          style={{
                            textDecoration: "none",
                            wordBreak: "break-all",
                          }}
                          className="text-primary"
                        >
                          {container}
                        </a>
                      </p>
                    ))
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
