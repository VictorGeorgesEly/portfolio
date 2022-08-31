import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
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
