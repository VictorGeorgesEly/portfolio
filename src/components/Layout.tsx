import { Box, Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import CurriculumVitae from "../pages/CurriculumVitae";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import Footer from "./Footer";
import Header from "./Header";

interface WrapperProps {
  children: JSX.Element;
}

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <Container component="main" sx={{ py: 8 }}>
      {children}
    </Container>
  );
};

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
        <Route
          path="/about"
          element={
            <Wrapper>
              <About />
            </Wrapper>
          }
        />
        <Route
          path="/portfolio"
          element={
            <Wrapper>
              <Portfolio />
            </Wrapper>
          }
        />
        <Route
          path="/curriculumVitae"
          element={
            <Wrapper>
              <CurriculumVitae />
            </Wrapper>
          }
        />
        <Route
          path="/contact"
          element={
            <Wrapper>
              <Contact />
            </Wrapper>
          }
        />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
      <Footer />
    </Box>
  );
}
