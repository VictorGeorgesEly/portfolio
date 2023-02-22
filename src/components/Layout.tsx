import { Box, Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout(): JSX.Element {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
            }}
        >
        <Header />
        <Container component="main" sx={{m: '2%'}}>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="*" element={<h1>404</h1>} />
            </Routes>
        </Container>
        <Footer />
    </Box>
    )
}