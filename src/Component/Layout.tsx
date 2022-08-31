import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Copyright from "./Copyright";
import Header from "./Header";
import Curriculum from "./Curriculum";

export default function Layout() {
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
