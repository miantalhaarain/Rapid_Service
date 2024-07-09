import React from "react";
// import Navbar from "./Navbar"; // Make sure to import your Navbar component
import { useState } from "react";
import Footer from "../Component/HomePageComponent/Footer";
import {
  Typography,
  Box,
  Container,
  Grid,
  Button,
  Card,
  CardContent,
} from "@mui/material";

export default function FeaturedSection() {
  const [showFireSafetyImages, setShowFireSafetyImages] = useState(true);

  const handleFireSafetyClick = () => {
    setShowFireSafetyImages(true);
  };

  const serviceData = [
    {
      title: "Security Guarding",
      description:
        "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used.",
    },
    {
      title: "Lockup Services",
      description:
        "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used.",
    },
    {
      title: "Manned Security",
      description:
        "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used",
    },
    {
      title: "Security Training",
      description:
        "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used",
    },
    {
      title: "Door Supervisors",
      description:
        "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used",
    },
    {
      title: "Cleaning Services",
      description:
        "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used",
    },
  ];

  const iconMapping = {
    "Security Guarding": "span.png",
    "Lockup Services": "span (1).png",
    "Manned Security": "span (2).png",
    "Security Training": "span (3).png",
    "Door Supervisors": "span (4).png",
    "Cleaning Services": "span (5).png",
  };

  return (
    <>
      {/* <Navbar /> Include the Navbar component */}
      <Box
      sx={{
        position: "relative",
        backgroundImage: "url('Image.png')",
        height: { xs: "auto", md: 600 },
        backgroundColor: "#262f69",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        px: { xs: 4, md: 5, lg: 7 },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={12} md={6}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "34px", sm: "40px", lg: "51px" },
                lineHeight: "64px",
                letterSpacing: "-0.5px",
                fontWeight: "bold",
                color: "#ffffff",
              }}
            >
              <span className="text-white">
                Build Your Skills,
                <br />
                Get Certified
              </span>
              <br />
              <span style={{ color: "#ea4643" }}>Launch Your Career</span>
            </Typography>
            <Typography
  variant="body1"
  sx={{
    fontSize: { lg: "15px" },
    lineHeight: "26px",
    letterSpacing: "-0.5px",
    color: "#ffffff",
    mt: 2,
    maxWidth: "60%",
  }}
  paragraph // This tells Material-UI that this Typography component is meant to be used as a paragraph
>
  Lorem ipsum is a placeholder text commonly used to demonstrate
  the visual form of a document or a typeface without relying on
  meaningful content.
</Typography>
            <Box mt={3} display="flex" flexDirection="column" gap={0.5}>
              <Box display="flex" alignItems="center" gap={2.5}>
                <img
                  src="Icon.png"
                  alt="checkmark icon"
                  className="icon"
                  style={{
                    width: "16px",
                    height: "16px",
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { lg: "15px" },
                    color: "#ffffff",
                  }}
                >
                  Find the best qualified teacher for you
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={2.5}>
                <img
                  src="Icon.png"
                  alt="checkmark icon"
                  className="icon"
                  style={{
                    width: "16px",
                    height: "16px",
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { lg: "15px" },
                    color: "#ffffff",
                  }}
                >
                  Transform access to education
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ mt: 12.5, mb: 6  }}> {/* Margin left for the image box only */}
              <img
                src="4copy1.png"
                alt="feature image"
                style={{
                  width: "76%",
                  height: "550px",
                  objectFit: "cover",
                  borderBottomLeftRadius: "8px",
                  borderBottomRightRadius: "8px",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          py: 8,
          backgroundColor: "#ffffff",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "28px", sm: "32px", lg: "36px" },
            fontWeight: "700",
            color: "#262f69",
            mb: 2,
          }}
        >
          EXPLORE COURSES
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "14px", sm: "16px", lg: "18px" },
            lineHeight: "24px",
            color: "#666666",
            textAlign: "center",
            maxWidth: "800px",
            px: { xs: 3, sm: 5 },
          }}
        >
          Lorem ipsum is a placeholder text commonly used to demonstrate the
          visual form of a 
          document <br />or a typeface without relying on meaningful content. Lorem
          ipsum may be used.
        </Typography>
      </Box>

      <Container sx={{ mt: -5,ml:7}}>
        <Box
          sx={{
            backgroundColor: "#f5f5f5",
            borderRadius: "8px",
            p: 2,
            display: "flex",
            maxWidth: "100%",
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Button
            variant="text"
            sx={{
              color: "#262f69",
              textTransform: "none",
              fontWeight: "bold",
              
              backgroundColor: showFireSafetyImages ? "#e0e0e0" : "transparent",
              ":hover": {
                backgroundColor: "#e0e0e0",
              },
              m: 1,
            }}
            onClick={handleFireSafetyClick}
          >
            Fire Safety
          </Button>
          <Button
            variant="text"
            sx={{
              color: "#262f69",
              textTransform: "none",
              fontWeight: "bold",
              ":hover": {
                backgroundColor: "#e0e0e0",
              },
              m: 1,
            }}
          >
            Security
          </Button>
          <Button
            variant="text"
            sx={{
              color: "#262f69",
              textTransform: "none",
              fontWeight: "bold",
              ":hover": {
                backgroundColor: "#e0e0e0",
              },
              m: 1,
            }}
          >
            Health and Safety
          </Button>
          <Button
            variant="text"
            sx={{
              color: "#262f69",
              textTransform: "none",
              fontWeight: "bold",
              ":hover": {
                backgroundColor: "#e0e0e0",
              },
              m: 1,
            }}
          >
            Education
          </Button>
        </Box>
      </Container>

      {showFireSafetyImages && (
        <Container sx={{ mt: 4 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} sx={{ position: "relative" }}>
              <img
                src="Background.png"
                alt="Fire Warden"
                style={{ width: "100%", borderRadius: "8px" }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: 26,
                  left: 40,
                  display: "flex",
                  gap: 0,
                  zIndex: 1,
                  width: "45%",
                  maxHeight: "500px",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#ea4643",
                    color: "#ffffff",
                    textTransform: "none",
                    fontWeight: "bold",
                  }}
                >
                  <img
                    src="Link.png"
                    alt="Book Now"
                    style={{ marginRight: 8 }}
                  />
                  {/* Book Now */}
                </Button>
                <Button
                  variant="text"
                  sx={{
                    color: "#ffffff",
                    textTransform: "none",
                    backgroundColor: "#262f69",
                    fontWeight: "bold",
                  }}
                >
                  <img
                    src="Group 11145.png"
                    alt="View Details"
                    style={{ marginRight: 8 }}
                  />
                  {/* View Details */}
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} sx={{ position: "relative" }}>
              <img
                src="Background (1).png"
                alt="Fire Marshal"
                style={{ width: "100%", borderRadius: "8px" }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: 26,
                  left: 40,
                  display: "flex",
                  gap: 0,
                  zIndex: 1,
                  width: "45%",
                  maxHeight: "500px",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#ea4643",
                    color: "#ffffff",
                    textTransform: "none",
                    fontWeight: "bold",
                  }}
                >
                  <img
                    src="Link.png"
                    alt="Book Now"
                    style={{ marginRight: 8 }}
                  />
                  {/* Book Now */}
                </Button>
                <Button
                  variant="text"
                  sx={{
                    color: "#ffffff",
                    textTransform: "none",
                    backgroundColor: "#262f69",
                    fontWeight: "bold",
                  }}
                >
                  <img
                    src="Group 11145.png"
                    alt="View Details"
                    style={{ marginRight: 8 }}
                  />
                  {/* View Details */}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      )}

      <Box
        sx={{
          backgroundColor: "#262f69",
          py: 6,
          mt: 4,
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              backgroundColor: "#ffffff",
              borderRadius: "8px",
              p: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box display="flex" alignItems="center">
              <img
                src="banner-02 1.png"
                alt="Register"
                style={{ width: "80px", height: "100px", marginRight: "16px" }}
              />
              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    color: "#262f69",
                    mb: 1,
                  }}
                >
                  Register for our Courses in Easy Steps
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#666666",
                  }}
                >
                  Lorem ipsum is a placeholder text commonly used to demonstrate
                  the visual form
                </Typography>
              </Box>
            </Box>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#262f69",
                color: "#ffffff",
                textTransform: "none",
                fontWeight: "bold",
              }}
            >
              Learn More →
            </Button>
          </Box>
        </Container>
      </Box>

      <Box
        sx={{
          py: 6,
          mt: 4,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              backgroundColor: "#d9534f",
              borderRadius: "8px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: 3,
            }}
          >
            <Box
              sx={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}
            >
              <Box sx={{ flex: "1 1 0%", textAlign: "left" }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    color: "#ffffff",
                    mb: 1,
                    backgroundColor: "#d9534f",
                    p: 1,
                    borderRadius: "8px",
                  }}
                >
                  HOW TO GET AN SIA LICENSE
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#ffffff",
                    backgroundColor: "#d9534f",
                    p: 1,
                    borderRadius: "8px",
                  }}
                >
                  Unsure about the process? We'll help you understand how to get
                  your SIA licence with our detailed guide.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#262f69",
                    color: "#ffffff",
                    textTransform: "none",
                    fontWeight: "bold",
                    mt: 2,
                  }}
                >
                  Learn More →
                </Button>
              </Box>
              <Box sx={{ flex: "1 1 0%", textAlign: "right" }}>
                <img
                  src="DEP2012-0133-02 1.png"
                  alt="SIA License"
                  style={{ width: "80%", borderRadius: "8px" }}
                />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box
        sx={{
          backgroundColor: "#262f69",
          py: 6,
          mt: 4,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "#ffffff",
              mb: 3,
              textAlign: "center",
            }}
          >
            OUR SERVICES
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#ffffff",
              textAlign: "center",
              mb: 4,
            }}
          >
            Lorem ipsum is a placeholder text commonly used to demonstrate the
            visual form of a <br />
            document or a typeface without relying on meaningful content. Lorem
            ipsum may be used.
          </Typography>
          <Grid container spacing={3}>
            {serviceData.map((service, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card sx={{ backgroundColor: "#ffffff", borderRadius: "8px" }}>
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "left",
                        mb: 2,
                      }}
                    >
                      <img
                        src={iconMapping[service.title]}
                        alt={service.title}
                        style={{
                          width: "40px",
                          height: "40px",
                          marginBottom: "8px",
                        }}
                      />
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: "bold",
                          color: "#d9534f",
                          textAlign: "left",
                        }}
                      >
                        {service.title}
                      </Typography>
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#666666",
                        mb: 2,
                      }}
                    >
                      {service.description}
                    </Typography>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#262f69",
                        color: "#ffffff",
                        textTransform: "none",
                        fontWeight: "bold",
                      }}
                    >
                      Learn more →
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box
        sx={{
          backgroundColor: "#d9534f",
          py: 6,
          mt: 0,
        }}
      >
        <Container maxWidth="lg">
          <Grid container alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  color: "#ffffff",
                  mb: 3,
                }}
              >
                GET THE RAPID SERVICES APP
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#ffffff",
                  mb: 2,
                }}
              >
                Lorem ipsum is a placeholder text commonly used to demonstrate
                the visual form of a document or a typeface without meaningful
                content.
              </Typography>
              <img
                src="Layer_1.png"
                alt="Coming Soon"
                style={{ marginTop: 8, maxWidth: "20%", height: "auto" }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  mt: { xs: 4, md: 0 },
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src="Picture → download-gp-badges.webp.png"
                  alt="App preview"
                  style={{
                    width: "100%",
                    maxWidth: "400px",
                    objectFit: "contain",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
