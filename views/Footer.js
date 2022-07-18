import React from "react";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

const FooterLayoutRoot = styled("footer")(({ theme }) => ({
  color: theme.palette.themeWhite,
  background: theme.palette.dark2,
  maxWidth: "1440px",
  margin: "0 auto",
  position: "relative",
  padding: "calc(10px + 3vmin) calc(20px + 2vmin)",
  fontFamily: "'Lato', sans-serif",
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    gap: 50,
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

export default function Footer() {
  return (
    <FooterLayoutRoot>
      <Typography color="inherit" variant="body3" align="center">
        &copy; AsGuard {new Date().getFullYear()} - All rights reserved
      </Typography>
    </FooterLayoutRoot>
  );
}
