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

import PortfolioImg from "../assets/projects/portfolio.png";
import JuniorIsepImg from "../assets/projects/juniorisep.jpeg";
import PsyInsightImg from "../assets/projects/psyinsight.jpeg";
import CnjeImg from "../assets/projects/cnje.png";
import IsepImg from "../assets/projects/isep.svg";
import IsepLiveImg from "../assets/projects/iseplive.png";
import SopraBankingSoftwareImg from "../assets/projects/sbs.jpeg";
import GithubImg from "../assets/projects/github.png";

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
    description:
      "Il s'agit d'un website (celui sur lequel vous vous trouvez) afin de mettre en avant les projets sur lesquels j'ai participé.",
    technologies: ["ReactJS - TypeScript"],
    url: "https://github.com/VictorGeorgesEly/portfolio",
    photo: PortfolioImg,
  },
  {
    id: 2,
    name: "Catnix",
    description:
      "Il s'agit d'un projet de création de CRM à destination de l'association Junior ISEP. Il a pour objectif de remplacer l'ancien (datant des années 2000) qui ne répondait plus aux processus de l'association. Le projet a demandé l'effort de 5 développeurs afin de réaliser l'ensemble des modules nécessaire à son bon fonctionnement (prospection, publipostage, gestion des utilisateurs, statistiques, gestion des projets...). Le CRM a été conçu sous la forme de micro-services communiquant à l'aide d'une API Gateway afin de minimiser l'impact sur le système en cas de panne.",
    technologies: ["ReactJS", "Spring Boot"],
    url: "",
    photo: JuniorIsepImg,
  },
  {
    id: 3,
    name: "PsyInsight",
    description:
      "Il s'agit d'un projet de construction de site Internet vitrine à destination d'une association afin de mettre en avant ses activités et booster son référencement.",
    technologies: ["HTML", "CSS", "JavaScript"],
    url: "https://github.com/VictorGeorgesEly/psyinsight",
    photo: PsyInsightImg,
  },
  {
    id: 4,
    name: "Pro Alten",
    description:
      "Ce projet a été conçu afin de répondre à un cahier des charges fixé par Alten dans l'objectif de remporter le prix de la meilleure approche commerciale. Il s'agit d'un site Internet conçu sous la forme d'un avant-projet, permettant au client de sélectionner des options facultatives et lui permettant de voir l'évolution du temps de projet et de son prix final.",
    technologies: ["HTML", "CSS", "JavaScript"],
    url: "https://github.com/VictorGeorgesEly/pro_alten",
    photo: CnjeImg,
  },
  {
    id: 5,
    name: "ISEP Caméléon",
    description:
      "Il s'agit d'un projet réalisé en dernière année au sein de mon école d'ingénieurs. En équipe de 6, nous avions pour mission de réaliser un CRM permettant aux étudiants et professeurs d'avoir un lieu où tous les projets seraient réunis et suivi et fur et à mesure de leur avancement. Cet outil possède différents modules (création et gestion de groupes, gestion des utilisateurs, publipostage de documents, upload de documents, gestion des réunions et emploi du temps...)",
    technologies: ["ReactJS", "Spring Boot"],
    url: "https://github.com/VictorGeorgesEly/isep-cameleon",
    photo: IsepImg,
  },
  {
    id: 6,
    name: "Vélib",
    description:
      "Il s'agit d'un projet de simulation des évolutions des stations vélibs sur une période de 24h.",
    technologies: ["Java"],
    url: "https://github.com/VictorGeorgesEly/theisepsvelibproject",
    photo: IsepImg,
  },
  {
    id: 7,
    name: "Encryption - decryption",
    description: "Logiciel de cryptage et de décryptage (x509 - PKCS12)",
    technologies: ["Java"],
    url: "https://github.com/VictorGeorgesEly/Encrypt-Decrypt",
    photo: GithubImg,
  },
  {
    id: 8,
    name: "Setup MacBook",
    description: "Système de configuration rapide pour un nouveau mac",
    technologies: ["Ansible"],
    url: "https://github.com/VictorGeorgesEly/mac-conf",
    photo: GithubImg,
  },
  {
    id: 9,
    name: "Covid Doctolib",
    description:
      "Script permettant de détecter une place de libre pour l'injection d'un vaccin du covid 19",
    technologies: ["Bash"],
    url: "https://github.com/VictorGeorgesEly/covid-doctolib",
    photo: GithubImg,
  },
  {
    id: 10,
    name: "ISEP Live",
    description: "Facebook like réalisé pour l'association ISEP Live",
    technologies: ["ReactJS", "Spring Boot"],
    url: "https://github.com/juniorisep/IsepLive",
    photo: IsepLiveImg,
  },
  {
    id: 11,
    name: "CorPex",
    description:
      "Outil de génération de flux bancaire (CR165, SCT, SDD, SCTRB4)",
    technologies: ["Java"],
    url: "",
    photo: SopraBankingSoftwareImg,
  },
  {
    id: 12,
    name: "CorPex",
    description:
      "Outil d'initialisation des flux de restitution du nouveau logiciel à partir des données de l'ancienne plate-forme bancaire",
    technologies: ["Java", "Batch", "Oracle Database"],
    url: "",
    photo: SopraBankingSoftwareImg,
  },
  {
    id: 13,
    name: "CorPex",
    description:
      "Outil d'import - export de données d'un site A vers un site B",
    technologies: ["Spring Batch", "Batch", "Oracle Database"],
    url: "",
    photo: SopraBankingSoftwareImg,
  },
  {
    id: 14,
    name: "CorPex",
    description: "Outil de montée de version",
    technologies: ["Spring Batch", "Batch", "Oracle Database"],
    url: "",
    photo: SopraBankingSoftwareImg,
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
                  sx={{ backgroundColor: "white" }} // TODO
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {project.name}
                  </Typography>
                  {/*                  <Typography variant="body2" color="text.secondary">
                    {project.description}
            </Typography>*/}
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
