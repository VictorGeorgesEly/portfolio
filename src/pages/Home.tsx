import { Box, Typography } from "@mui/material";
import Typewriter from "../components/Typewriter";
import Background from "../assets/background.jpg";

export default function Home(): JSX.Element {
  const texts = ["an Engineer", "a Developer", "Full Stack"];
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          filter: "grayscale(70%) blur(8px)",
        }}
      />
      <Box
        sx={{
          backgroundColor: "rgba(0,0,0, 0.4)",
          color: "white",
          border: "3px solid #f1f1f1",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
          width: "80%",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <Typography variant="h1" sx={{ fontWeight: "600" }}>
          I am Victor ELY
        </Typography>
        <Typography variant="h3" sx={{ fontWeight: "400" }}>
          And I am <br /><Typewriter text={texts} />
        </Typography>
      </Box>
    </>
  );
}
