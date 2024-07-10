import React from "react";
import { Box, Container, Grid, Typography, Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import EmailIcon from "@mui/icons-material/Email";

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: "#262f69", py: 6 }}>
      <Container
    // Margin added on left and right
      >
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}> {/* Decreased spacing between columns */}
          <div style={{width:'25%'}}> 
            <Box>
              <img
                src="logo-01 copy 1.png"
                alt="Rapid Services"
                style={{ marginBottom: 16 }}
              />
              <Typography sx={{ color: "#ffffff" }}>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </Typography>
              <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
                <Link
                  href="#"
                  color="inherit"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "40px",
                    height: "40px",
                    border: "1px solid #ffffff",
                    borderRadius: "50%",
                  }}
                >
                  <FacebookIcon sx={{ color: "#ffffff" }} />
                </Link>
                <Link
                  href="#"
                  color="inherit"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "40px",
                    height: "40px",
                    border: "1px solid #ffffff",
                    borderRadius: "50%",
                  }}
                >
                  <LinkedInIcon sx={{ color: "#ffffff" }} />
                </Link>
                <Link
                  href="#"
                  color="inherit"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "40px",
                    height: "40px",
                    border: "1px solid #ffffff",
                    borderRadius: "50%",
                  }}
                >
                  <InstagramIcon sx={{ color: "#ffffff" }} />
                </Link>
              </Box>
            </Box>
          </div>
          <div style={{width:'20%'}}>
            <Typography variant="h6" sx={{ color: "#ffffff", mb: 2 }}>
              Quick Links
            </Typography>
            <Link
              href="#"
              color="inherit"
              sx={{
                display: "block",
                mb: 1,
                color: "#ffffff",
                textDecoration: "none",
              }}
            >
              About us
            </Link>
            <Link
              href="#"
              color="inherit"
              sx={{
                display: "block",
                mb: 1,
                color: "#ffffff",
                textDecoration: "none",
              }}
            >
              Services
            </Link>
            <Link
              href="#"
              color="inherit"
              sx={{
                display: "block",
                mb: 1,
                color: "#ffffff",
                textDecoration: "none",
              }}
            >
              Private Policy
            </Link>
            <Link
              href="#"
              color="inherit"
              sx={{
                display: "block",
                mb: 1,
                color: "#ffffff",
                textDecoration: "none",
              }}
            >
              News & Articles
            </Link>
          </div>
          <div style={{width:'20%'}}>
            <Typography variant="h6" sx={{ color: "#ffffff", mb: 2 }}>
              Course Category
            </Typography>
            <Link
              href="#"
              color="inherit"
              sx={{
                display: "block",
                mb: 1,
                color: "#ffffff",
                textDecoration: "none",
              }}
            >
              Fire Safety
            </Link>
            <Link
              href="#"
              color="inherit"
              sx={{
                display: "block",
                mb: 1,
                color: "#ffffff",
                textDecoration: "none",
              }}
            >
              Security
            </Link>
            <Link
              href="#"
              color="inherit"
              sx={{
                display: "block",
                mb: 1,
                color: "#ffffff",
                textDecoration: "none",
              }}
            >
              Health and Safety
            </Link>
            <Link
              href="#"
              color="inherit"
              sx={{
                display: "block",
                mb: 1,
                color: "#ffffff",
                textDecoration: "none",
              }}
            >
              Education
            </Link>
          </div>
          <div style={{width:'25%'}}>
            <Typography variant="h6" sx={{ color: "#ffffff", mb: 2 }}>
              Contact Us
            </Typography>
            <Typography
              sx={{
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                mb: 1,
              }}
            >
              <LocationOnIcon sx={{ marginRight: 1 }} />
              Office 30, 806 High Road Leyton London E10 6AE United Kingdom
            </Typography>
            <Typography
              sx={{
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                mb: 1,
              }}
            >
              <PhoneIcon sx={{ marginRight: 1 }} />
              0330 043 5190
            </Typography>
            <Typography
              sx={{
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                mb: 1,
              }}
            >
              <SmartphoneIcon sx={{ marginRight: 1 }} />
              07506097207
            </Typography>
            <Typography
              sx={{ color: "#ffffff", display: "flex", alignItems: "center" }}
            >
              <EmailIcon sx={{ marginRight: 1 }} />
              contact@rapidservicesolutions.co.uk
            </Typography>
          </div>
        </div>
        <Grid sx={{display:'flex', justifyContent:'space-between'
        }}>
        <Box
          sx={{
            borderTop: "1px solid yellow",
            width:'100%',
            mt: 3,
            pt: 3,
            display: "flex",
            // backgroundColor:'blue',
            
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ color: "#ffffff" }}>
            Copyright © 2024 Rapid Service. All rights reserved.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "right", mt: 0 }}>
            <Link href="#" color="inherit" sx={{ mx: 1, color: "#ffffff" }}>
              Private Policy
            </Link>
            <Link href="#" color="inherit" sx={{ mx: 1, color: "#ffffff" }}>
              Support
            </Link>
            <Link href="#" color="inherit" sx={{ mx: 1, color: "#ffffff" }}>
              Terms & Conditions
            </Link>
          </Box>
        </Box>
        </Grid>
      </Container>
    </Box>
  );
}
