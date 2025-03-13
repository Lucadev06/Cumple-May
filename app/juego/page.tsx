"use client";

import { useState } from "react";
import { Box, Typography, Paper, RadioGroup, FormControlLabel, Radio, Button } from "@mui/material";
import { styled } from "@mui/system";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Estilos 🎀
const Contenedor = styled(Paper)({
  padding: "2rem",
  backgroundColor: "#ffe4e1", // Fondo rosado suave
  borderRadius: "20px",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
  width: "90%",
  maxWidth: "600px",
  margin: "auto",
});

const Pregunta = styled(Typography)({
  fontFamily: "'Pacifico', cursive",
  color: "#ff69b4",
  fontSize: "1.2rem",
});

const BotonEnviar = styled(Button)({
  marginTop: "1rem",
  backgroundColor: "#ff69b4",
  color: "white",
  "&:hover": {
    backgroundColor: "#ff4081",
  },
});

export default function JuegoPreguntas() {
  const preguntas = [
    {
      pregunta: "¿Quién dio el primer beso?",
      opciones: ["Yo", "Vos", "Dios"],
      correcta: "Yo",
    },
    {
      pregunta: "¿Cuánto tiempo estuve detrás de tu hermoso baúl?",
      opciones: ["2 años", "2 meses", "1 año y medio"],
      correcta: "1 año y medio",
    },
    {
      pregunta: "¿Cuál fue la primera película que fuimos a ver?",
      opciones: ["Five Nights at Freddy's", "La Sustancia", "American Pay"],
      correcta: "Five Nights at Freddy's",
    },
    {
      pregunta: "¿En qué mes del 2023 empezamos a salir?",
      opciones: ["Noviembre", "Octubre", "Marzo"],
      correcta: "Octubre",
    },
    {
      pregunta: "¿Cuántos viajes compartimos?",
      opciones: ["1", "2", "3"],
      correcta: "3",
    },
    {
      pregunta: "Diferencia de edad exacta en días?",
      opciones: ["93", "100", "133"],
      correcta: "93",
    },
    {
      pregunta: "Si me preguntas si te amo, digo...?",
      opciones: ["Mucho más que vos a mí", "Sí muchísimo", "Del infinito y más allá", "Nací solo, muero solo"],
      correcta: "Mucho más que vos a mí",
    },
    {
      pregunta: "¿En dónde fue nuestra primera cita?",
      opciones: ["Café Martínez", "Unicenter", "Afganistán"],
      correcta: "Café Martínez",
    },
    {
      pregunta: "¿Hace cuánto no me bloqueas de ninguna red social (en días)?",
      opciones: ["105", "78", "120"],
      correcta: "105",
    },
    {
      pregunta: "¿Qué canción de Duki cantamos cuando llueve?",
      opciones: ["Cascada", "Rockstar", "Goteo", "Si Me Sobrar el Tiempo"],
      correcta: "Cascada",
    },
  ];

  // Estado para almacenar respuestas seleccionadas
  const [respuestas, setRespuestas] = useState<{ [key: number]: string }>({});
  const [puntaje, setPuntaje] = useState<number | null>(null);

  // Función para manejar cambios en respuestas
  const handleChange = (index: number, value: string) => {
    setRespuestas((prev) => ({
      ...prev,
      [index]: value,
    }));
  };

  // Función para evaluar respuestas
  const evaluarRespuestas = () => {
    let score = 0;
    preguntas.forEach((preg, index) => {
      if (respuestas[index] === preg.correcta) {
        score++;
      }
    });
    setPuntaje(score);
  };

  return (
    <>
      <Header />
      <Contenedor elevation={3}>
        <Typography variant="h4" sx={{ fontFamily: "'Pacifico', cursive", color: "#ff4081", mb: 2 }}>
          💖 Juego del Amor 💖
        </Typography>

        {/* Aclaración antes del juego */}
        <Typography variant="body1" sx={{ fontStyle: "italic", color: "#ff4081", mb: 2 }}>
          ⚠️ *Reglas del juego:*  
          - Si respondes 6 o más bien, te debo 1 millón de besos y un regalo extra 🎁  
          - Si respondes menos de 6, no te podés enojar por 1 mes entero 😈
        </Typography>

        {preguntas.map((preg, index) => (
          <Box key={index} sx={{ mb: 2, textAlign: "left" }}>
            <Pregunta>{`${index + 1}. ${preg.pregunta}`}</Pregunta>
            <RadioGroup
              value={respuestas[index] || ""}
              onChange={(e) => handleChange(index, e.target.value)}
            >
              {preg.opciones.map((opcion) => (
                <FormControlLabel
                  key={opcion}
                  value={opcion}
                  control={<Radio sx={{ color: "#ff69b4" }} />}
                  label={opcion}
                />
              ))}
            </RadioGroup>
          </Box>
        ))}

        <BotonEnviar variant="contained" onClick={evaluarRespuestas}>
          Enviar Respuestas 💘
        </BotonEnviar>

        {puntaje !== null && (
          <Typography variant="h5" sx={{ mt: 2, color: "#ff4081", fontWeight: "bold" }}>
            🌟 Tu puntaje: {puntaje} / {preguntas.length} 🌟
          </Typography>
        )}

        {/* Mensaje final según puntaje */}
        {puntaje !== null && (
          <Typography
            variant="h6"
            sx={{
              mt: 2,
              color: puntaje >= 6 ? "#ff1493" : "#ff4500",
              fontWeight: "bold",
            }}
          >
            {puntaje >= 6
              ? "🎉 ¡Felicidades! Te debo 1 millón de besos y un regalo extra 🎁"
              : "😈 Ups... ahora no te podés enojar por 1 mes entero 🤭"}
          </Typography>
        )}
      </Contenedor>
      <Footer/>
    </>
  );
}
