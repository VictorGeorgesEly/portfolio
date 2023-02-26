import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import AvatarUrl from "../assets/avatar.jpeg";
import ReactSvg from "../assets/react.svg";
import SpringSvg from "../assets/spring.svg";
import GolangSvg from "../assets/golang.svg";
import MysqlSvg from "../assets/mysql.svg";
import Wrapper from "../components/Wrapper";

function Description(): JSX.Element {
  return (
    <Grid container sx={{ mt: 2, mb: 2 }}>
      <Grid item xs={12}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            borderBottom: "#E48F46 2px solid",
            display: "inline-block",
          }}
        >
          Description
        </Typography>
        <Grid>
          <Typography variant="body1" gutterBottom align="justify">
            Je suis un développeur Full Stack passionné par les technologies
            modernes de développement web. Je possède une expérience approfondie
            dans la création de CRM en utilisant ReactJS et Spring Boot. Avec
            une expertise dans le développement front-end et back-end, je suis
            capable de gérer tous les aspects du cycle de développement d'un
            projet, de la conception à la mise en production.
          </Typography>
          <Typography variant="h6" gutterBottom>
            Expérience :
          </Typography>
          <Typography variant="body1" gutterBottom align="justify">
            Développement d'applications web avec ReactJS - TypeScript.
            <br />
            Conception et développement d'API RESTful en utilisant Java et
            Spring Boot.
            <br />
            Expérience en intégration continue et déploiement continu (CI/CD)
            avec Jenkins et GitLab.
          </Typography>
          <Typography variant="h6" gutterBottom>
            Compétences techniques :
          </Typography>
          <Typography variant="body1" gutterBottom align="justify">
            Langages de programmation : ReactJS, Java, Golang.
            <br />
            Bibliothèques : Spring (Boot, Batch, Web, Security, Data JPA),
            TypeScript, React Router, Axios, Jest, Mui, Gin, Gorm.
            <br />
            Bases de données : MySQL, SQLite, Oracle Database.
            <br />
            Outils de développement : Git, SVN, Jenkins, IntelliJ IDEA.
          </Typography>
          <Typography variant="h6" gutterBottom>
            Centres d'intérêt :
          </Typography>
          <Typography variant="body1" gutterBottom align="justify">
            Musique : 8 ans de solfège ainsi que 7 années de violon
            <br />
            Voile : Participation par deux fois à la coupe des 3 Phares
            (régates)
            <br />
            Aéronautique : Pilotage de Cesna
            <br />
            Sports de glisse : Ski et surf
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

function Techno(): JSX.Element {
  return (
    <Grid container sx={{ mt: 2, mb: 2 }}>
      <Grid item xs={12}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            borderBottom: "#E48F46 2px solid",
            display: "inline-block",
          }}
        >
          Mes techno
        </Typography>
      </Grid>
      <Grid
        container
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
        spacing={4}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ textAlign: "center", flex: 1 }}>
            <img src={SpringSvg} alt="Spring Logo" style={{ width: 50 }} />
            <Typography variant="h5" gutterBottom>
              Spring
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ textAlign: "center", flex: 1 }}>
            <img src={GolangSvg} alt="Spring Logo" style={{ width: 50 }} />
            <Typography variant="h5" gutterBottom>
              Golang
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ textAlign: "center", flex: 1 }}>
            <img src={ReactSvg} alt="Spring Logo" style={{ width: 50 }} />
            <Typography variant="h5" gutterBottom>
              ReactJS
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ textAlign: "center", flex: 1 }}>
            <img src={MysqlSvg} alt="Spring Logo" style={{ width: 50 }} />
            <Typography variant="h5" gutterBottom>
              SQL
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}

function Header(): JSX.Element {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      spacing={4}
    >
      <Grid
        item
        xs={12}
        sm={4}
        md={3}
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Avatar
          alt="Victor ELY"
          src={AvatarUrl}
          sx={{ width: 220, height: 220 }}
        />
      </Grid>
      <Grid item xs={12} sm={8} md={5}>
        <Typography variant="h2" gutterBottom sx={{ fontWeight: "bold" }}>
          Victor ELY
        </Typography>
        <Typography variant="h4">Développeur Full Stack</Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <Grid item xs={12}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              borderBottom: "#E48F46 2px solid",
              display: "inline-block",
            }}
          >
            Email
          </Typography>
          <span> : victor.georges.ely@gmail.com</span>
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
            Téléphone
          </Typography>
          <span> : 06 70 76 73 80</span>
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
  );
}

export default function About(): JSX.Element {
  return (
    <Wrapper title="A propos">
      <>
        <Header />
        <Description />
        <Techno />
      </>
    </Wrapper>
  );
}
