import * as React from "react";
import {
  AppBar,
  Avatar,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

export default function Headersehsrthshr() {
  return (
    <>
      <AppBar position="static">
        {/*relative*/}
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <IconButton>
              <Avatar alt="Victor ELY" src="/static/img/victorely.png" />
            </IconButton>
            <Typography variant="h6" color="inherit" sx={{ flexGrow: 1 }}>
              Victor ELY
            </Typography>
            <IconButton>
              <Avatar
                alt="Github"
                src="/static/img/github.png"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
