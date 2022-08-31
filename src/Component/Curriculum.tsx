import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LanguageIcon from "@mui/icons-material/Language";

export default function Curriculum() {
  return (
    <Paper
      elevation={6}
      style={{
        margin: "0.25in auto 0.25in auto",
        maxWidth: "1024px",
        padding: "0.125in 0.25in",
      }}
    >
      <Grid container>
        <Typography
          variant="h4"
          sx={{ flexGrow: 1 }}
        >
          Victor ELY
        </Typography>
        <Box>
          <Link
            color="white"
            underline="hover"
            href={`https://`} //TODO
            target="_blank"
          >
            <ListItem dense>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <LanguageIcon fontSize="small" />
              </ListItemIcon>
              <Typography
                variant="subtitle2"
                fontWeight={700}
                color="secondary"
              >
                https://
              </Typography>
            </ListItem>
          </Link>
          <Link
            color="white"
            underline="hover"
            href={`mailto:victor.georges.ely@gmail.com`}
          >
            <ListItem dense>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <EmailIcon fontSize="small" />
              </ListItemIcon>
              <Typography
                variant="subtitle2"
                fontWeight={700}
                color="secondary"
              >
                victor.georges.ely@gmail.com
              </Typography>
            </ListItem>
          </Link>
          <Link color="white" underline="hover" href={`tel:0670767380`}>
            <ListItem dense>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <PhoneIcon fontSize="small" />
              </ListItemIcon>
              <Typography
                variant="subtitle2"
                fontWeight={700}
                color="secondary"
              >
                06 70 76 73 80
              </Typography>
            </ListItem>
          </Link>
        </Box>
      </Grid>
      <hr style={{ borderLeft: 'none', borderRight: 'none', borderTop: '2px solid #fff', height: '2px', width: '100%' }}></hr>
    </Paper>
  );
}
