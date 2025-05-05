"use client";
import { Box, Typography } from "@mui/material";
import Header from "@/components/Header"; 
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header /> 

      <Box sx={{ marginTop: "1rem" }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "purple", marginBottom: "0.5rem" }}>
          ✨ ¡Feliz cumpleaños, amor! ✨
        </Typography>

        <Box sx={{ width: "85%" }}>
          <Typography variant="body1" sx={{ color: "#333" }}>
            Amor de mi vida, te amo del infinito y más allá. 💜  
            Eres todo lo que está bien en la vida y una <strong>súper mujer</strong>.  
            Estoy más que <strong>orgulloso y feliz</strong> de que estés en mi vida.  
            <strong>Te amodoro con todo mi corazón. 💖</strong>
          </Typography>
        </Box>
      </Box>

      <Footer />
    </>
  );
}
