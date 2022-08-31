import * as React from "react";
import { Box, Container } from "@mui/material";
import Header from "./Header";
import Curriculum from "../../page/Curriculum";
import Copyright from "./Copyright";

function Layout() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <main>
        <Container>
          <Curriculum />
        </Container>
      </main>
      <Copyright />
    </Box>
  );
}

export default Layout;
