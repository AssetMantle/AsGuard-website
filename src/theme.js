import { createTheme } from "@mui/material/styles";
import { green, grey, red } from "@mui/material/colors";

const rawTheme = createTheme({
  palette: {
    themeWhite: "#fffdfa",
    dark2: "#21211e",
    dark3: "#c2c2c2",
    themeYellow: "#ffc640",
    yellowDisabled: "#624d19",
    primary: {
      light: "#69696a",
      main: "#111111",
      dark: "#1e1e1f",
    },
    secondary: {
      light: "#fff5f8",
      main: "#ff3366",
      dark: "#e62958",
    },
    warning: {
      main: "#ffc071",
      dark: "#ffb25e",
    },
    error: {
      light: red[50],
      main: red.A400,
      dark: red[700],
    },
    success: {
      light: green[50],
      main: green[500],
      dark: green[700],
    },
  },
  typography: {
    fontFamily: "'Work Sans', sans-serif",
    fontSize: 14,
    fontWeightLight: 300, // Work Sans
    fontWeightRegular: 400, // Work Sans
    fontWeightMedium: 700, // Roboto Condensed
  },
});

const fontHeader = {
  color: rawTheme.palette.text.primary,
  fontWeight: rawTheme.typography.fontWeightMedium,
  fontFamily: "'Work Sans', sans-serif",
  textTransform: "capitalize",
};

const theme = {
  ...rawTheme,
  palette: {
    ...rawTheme.palette,
    background: {
      ...rawTheme.palette.background,
      default: rawTheme.palette.common.white,
      placeholder: grey[200],
    },
  },
  typography: {
    ...rawTheme.typography,
    fontHeader,
    h1: {
      ...rawTheme.typography.h1,
      ...fontHeader,
      letterSpacing: 0,
      fontSize: 48,
      lineHeight: "120%",
    },
    h2: {
      ...rawTheme.typography.h2,
      ...fontHeader,
      fontSize: 42,
      fontWeight: 600,
      lineHeight: "120%",
    },
    h3: {
      ...rawTheme.typography.h3,
      ...fontHeader,
      fontSize: 32,
      lineHeight: "120%",
    },
    h4: {
      ...rawTheme.typography.h4,
      ...fontHeader,
      fontSize: 24,
      lineHeight: "120%",
    },
    h5: {
      ...rawTheme.typography.h5,
      fontSize: 20,
      lineHeight: "120%",
      fontWeight: rawTheme.typography.fontWeightLight,
    },
    h6: {
      ...rawTheme.typography.h6,
      ...fontHeader,
      fontSize: 18,
      lineHeight: "120%",
    },
    subtitle1: {
      ...rawTheme.typography.subtitle1,
      fontSize: 24,
      lineHeight: "120%",
    },
    body1: {
      ...rawTheme.typography.body2,
      fontWeight: rawTheme.typography.fontWeightRegular,
      fontSize: 20,
      lineHeight: "120%",
    },
    body2: {
      ...rawTheme.typography.body1,
      fontSize: 18,
      lineHeight: "120%",
    },
    body3: {
      ...rawTheme.typography.body1,
      fontSize: 13,
      lineHeight: "120%",
    },
  },
};

export default theme;
