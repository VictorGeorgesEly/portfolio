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
  technologies: string[];
  url: string;
  photo: string;
}

const projects: ProjectData[] = [
  {
    id: 1,
    name: "Portfolio",
    description: "Website vitrine",
    technologies: ["ReactJS - TypeScript"],
    url: "https://github.com/VictorGeorgesEly/portfolio",
    photo: PortfolioImg,
  },
  {
    id: 2,
    name: "Catnix",
    description: "CRM réalisé pour l'association Junior ISEP",
    technologies: ["ReactJS", "Spring Boot"],
    url: "",
    photo: CatnixImg,
  },
  {
    id: 3,
    name: "PsyInsight",
    description:
      "Website réalisé pour mettre en avant les services d'une junior entreprise",
    technologies: ["HTML", "CSS", "JavaScript"],
    url: "https://github.com/VictorGeorgesEly/psyinsight",
    photo: Reptile,
  },
  {
    id: 4,
    name: "Pro Alten",
    description:
      "Website réalisé pour le prix de la meilleure approche commerciale",
    technologies: ["HTML", "CSS", "JavaScript"],
    url: "https://github.com/VictorGeorgesEly/pro_alten",
    photo: Reptile,
  },
  {
    id: 5,
    name: "ISEP Caméléon",
    description:
      "CRM de gestion de projet (réunions, rapports, équipes, documents...)",
    technologies: ["ReactJS", "Spring Boot"],
    url: "https://github.com/VictorGeorgesEly/isep-cameleon",
    photo: Reptile,
  },
  {
    id: 6,
    name: "Vélib",
    description:
      "Projet de visualisation de l'évolution des stations Vélib à PARIS",
    technologies: ["Java"],
    url: "https://github.com/VictorGeorgesEly/theisepsvelibproject",
    photo: Reptile,
  },
  {
    id: 7,
    name: "Encryption - decryption",
    description: "Logiciel de cryptage et de décryptage (x509 - PKCS12)",
    technologies: ["Java"],
    url: "https://github.com/VictorGeorgesEly/Encrypt-Decrypt",
    photo: Reptile,
  },
  {
    id: 8,
    name: "Setup MacBook",
    description: "Système de configuration rapide pour un nouveau mac",
    technologies: ["Ansible"],
    url: "https://github.com/VictorGeorgesEly/mac-conf",
    photo: Reptile,
  },
  {
    id: 9,
    name: "Covid Doctolib",
    description:
      "Script permettant de détecter une place de libre pour l'injection d'un vaccin du covid 19",
    technologies: ["Bash"],
    url: "https://github.com/VictorGeorgesEly/covid-doctolib",
    photo: Reptile,
  },
  // Add more projects here as needed
];

export default function Portfolio(): JSX.Element {
  const [selectedProject, setSelectedProject] =
    React.useState<ProjectData | null>(null);

  const handleDialogOpen = (project: ProjectData) => {
    setSelectedProject(project);
  };

  const handleDialogClose = () => {
    setSelectedProject(null);
  };
  return (
    <Wrapper title="Portfolio">
      <Grid
        container
        spacing={4}
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
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
              <CardActionArea onClick={() => handleDialogOpen(project)}>
                <CardMedia
                  component="img"
                  height="140"
                  image={project.photo}
                  alt={`${project.name} image`}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Technologies : {project.technologies.join(", ")}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
        {selectedProject !== null && (
          <DialogBox
            project={selectedProject}
            open={Boolean(selectedProject)}
            handleClose={handleDialogClose}
          />
        )}
      </Grid>
    </Wrapper>
  );
}
