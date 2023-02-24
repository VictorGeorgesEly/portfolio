import { Box, Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import CurriculumVitae from "../pages/CurriculumVitae";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout(): JSX.Element {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Container component="main" sx={{ py: 8 }}> {/* TODO Fix */}
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/curriculumVitae" element={<CurriculumVitae />} />
          <Route path="/contact" element={<Contact />} />
          {/*<Route path="*" element={<h1>404</h1>} />*/}
        </Routes>
      </Container>
      <Footer />
    </Box>
  );
}
