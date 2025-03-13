"use client";
import Header from "@/components/Header";
import { Box, Typography, Paper } from "@mui/material";
import Image from "next/image";
import { styled } from "@mui/system";
import Footer from "@/components/Footer";

// 💖 Estilos personalizados para las cajitas
const FotoCaja = styled(Paper)({
  backgroundColor: "#ffe4e1", // Color rosado suave
  borderRadius: "15px",
  padding: "1rem",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
  width: "320px",
  transition: "transform 0.2s ease",
  "&:hover": {
    transform: "scale(1.05)", // Efecto hover
  },
});

const TextoFecha = styled(Typography)({
  fontFamily: "'Pacifico', cursive",
  color: "#ff69b4",
  fontSize: "1.1rem",
});

export default function Juego() {
  const images = [
    { src: "/foto-01.jpg", text: "15/12/2023 Nos egresamos" },
    { src: "/foto-02.jpg", text: "14/02/2024 Nuestro primer San Valentín 💘" },
    { src: "/foto-03.jpg", text: "19/10/2024 Parque de la Costa 🎢" },
    { src: "/foto-04.jpg", text: "23/12/2024 (creo) Te amo, no sé qué poner <3" },
    { src: "/foto-05.jpg", text: "01/01/2025 Año Nuevo 🎇" },
    { src: "/foto-06.jpg", text: "21/02/2025 Nuestras primeras vacas solos 🌴" },
  ];

  return (
    <>
      <Header />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 3,
          mt: 3,
          padding: "1rem",
        }}
      >
        {images.map((item, index) => (
          <FotoCaja key={index} elevation={3}>
            <Image
              src={item.src}
              alt={`Imagen ${index + 1}`}
              width={280}
              height={280}
              style={{ borderRadius: "10px" }}
            />
            <TextoFecha>{item.text}</TextoFecha>
          </FotoCaja>
        ))}
      </Box>
      <Footer/>
    </>
  );
}
