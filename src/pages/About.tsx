import { Avatar, Box, Grid, Typography } from "@mui/material";
import AvatarUrl from "../assets/avatar.jpeg";
import ReactSvg from "../assets/react.svg";
import SpringSvg from "../assets/spring.svg";
import JavaSvg from "../assets/java.svg";
import JavaScriptSvg from "../assets/javascript.svg";
import TypeScriptSvg from "../assets/typescript.svg";
import GolangSvg from "../assets/golang.svg";
import MysqlSvg from "../assets/mysql.svg";
import OracleSvg from "../assets/oracle.svg";
import SqliteSvg from "../assets/sqlite.svg";
import GitSvg from "../assets/git.svg";
import SvnSvg from "../assets/svn.svg";
import JenkinsSvg from "../assets/jenkins.svg";
import Intellijvg from "../assets/intellij.svg";
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

interface TechnoData {
  id: number;
  name: string;
  photo: string;
}

const technos: TechnoData[] = [
  {
    id: 1,
    name: "Java",
    photo: JavaSvg,
  },
  {
    id: 2,
    name: "Golang",
    photo: GolangSvg,
  },
  {
    id: 3,
    name: "JavaScript",
    photo: JavaScriptSvg,
  },
];

const frameworks: TechnoData[] = [
  {
    id: 1,
    name: "Spring",
    photo: SpringSvg,
  },
  {
    id: 2,
    name: "ReactJS",
    photo: ReactSvg,
  },
  {
    id: 3,
    name: "TypeScript",
    photo: TypeScriptSvg,
  },
];

const databases: TechnoData[] = [
  {
    id: 1,
    name: "MySQL",
    photo: MysqlSvg,
  },
  {
    id: 2,
    name: "SQLite",
    photo: SqliteSvg,
  },
  {
    id: 3,
    name: "Oracle Databases",
    photo: OracleSvg,
  },
];

const tools: TechnoData[] = [
  {
    id: 1,
    name: "Git",
    photo: GitSvg,
  },
  {
    id: 2,
    name: "SVN",
    photo: SvnSvg,
  },
  {
    id: 3,
    name: "Jenkins",
    photo: JenkinsSvg,
  },
  {
    id: 3,
    name: "Intellij",
    photo: Intellijvg,
  },
];

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
      <TechnoGrid items={technos} title="Languages :" />
      <TechnoGrid items={frameworks} title="Framework | Bibliothèques :" />
      <TechnoGrid items={databases} title="Base de données :" />
      <TechnoGrid items={tools} title="Outils de développement :" />
    </Grid>
  );
}

interface TechnoGridProps {
  items: TechnoData[];
  title: string;
}

function TechnoGrid({ items, title }: TechnoGridProps) {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Grid
        container
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
        spacing={4}
      >
        {items.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={3}>
            <Box sx={{ textAlign: "center", flex: 1 }}>
              <img
                src={item.photo}
                alt={`${item.name} Logo`}
                style={{ height: 50, maxWidth: 150 }}
              />
              <Typography variant="h5" gutterBottom>
                {item.name}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
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
