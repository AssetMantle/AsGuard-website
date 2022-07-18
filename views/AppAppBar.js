import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import AppBar from "../components/AppBar";
import Toolbar from "../components/Toolbar";
import { Button } from "@mui/material";
import Image from "next/image";

const rightLink = {
  fontSize: 14,
  color: "#FFFDFA",
  ml: 3,
  textTransform: "capitalize",
  fontWeight: 500,
  lineHeight: "120%",
};

function AppAppBar({ setContactUsModal }) {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar
          sx={{
            justifyContent: "space-between",
            width: "min(100%, 1225px)",
            margin: "auto",
          }}
        >
          <Link underline="none" href="/">
            <Image
              width={138.07}
              height={33}
              src="/static/images/logo.svg"
              alt="AsGuard"
            />
          </Link>
          <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
            <Button
              variant="h6"
              sx={rightLink}
              onClick={() => setContactUsModal(true)}
              disabled={true}
            >
              {"Contact Us"}
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default AppAppBar;
