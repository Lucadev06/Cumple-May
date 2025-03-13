import React from "react";
import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
        gap: "1rem",
        backgroundColor: "antiquewhite",
        borderRadius: "1rem",
        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.2)", // Sombra sutil para destacar
        marginTop: "1rem", // Espacio entre el contenido y el footer
      }}
    >
      <Typography
        variant="body1"
        sx={{
          color: "#333",
          fontFamily: "'Dancing Script', cursive", // Fuente manuscrita para mayor ternura
          fontSize: "1.3rem",
          fontWeight: "bold",
        }}
      >
        Con mucho amor, tu Luqui 💜
      </Typography>
    </Box>
  );
}
