import {
  Box,
  Paper,
} from "@mui/material";

import CodeIcon from "@mui/icons-material/Code";
import WorkIcon from "@mui/icons-material/WorkHistory";
import WorkHistoryIcon from "@mui/icons-material/History";
import SchoolIcon from "@mui/icons-material/School";

import BulletList, { BulletListItem } from "../../component/BulletList";
import Section from "../../component/Section";
import Header from "../../component/Header";

import resume from "../../data/resume.json";

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
      <Header {...headerInfo} />
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
