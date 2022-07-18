import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

const HowItWorksLayoutRoot = styled("section")(({ theme }) => ({
  color: theme.palette.themeWhite,
  maxWidth: "1440px",
  margin: "0 auto",
  position: "relative",
  padding: "calc(50px + 6vmin) calc(20px + 2vmin) calc(16px + 3vmin)",
  backgroundImage: "url('/static/images/wave-bg-from-left.svg')",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "bottom",
  backgroundSize: "100%",
}));

const StepsContainer = styled(Box)(({ theme }) => ({
  width: "min(100%, 1125px)",
  margin: "0 auto",
  paddingTop: "calc(50px + 7vmin)",
  display: "flex",
  gap: "40px",
  flexWrap: "wrap",
  alignItems: "end",
  justifyContent: "space-between",
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    gap: 60,
    justifyContent: "center",
  },
}));

const CustomCard = styled(Card)`
  width: ${(props) =>
    props.cardWidth ? `min(100%, ${props.cardWidth})` : "min(100%, 287px)"};
  background: transparent;
  color: ${(props) =>
    props.theme.palette.themeWhite ? props.theme.palette.themeWhite : "white"};
  & > img {
    width: ${(props) => (props.imgWidth ? props.imgWidth : "180px")};
    height: auto;
    margin: auto;
  }
`;

export default function HowItWorks() {
  const CardContents = [
    {
      image: "/static/images/step-1.png",
      altImage: "",
      imgWidth: "207px",
      cardWidth: "257px",
      details: "Choose the amount of  tokens you want to stake with AsGuard",
    },
    {
      image: "/static/images/step-2.png",
      altImage: "",
      imgWidth: "174.93px",
      cardWidth: "287px",
      details:
        "In the same manner as you would stake normally, delegate tokens to the Asguard validator",
    },
    {
      image: "/static/images/step-3.png",
      altImage: "",
      imgWidth: "195.4px",
      cardWidth: "281px",
      details:
        "Make sure you claim your returns and re-stake regularly to ensure compounding effects",
    },
  ];

  return (
    <HowItWorksLayoutRoot>
      <Typography color="inherit" variant="h2" align="center">
        How it works
      </Typography>
      <StepsContainer>
        {React.Children.toArray(
          CardContents.map((data, index) => (
            <CustomCard
              key={index}
              imgWidth={data.imgWidth}
              cardWidth={data.cardWidth}
            >
              <CardMedia
                component="img"
                width={data.width}
                image={data.image}
                alt={data.altImage}
              />
              <CardContent sx={{ padding: "0" }}>
                <Typography
                  color="inherit"
                  variant="h4"
                  sx={{ paddingTop: "20px" }}
                >
                  Step {index + 1}
                </Typography>
                <Typography
                  color="inherit"
                  variant="body2"
                  sx={{ paddingTop: "24px" }}
                >
                  {data.details}
                </Typography>
              </CardContent>
            </CustomCard>
          ))
        )}
      </StepsContainer>
    </HowItWorksLayoutRoot>
  );
}
