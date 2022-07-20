import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Link, Typography } from "@mui/material";
// import Image from "next/image";

const HeroLayoutRoot = styled("section")(({ theme }) => ({
  color: theme.palette.themeWhite,
  maxWidth: "1440px",
  margin: "0 auto",
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  flexDirection: "row",
  padding: "calc(100px + 12vmin) calc(20px + 2vmin) calc(34px + 11vmin)",
  backgroundImage: "url('/static/images/wave-bg-from-right.svg')",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "bottom",
  backgroundSize: "100%",
  [theme.breakpoints.down("md")]: {
    gap: 50,
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

const ThemeButton = styled(Link)`
  padding: 8px 20px;
  width: min(216px, 100%);
  background: radial-gradient(50% 50% at 50% 50%, #ffc640 47.4%, #f2af13 100%);
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2),
    inset -4px -4px 8px rgba(0, 0, 0, 0.2), inset 4px 4px 8px #ffd365;
  border-radius: 8px;
  font-family: "Lato";
  font-weight: 600;
  font-size: 16px;
  line-height: 120%;
  font-feature-settings: "liga" off;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  color: ${({ theme }) => ({ color: theme.palette.dark3 })};

  &:hover,
  &:focus {
    box-shadow: 0px 0px 5px 3px rgba(255, 201, 66, 0.4);
  }

  &:disabled {
    ${({ theme }) => ({
      background: theme.palette.yellowDisabled,
    })}
    border: 2px solid;
    ${({ theme }) => ({ borderColor: theme.palette.yellowDisabled })}
    box-shadow: none;
    cursor: not-allowed;
    &:hover,
    &:focus {
      box-shadow: none;
    }
  }

  ${({ theme }) => ({
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  })}
`;

const HeroLeft = styled(Box)(({ theme }) => ({
  width: "min(100%, 518px)",
  aspectRatio: "1/1",
  position: "relative",
  [theme.breakpoints.down("md")]: {
    width: "50%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const HeroRight = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "min(100%, 600px)",
  gap: "48px",
  [theme.breakpoints.down("md")]: {
    width: "50%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    textAlign: "center",
  },
}));

export default function Hero() {
  return (
    <HeroLayoutRoot>
      <HeroLeft>
        <img
          style={{
            width: "100%",
            height: "auto",
            margin: "auto",
          }}
          src="/static/images/Asguard-Art.png"
          alt="Asguard Art"
        />
      </HeroLeft>
      <HeroRight>
        <Typography color="inherit" variant="h2" sx={{ fontWeight: "500" }}>
          Guarding your staked assets
        </Typography>
        <Typography
          color="inherit"
          variant="body1"
          sx={{ textTransform: "capitalize" }}
        >
          The enterprise-grade blockchain infrastructure of Asgaurd enables you
          to grow your cryptocurrency holdings securely. Boost your earnings by
          taking advantage of decentralized proof-of-stake consensus networks.
        </Typography>
        <ThemeButton
          component="button"
          onClick={() =>
            window.open(
              "https://wallet.assetmantle.one/dashboard/staking",
              "_blank"
            )
          }
        >
          Stake Now!
        </ThemeButton>
      </HeroRight>
    </HeroLayoutRoot>
  );
}
