import React from "react";
import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Typography,
} from "@mui/material";

interface Props {
  title: string;
  children: JSX.Element;
}

const Wrapper: React.FC<Props> = ({ title, children }) => {
  return (
    <Container component="main" sx={{ py: 8 }}>
      <Card sx={{ width: "100%" }}>
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {title}
          </Typography>
          <Divider />
          <Box sx={{ my: 4 }}>
            {children}
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Wrapper;