import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import * as React from "react";
import Markdown from "../components/Markdown";
import Typography from "../components/Typography";
import AppAppBar from "../views/AppAppBar";
import AppFooter from "../views/AppFooter";
import privacy from "../views/privacy.md";

function Privacy() {
  return (
    <React.Fragment>
      <AppAppBar />
      <Container>
        <Box sx={{ mt: 7, mb: 12 }}>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Privacy
          </Typography>
          <Markdown>{privacy}</Markdown>
        </Box>
      </Container>
      <AppFooter />
    </React.Fragment>
  );
}

export default Privacy;
