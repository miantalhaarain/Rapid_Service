// src/Pages/Service.js
import React from "react";
import Footer from "../Component/HomePageComponent/Footer";
import OurService from "../Component/ServicePageComponent/OurService";
import ScrollSection from "../Component/ServicePageComponent/ScrollSection";

import {
  Container,
  Typography,
  Box,
  Grid,
} from "@mui/material";

const Service = () => {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          backgroundImage: 'url("Servicepage.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "500px", // Increased height to account for the gap
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          textAlign: "center",
          mt: 8, // Margin top to add a gap from the top of the page
          width: "100%",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "0px", // Gap from the top of the Box
            width: "100%",
            display: "flex",
            justifyContent: "center",
            zIndex: 2,
          }}
        >
          <img
            src="Rectangle 4302.png"
            alt="Overlay"
            style={{ width: "100%", height: "500px", opacity: 0.7 }}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
          }}
        ></Box>
        <Box sx={{ zIndex: 3 }}>
          <Typography variant="h3" component="h1" gutterBottom>
            Services
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: "800px", mx: "auto" }}>
            Lorem ipsum is a placeholder text commonly used to demonstrate the
            visual form of a document or a typeface without relying on
            meaningful content. Lorem ipsum may be used.
          </Typography>
        </Box>
      </Box>
      <Container sx={{ my: 4 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              component="h2"
              sx={{ fontWeight: "bold", mb: 2, mt: 4 }}
            >
              About services
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{
                fontSize: "15px",
                lineHeight: "1.6",
                mb: 2,
                color: "#000000",
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{
                fontSize: "15px",
                lineHeight: "1.6",
                color: "#000000",
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                width: "100%",
                height: "auto",
                position: "relative", // Added position relative to Box
                padding: "8px",
              }}
            >
              <img
                src="why choose us-01 1.png"
                alt="Security Personnel"
                style={{
                  width: "70%",
                  height: "70%",
                  borderRadius: "0px",
                  position: "relative",
                  zIndex: 2,
                  margin: "auto",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
      <OurService />
      <Box sx={{ mb: 7 }}> {/* Added Box with margin bottom */}
        <ScrollSection />
      </Box>
      <Footer />
    </>
  );
};

export default Service;
