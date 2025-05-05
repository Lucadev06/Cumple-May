"use client";

import { useState, useEffect } from "react";
import { Box, Drawer, IconButton, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; 

  return (
    <Box
      sx={{
        width: "100%",
        height: "55vh",
        backgroundImage: "url('/foto-header.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        position: "relative",
      }}
    >
      {/* Botón para abrir el menú */}
      <IconButton
        onClick={() => setOpen(true)}
        sx={{
          position: "absolute",
          top: 20,
          left: 20,
          backgroundColor: "violet",
          color: "white",
          "&:hover": { backgroundColor: "purple" },
        }}
      >
        <MenuIcon />
      </IconButton>

      {/* Drawer - Menú lateral */}
      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            width: "40%",
            backgroundColor: "#fff",
            padding: 2,
          },
        }}
      >
        <Box sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 2 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Image src="/logo.png" alt="Logo" width={100} height={100} />
            <IconButton onClick={() => setOpen(false)} sx={{ color: "black" }}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Menú de navegación */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mt: 2 }}>
            {[
              { name: "Home", path: "/" },
              { name: "¿Xq te amo?", path: "/Porque-te-amo" },
              { name: "Galería", path: "/Galeria" },
              { name: "Juego", path: "/juego" },
              { name: "Cartita", path: "/cartita" },
            ].map((item) => (
              <Link key={item.path} href={item.path} passHref>
                <Button
                  variant="text"
                  sx={{
                    color: "black",
                    fontSize: "1rem",
                    textTransform: "none",
                    width: "100%",
                    justifyContent: "flex-start",
                  }}
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}
