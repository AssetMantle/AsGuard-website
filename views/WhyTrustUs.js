import { Box, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import Carousel from "react-material-ui-carousel";

const WhyTrustUsLayoutRoot = styled("section")(({ theme }) => ({
  color: theme.palette.themeWhite,
  maxWidth: "1440px",
  margin: "0 auto",
  position: "relative",
  padding: "calc(50px + 6vmin) 0 0",
}));

const CarouselContainer = styled(Box)`
  margin-top: 32px;
  background-image: url("/static/images/testimonial-bg.svg");
  background-repeat: repeat-y;
  background-position: bottom;
  background-size: 100%;
  padding-bottom: calc(24px + 2vmin);
  .mui-style-bbreus-MuiButtonBase-root-MuiIconButton-root,
  .mui-style-mq3aek {
    margin: 9px 15px;
  }
  .mui-style-8ucetn-MuiButtonBase-root-MuiIconButton-root,
  .mui-style-10twnsm {
    margin: 9px 15px;
    svg {
      fill: #ffc640;
    }
    span {
      background: #ffc640 !important;
    }
    box-shadow: 0px 0px 10px #c4c4c4;
  }
`;

const CarouselItem = styled(Paper)`
  padding: calc(65px + 2vmin) calc(20px + 2vmin) calc(51px + 2vmin);
  background-color: transparent;
  box-shadow: none;
  text-align: center;
  transition: all 0.02s ease-in-out;
  .carouselTitle {
    color: ${({ theme }) => theme.palette.themeYellow};
  }
  .carouselBody {
    max-width: ${({ pWidth }) => (pWidth ? pWidth : "1016px")};
    color: ${({ theme }) => theme.palette.themeWhite};
    margin: auto;
  }
`;

export default function WhyTrustUs() {
  const WhyTrustUsContents = [
    {
      title: "Never-failing service",
      details:
        "To ensure uninterrupted service, our systems use highly available, distributed and redundant nodes across multiple data centres in various geographical regions.",
      width: "852px",
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

  /* const [Showing, setShowing] = React.useState(0);

  setInterval(function () {
    Showing === WhyTrustUsContents.length - 1
      ? setShowing(0)
      : setShowing(Showing + 1);
  }, 5000); */

  const carouselStates = {
    autoPlay: true,
    animation: "slide",
    indicators: true,
    timeout: 500,
    navButtonsAlwaysVisible: true,
    navButtonsAlwaysInvisible: false,
    cycleNavigation: true,
  };

  return (
    <WhyTrustUsLayoutRoot>
      <Typography color="inherit" variant="h2" align="center">
        Why Trust Us
      </Typography>
      <CarouselContainer>
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
          {WhyTrustUsContents.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </Carousel>
      </CarouselContainer>
    </WhyTrustUsLayoutRoot>
  );
}

function Item(props) {
  return (
    <CarouselItem pWidth={props.item.width}>
      <Typography color="inherit" variant="h3" className="carouselTitle">
        {props.item.title}
      </Typography>
      <Typography
        color="inherit"
        variant="subtitle1"
        className="carouselBody"
        sx={{ paddingTop: "32px" }}
      >
        {props.item.details}
      </Typography>
    </CarouselItem>
  );
}

// MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium  mui-style-mq3aek
// MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium  mui-style-mq3aek
// MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium   mui-style-10twnsm
