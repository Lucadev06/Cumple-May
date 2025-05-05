"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {  Typography, Paper } from "@mui/material";
import { styled } from "@mui/system";


const Contenedor = styled(Paper)({
  padding: "2rem",
  backgroundColor: "#ffe4e1", 
  borderRadius: "20px",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
  width: "90%",
  maxWidth: "600px",
  margin: "auto",
});

const Carta = styled(Typography)({
  fontFamily: "'Dancing Script', cursive", 
  fontSize: "1.2rem",
  fontStyle: "italic",
  color: "#ff69b4", 
  textAlign: "justify",
});

export default function Juego() {
  return (
    <>
    <Contenedor elevation={3}>
        <Header/>
      <Typography variant="h4" sx={{ fontFamily: "'Pacifico', cursive", color: "#ff4081", mb: 2 }}>
        🎀 Para el Amor de Mi Vida 🎀
      </Typography>

      <Carta>
        Mi amorcito hermoso,  
        <br />
        Hoy es un día muy especial, y quiero recordarte lo increíble que sos y lo muchooooooo que te amoo.  
        Feliz cumpleaños, amor de mi vida. 
        <br /><br />
        Sos lo más lindo que tengo y voy a tener jamás. Mi compañerita de vida, ojala sea para siempre.  
        Te amo muchísimo, mi amor. Siempre voy a estar para vos, para darte un abrazo de oso y muchos besoss. 
        <br /><br />
        No dudes nunca de lo muchísimo que te amo y admiro. Sos un ser de luz, fuerte, inteligente, amable y simplemente perfecta. ✨  
        Nos esperan muchas cosas hermosas por vivir juntos, tanto como pareja como en la vida.  
        <br /><br />
        Ojalá disfrutes este día y lo pases hermoso, porque te lo merecés y te lo deseo con todo mi corazón.  
        Con todo mi amor,  
        <br />
            Tu tierno osito 🐻💖
      </Carta>
      
    </Contenedor>
    <Footer/>
   </>
  );
}
