// src/Pages/OurService.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const OurService = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#262f69', // Background color
        color: '#fff', // Text color
        textAlign: 'center', // Center align text
        py: 8, // Padding on y-axis (top and bottom)
      }}
    >
      <Container>
        <Typography variant="h3" component="h1" gutterBottom>
          OUR SERVICE
        </Typography>
        <Typography
          variant="body1"
          sx={{
            maxWidth: '1000px', // Control the width for better line control
            mx: 'auto',
            lineHeight: 1.6, // Adjust line height for better readability
          }}
        >
          Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document <br /> or a typeface without relying on meaningful content. Lorem ipsum may be used.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: 4, // Margin top for spacing
          }}
        >
          <img
            src="Image (2).png"
            alt="Our Service"
            style={{
              maxWidth: '20%', // Decreased size
              height: 'auto',
              zIndex: 1,
              margin: '0 10px', // Add margin to the left and right
            }}
          />
          <img
            src="Image (1).png"
            alt="Our Service"
            style={{
              maxWidth: '20%', // Decreased size
              height: 'auto',
              zIndex: 1,
              margin: '0 10px', // Add margin to the left and right
            }}
          />
          <img
            src="Image (3).png"
            alt="Our Service"
            style={{
              maxWidth: '20%', // Decreased size
              height: 'auto',
              zIndex: 1,
              margin: '0 10px', // Add margin to the left and right
            }}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: 4, // Margin top for spacing
          }}
        >
          <img
            src="Image (4).png"
            alt="Our Service"
            style={{
              maxWidth: '20%', // Decreased size
              height: 'auto',
              zIndex: 1,
              margin: '0 10px', // Add margin to the left and right
            }}
          />
          <img
            src="Image (5).png"
            alt="Our Service"
            style={{
              maxWidth: '20%', // Decreased size
              height: 'auto',
              zIndex: 1,
              margin: '0 10px', // Add margin to the left and right
            }}
          />
          <img
            src="Image (6).png"
            alt="Our Service"
            style={{
              maxWidth: '20%', // Decreased size
              height: 'auto',
              zIndex: 1,
              margin: '0 10px', // Add margin to the left and right
            }}
          />
        </Box>
        
      </Container>
    </Box>
  );
};

export default OurService;
