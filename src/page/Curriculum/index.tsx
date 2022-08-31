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
import CodeIcon from "@mui/icons-material/Code";

import resume from "../../data/resume.json";
import Section from "../../component/Section";
import BulletList, { BulletListItem } from "../../component/BulletList";

const {
  name,
  title,
  summary,
  email,
  phone,
  website,
  skills,
  currentPosition,
  priorPositions,
  education,
} = resume;

const headerInfo = { name, title, summary, email, phone, website };

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
        <Typography variant="h4" sx={{ flexGrow: 1 }}>
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
      <hr
        style={{
          borderLeft: "none",
          borderRight: "none",
          borderTop: "2px solid #fff",
          height: "2px",
          width: "100%",
        }}
      ></hr>
      <Typography variant="subtitle1">
        Ingénieur développeur FullStack
      </Typography>
      <Typography variant="caption">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Typography>
      <Box sx={{ p: 2, pt: 0 }}>
        <Section
          iconComponent={CodeIcon}
          title="LANGUES DE PROGRAMMATION et COMPÉTENCES TECHNIQUES"
        >
          <BulletList>
            {skills.map((skill) => (
              <BulletListItem key={skill}>{skill}</BulletListItem>
            ))}
          </BulletList>
        </Section>
      </Box>
    </Paper>
  );
}
