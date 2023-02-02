import React, { useEffect, useState } from "react";
import Section from "../components/Section";

export default function TokenInfo({ tokenInfoData }) {
  const [usdValue, setUSDValue] = useState("");
  const [tickersValue, setTickersValue] = useState([]);

  useEffect(() => {
    const fetchUSDValue = async () => {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/assetmantle?localization=false&tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=false"
      );
      const responseJson = await response.json();
      setUSDValue(responseJson.market_data.current_price.usd);
      setTickersValue(
        responseJson.tickers.map((item) => {
          return {
            name: item.market.name,
            usd_value:
              item.converted_last.usd || item.market_data.current_price.usd,
            coin_id: item.coin_id,
            target_coin_id: item.target_coin_id,
          };
        })
      );
    };
    fetchUSDValue();
  }, []);

  return (
    <Section title={tokenInfoData.title} subTitle={tokenInfoData.description}>
      <div className="container-lg">
        <div className="row">
          <div className="col-12 col-md-5 d-flex justify-content-center justify-content-md-start text-center text-sm-start">
            <div className="d-flex flex-column flex-sm-row gap-4 align-items-center justify-content-center justify-content-sm-start my-auto">
              <div
                style={{
                  width: "min(204px, 100%)",
                }}
              >
                <img
                  src={tokenInfoData.left.mntlCoinImage}
                  alt="MNTL token illustration"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectPosition: "center",
                  }}
                />
              </div>
              <div className="d-flex flex-column gap-4">
                <h2
                  className={`${tokenInfoData.left.titleVariant} ${tokenInfoData.left.titleColor}`}
                >
                  {tokenInfoData.left.title && tokenInfoData.left.title}
                </h2>
                <div className="d-flex flex-column">
                  {tokenInfoData.left.data &&
                    Array.isArray(tokenInfoData.left.data) &&
                    tokenInfoData.left.data.length > 0 &&
                    React.Children.toArray(
                      tokenInfoData.left.data.map((ele) => (
                        <h4
                          className={`d-inline ${ele.variant} ${ele.textColor}`}
                          style={{ fontWeight: "400" }}
                        >
                          {ele.title}
                          {"value" in ele ? (
                            <span
                              className={`d-inline ${ele.variant} ${ele.valueColor}`}
                              style={{ fontWeight: "400" }}
                            >
                              {ele.value}
                            </span>
                          ) : (
                            <span
                              className={`d-inline ${ele.variant} ${ele.valueColor}`}
                              style={{ fontWeight: "400" }}
                            >
                              {usdValue}
                            </span>
                          )}
                        </h4>
                      ))
                    )}
                </div>
                <div className="d-flex flex-row gap-3 justify-content-center justify-content-sm-start">
                  {tokenInfoData.left.ctas &&
                    Array.isArray(tokenInfoData.left.ctas) &&
                    tokenInfoData.left.ctas.length > 0 &&
                    React.Children.toArray(
                      tokenInfoData.left.ctas.map((cta) => (
                        <a
                          className={`btn ${
                            cta.variant ? cta.variant : "button-primary"
                          } body2`}
                          href={cta.url && cta.url}
                          target={cta.target && cta.target}
                          style={{}}
                        >
                          <span
                            className="body2 d-flex align-items-center gap-2"
                            style={{ color: "inherit", fontWeight: "800" }}
                          >
                            {cta.title}
                            <i className={`bi ${cta.endIcon}`}></i>
                          </span>
                        </a>
                      ))
                    )}
                </div>
                <div className="d-flex flex-row" spacing={2.5}>
                  {tokenInfoData.left.references &&
                    Array.isArray(tokenInfoData.left.references) &&
                    tokenInfoData.left.references.length > 0 &&
                    React.Children.toArray(
                      tokenInfoData.left.references.map((reference) => (
                        <a
                          href={reference.url && reference.url}
                          target={reference.target && reference.target}
                          style={{ width: "45px" }}
                        >
                          <img
                            src={reference.logo && reference.logo}
                            alt={reference.name}
                            style={{
                              width: "100%",
                              height: "auto",
                              objectPosition: "center",
                            }}
                          />
                        </a>
                      ))
                    )}
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-7 ps-5">
            <div
              className="p-3 rounded-4 overflow-auto bg-translucent"
              style={{
                height: "350px",
              }}
            >
              <table className="table body2">
                <thead>
                  <tr>
                    {tokenInfoData.right.tableHeaders &&
                      Array.isArray(tokenInfoData.right.tableHeaders) &&
                      tokenInfoData.right.tableHeaders.length > 0 &&
                      React.Children.toArray(
                        tokenInfoData.right.tableHeaders.map((header) => (
                          <th>{header}</th>
                        ))
                      )}
                  </tr>
                </thead>
                <tbody>
                  {tokenInfoData.right.tokenFrom2 &&
                    Array.isArray(tokenInfoData.right.tokenFrom2) &&
                    tokenInfoData.right.tokenFrom2.length > 0 &&
                    React.Children.toArray(
                      tokenInfoData.right.tokenFrom2.map((token, index) => (
                        <tr key={index}>
                          <th>
                            <p className="caption my-1">
                              <a
                                className={`btn ${tokenInfoData.right.buttonVariant}`}
                                href={token.url}
                              >
                                {token.title}
                              </a>
                            </p>
                          </th>
                          <th component="th" scope="row">
                            <p className="caption my-2 py-1">{token.name}</p>
                          </th>
                          <th scope="row">
                            <p className="caption my-2 py-1">{token.pair}</p>
                          </th>
                          <th component="th" scope="row">
                            {tickersValue &&
                              Array.isArray(tickersValue) &&
                              tickersValue.length > 0 &&
                              React.Children.toArray(
                                tickersValue.map((ele) => {
                                  return token.name === "Osmosis"
                                    ? ele.target_coin_id === "osmosis" && (
                                        <p className="caption my-2 py-1">
                                          {ele.usd_value}
                                        </p>
                                      )
                                    : ele.name.includes(token.name) && (
                                        <p className="caption my-2 py-1">
                                          {ele.usd_value}
                                        </p>
                                      );
                                })
                              )}
                          </th>
                        </tr>
                      ))
                    )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
