import { Box, Typography } from "@mui/material";
import Typewriter from "../components/Typewriter";
import Background from "../assets/background.jpg";

export default function Home(): JSX.Element {
  const texts = ["an Engineer", "a Developer", "Victor ELY"];
  return (
      <Box sx={{ height: '100vh', display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', backgroundImage: `url(${Background})`, backgroundSize: 'cover', }}>
        <Typography variant="h1" sx={{ marginRight: '80px', marginBottom: '10vh', fontWeight: '600' }}><Typewriter text={texts} /></Typography>
      </Box>
  );
}
