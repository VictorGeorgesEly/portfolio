import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

import DialogBox from "../components/DialogBox";
import Wrapper from "../components/Wrapper";

import Reptile from "../assets/reptile.jpg";
import PortfolioImg from "../assets/projects/portfolio.png";
import CatnixImg from "../assets/projects/catnix.png";

interface ProjectData {
  id: number;
  name: string;
  description: string;
  url: string;
  photo: string;
}

const projects: ProjectData[] = [
  {
    id: 1,
    name: "Portfolio",
    description: "Projet réalisé en ReactJS - Typescript",
    url: "https://github.com/VictorGeorgesEly/portfolio",
    photo: PortfolioImg,
  },
  {
    id: 2,
    name: "Catnix",
    description: "CRM réalisé pour l'association Junior ISEP en ReactJS - Spring",
    url: "",
    photo: CatnixImg,
  },
  {
    id: 3,
    name: "Project 3",
    description: "Description of Project 3",
    url: "https://github.com",
    photo: Reptile,
  },
  {
    id: 4,
    name: "Project 4",
    description: "Description of Project 4",
    url: "https://github.com",
    photo: Reptile,
  },
  // Add more projects here as needed
];

export default function Portfolio(): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const [selectedProject, setSelectedProject] =
    React.useState<ProjectData | null>(null);

  const handleClickOpen = (project: ProjectData) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Wrapper title="Portfolio">
      <Grid container spacing={4}>
        {projects.map((project) => (
          <Grid item key={project.id} xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
              elevation={12}
            >
              <CardActionArea onClick={() => handleClickOpen(project)}>
                <CardMedia
                  component="img"
                  height="140"
                  image={project.photo}
                  alt="project"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              {selectedProject && (
                <DialogBox
                  project={selectedProject}
                  open={open}
                  handleClose={handleClose}
                />
              )}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
}
