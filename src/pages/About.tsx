import { Box, Card, CardContent, Grid, Typography } from "@mui/material";

export default function About(): JSX.Element {
  return (
    <Box>
      <Card sx={{ width: "100%" }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            About
          </Typography>
          <hr />
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="body2" gutterBottom sx={{borderBottom: '#E48F46 2px solid', display: 'inline-block'}}>
                Description
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" gutterBottom sx={{borderBottom: '#E48F46 2px solid', display: 'inline-block'}}>
                Age
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}
