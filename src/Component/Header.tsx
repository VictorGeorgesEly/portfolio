import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";

export default function Headersehsrthshr() {
  return (
    <>
      <AppBar position="static">
        {/*relative*/}
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <IconButton>
              <Avatar alt="Remy Sharp" src="/static/img/victorely.png" />
            </IconButton>
            <Typography variant="h6" color="inherit" sx={{ flexGrow: 1 }}>
              Victor ELY
            </Typography>
            <IconButton>
              <Avatar alt="Remy Sharp" src="/static/img/victorely.png" />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
