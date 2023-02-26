import React from "react";
import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";

interface Props {
  title: string;
  children: JSX.Element;
}

const Wrapper: React.FC<Props> = ({ title, children }) => {
  return (
    <Box>
      <Card sx={{ width: "100%" }}>
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {title}
          </Typography>
          <Divider />
          <Grid container sx={{ mt: 4, mb: 4 }}>
            {children}
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Wrapper;