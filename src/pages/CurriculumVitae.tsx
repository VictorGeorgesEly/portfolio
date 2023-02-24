import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";

export default function CV(): JSX.Element {
  return (
    <Box>
      <Card sx={{ width: "100%" }}>
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            Curriculum Vitae
          </Typography>
          <Divider />
          <Grid container spacing={4} sx={{ mt: 4 }}></Grid>
        </CardContent>
      </Card>
    </Box>
  );
}
