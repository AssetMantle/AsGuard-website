import * as React from "react";
import MuiAppBar from "@mui/material/AppBar";
import { css } from "@emotion/react";

function AppBar(props) {
  return (
    <MuiAppBar
      elevation={0}
      position="fixed"
      css={css`
        backdrop-filter: blur(2px);
        border-radius: 5px;
      `}
      sx={{ backgroundColor: "rgba(4, 4, 4, 0.8)" }}
      {...props}
    />
  );
}

export default AppBar;
