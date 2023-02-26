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

interface ProjectData {
  id: number;
  name: string;
  description: string;
}

const projects: ProjectData[] = [
  {
    id: 1,
    name: "Project 1",
    description: "Description of Project 1",
  },
  {
    id: 2,
    name: "Project 2",
    description: "Description of Project 2",
  },
  {
    id: 3,
    name: "Project 3",
    description: "Description of Project 3",
  },
  {
    id: 4,
    name: "Project 4",
    description: "Description of Project 4",
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
    <Box>
      <Card sx={{ width: "100%" }}>
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            Portfolio
          </Typography>
          <Divider />
          <Grid container spacing={4} sx={{ mt: 4, mb: 4 }}>
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
        </CardContent>
      </Card>
    </Box>
  );
}
