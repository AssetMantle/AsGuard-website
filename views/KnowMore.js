import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Link, Typography } from "@mui/material";
import Image from "next/image";

const KnowMoreLayoutRoot = styled("section")(({ theme }) => ({
  color: theme.palette.themeWhite,
  maxWidth: "1440px",
  margin: "0 auto",
  position: "relative",
  padding: "calc(50px + 6vmin) calc(20px + 2vmin) calc(55px + 6vmin)",
}));

const LinkContainer = styled(Box)`
  padding-top: 80px;
  width: min(100%, 1023px);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 180px;
  flex-wrap: wrap;
  ${({ theme }) => ({
    [theme.breakpoints.down("sm")]: {
      gap: 80,
    },
  })}
  a {
    width: 120px;
    height: 120px;
    position: relative;
    ${({ theme }) => ({
      [theme.breakpoints.down("sm")]: {
        width: "80px",
        height: "80px",
      },
    })}
    &:hover {
      filter: drop-shadow(0px 0px 25px #ffd365);
    }
  }
`;

export default function KnowMore() {
  const CTAs = [
    // {
    //   image: "cosmostation",
    //   link: "",
    // },
    {
      image: "twitter",
      link: "https://twitter.com/AsGuardNetwork",
    },
    {
      image: "assetmantle",
      link: "https://assetmantle.one/",
    },
    {
      image: "linktree",
      link: "https://t.co/ZhDQrZbCHc",
    },
  ];

  return (
    <KnowMoreLayoutRoot>
      <Typography color="inherit" variant="h2" align="center">
        Know more at
      </Typography>
      <LinkContainer>
        {CTAs.map((data, index) => (
          <Link
            key={index}
            href={data.link}
            onClick={(e) => !data.link && e.preventDefault()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              layout="fill"
              src={`/static/images/${data.image}.png`}
              alt={data.image + " logo"}
            />
          </Link>
        ))}
      </LinkContainer>
    </KnowMoreLayoutRoot>
  );
}
