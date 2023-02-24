import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import MouseIcon from "@mui/icons-material/Mouse";

export default function About(): JSX.Element {
  return (
    <Box>
      <Card sx={{ width: "100%" }}>
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            About
          </Typography>
          <Divider />
          <Grid
            container
            sx={{
              mt: 4,
              mb: 4,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            spacing={4}
          >
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
              <Typography variant="body2" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Grid item xs={12}>
                <Typography
                  variant="h6"
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
                  variant="h6"
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
                  variant="h6"
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
          <Grid container sx={{ mt: 4, mb: 4 }} spacing={4}>
            <Grid item xs={12}>
              <Typography
                variant="h5"
                gutterBottom
                sx={{
                  borderBottom: "#E48F46 2px solid",
                  display: "inline-block",
                }}
              >
                Ce que je fais
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              sx={{
                display: "flex",
              }}
            >
              <Box sx={{ textAlign: "center", flex: 1 }}>
                <MouseIcon sx={{ fontSize: 60 }} />
                <Typography variant="h5" gutterBottom>
                  Description
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: "center", flex: 1 }}>
                <MouseIcon sx={{ fontSize: 60 }} />
                <Typography variant="h5" gutterBottom>
                  Description
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: "center", flex: 1 }}>
                <MouseIcon sx={{ fontSize: 60 }} />
                <Typography variant="h5" gutterBottom>
                  Description
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: "center", flex: 1 }}>
                <MouseIcon sx={{ fontSize: 60 }} />
                <Typography variant="h5" gutterBottom>
                  Description
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}
