import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";

const Banner = (props) => {
  const item = props.item;

  return (
    <Box sx={{ px: "15", display: "flex", backgroundColor: "red" }}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h3" align="center">
            {item.title}
          </Typography>
          <Typography variant="h6" align="center">
            {item.details}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

const WhyTrustUsTwo = () => {
  const carouselStates = {
    autoPlay: true,
    animation: "slide",
    indicators: true,
    timeout: 500,
    navButtonsAlwaysVisible: true,
    navButtonsAlwaysInvisible: false,
    cycleNavigation: true,
  };

  const whyTrustUsContents = [
    {
      title: "Never-failing service",
      details:
        "To ensure uninterrupted service, our systems use highly available, distributed and redundant nodes across multiple data centres in various geographical regions.",
      width: "1016px",
    },
    {
      title: "Cutting-edge security",
      details:
        "We protect our validators from cyber and physical attacks through a robust, comprehensive security setup. Furthermore, we maintain a constant eye on operations with our global team and stay prepared to react immediately to any incidents, major or minor.",
      width: "1120px",
    },
    {
      title: "Top-of-the-line monitoring and automation",
      details:
        "Our state-of-the-art infrastructure is automatically configured to avoid the risks associated with manual deployment. A professionally designed key management system ensures effective and distributed control over cryptographic materials.",
      width: "1016px",
    },
  ];

  return (
    <div style={{ marginTop: "50px", color: "#494949" }}>
      <Typography color="inherit" variant="h2" align="center">
        Why Trust Us
      </Typography>
      <Carousel
        autoPlay={carouselStates.autoPlay}
        animation={carouselStates.animation}
        indicators={carouselStates.indicators}
        timeout={carouselStates.timeout}
        cycleNavigation={carouselStates.cycleNavigation}
        navButtonsAlwaysVisible={carouselStates.navButtonsAlwaysVisible}
        navButtonsAlwaysInvisible={carouselStates.navButtonsAlwaysInvisible}
        next={(now, previous) =>
          console.log(
            `Next User Callback: Now displaying child${now}. Previously displayed child${previous}`
          )
        }
        prev={(now, previous) =>
          console.log(
            `Prev User Callback: Now displaying child${now}. Previously displayed child${previous}`
          )
        }
        onChange={(now, previous) =>
          console.log(
            `OnChange User Callback: Now displaying child${now}. Previously displayed child${previous}`
          )
        }
      >
        {whyTrustUsContents.map((item, index) => (
          <Banner item={item} key={index} />
        ))}
      </Carousel>
    </div>
  );
};

export default WhyTrustUsTwo;
