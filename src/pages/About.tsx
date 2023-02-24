import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";

export default function About(): JSX.Element {
  return (
    <Box>
      <Card sx={{ width: "100%" }}>
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            About
          </Typography>
          <Divider />
          <Grid container sx={{ mt: 4 }}>
            <Grid item xs={6}>
              <Typography
                variant="h5"
                gutterBottom
                sx={{
                  borderBottom: "#E48F46 2px solid",
                  display: "inline-block",
                }}
              >
                Description
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Grid item xs={12}>
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{
                    borderBottom: "#E48F46 2px solid",
                    display: "inline-block",
                  }}
                >
                  Addresse
                </Typography>
                <span> : PARIS, FRANCE</span>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{
                    borderBottom: "#E48F46 2px solid",
                    display: "inline-block",
                  }}
                >
                  Permis
                </Typography>
                <span> : B</span>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{
                    borderBottom: "#E48F46 2px solid",
                    display: "inline-block",
                  }}
                >
                  Langues
                </Typography>
                <span> : Français | Anglais</span>
              </Grid>
            </Grid>
          </Grid>
          <Grid container sx={{ mt: 4 }}>
            <Grid item xs={3}>
              <Typography variant="body2" gutterBottom align="center">
                Description
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body2" gutterBottom align="center">
                Description
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body2" gutterBottom align="center">
                Description
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body2" gutterBottom align="center">
                Description
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}
