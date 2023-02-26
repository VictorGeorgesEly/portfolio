import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

import Reptile from "../assets/reptile.jpg";
import DialogBox from "../components/DialogBox";
import Wrapper from "../components/Wrapper";

interface ProjectData {
  id: number;
  name: string;
  description: string;
  url: string;
}

const projects: ProjectData[] = [
  {
    id: 1,
    name: "Project 1",
    description: "Description of Project 1",
    url: "https://github.com",
  },
  {
    id: 2,
    name: "Project 2",
    description: "Description of Project 2",
    url: "https://github.com",
  },
  {
    id: 3,
    name: "Project 3",
    description: "Description of Project 3",
    url: "https://github.com",
  },
  {
    id: 4,
    name: "Project 4",
    description: "Description of Project 4",
    url: "https://github.com",
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
                  image={Reptile}
                  alt="green iguana"
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
