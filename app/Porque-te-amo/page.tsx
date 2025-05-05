"use client";
import { List, Typography, ListItem, ListItemText, Paper } from "@mui/material";
import { styled } from "@mui/system";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

// Estilos personalizados con tintes de Hello Kitty 
const Contenedor = styled(Paper)({
  padding: "2rem",
  background: "linear-gradient(to bottom, #ffd1dc, #fff)",
  borderRadius: "20px",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
});

const Titulo = styled(Typography)({
  fontFamily: "'Pacifico', cursive",
  color: "#ff4081",
  textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
});

const ListaPersonalizada = styled(List)({
  padding: "1rem",
});

const ItemLista = styled(ListItem)({
  backgroundColor: "rgba(255, 192, 203, 0.3)",
  borderRadius: "10px",
  margin: "0.5rem 0",
  transition: "transform 0.2s ease, background 0.3s ease",
  "&:hover": {
    backgroundColor: "#ff80ab",
    transform: "scale(1.05)",
  },
});

export default function Juego() {
  return (
    <Contenedor elevation={3}>
    <Header/>
      <Titulo variant="h2">10 razones por las que te amo 💖</Titulo>
      <ListaPersonalizada>
        {[
          "Sos tan hermosa por dentro y por fuera que no me creo lo perfecta que sos",
          "Tu compañerismo y amabilidad",
          "Tus gestos de amor hasta en el más mínimo detalle",
          "Crees en mí como nadie",
          "Sos demasiado buena para este mundo",
          "Tus cachetitos que me los morfo a besos",
          "A pesar de las adversidades, siempre ves el vaso medio lleno",
          "Cualquier plan es hermoso con vos",
          "Me hacés aprender todos los días (no sé doblar ni una remera 😂)",
          "Sos perfecta",
        ].map((razon, index) => (
          <ItemLista key={index}>
            <ListItemText primary={razon} />
          </ItemLista>
        ))}
      </ListaPersonalizada>
      <Footer/>
    </Contenedor>
  );
}
