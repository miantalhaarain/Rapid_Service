// src/Pages/OurService.js
import React, { useState } from 'react';
import { Container, Typography, Box, Button } from '@mui/material';

const OurService = () => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

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
            position: 'relative',
          }}
        >
          <Box
            sx={{
              position: 'relative',
              maxWidth: '20%',
              margin: '0 10px',
              '&:hover .overlay': {
                opacity: 1,
              },
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src="Image (2).png"
              alt="Our Service"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                borderRadius: '8px', // Add border radius to the image
              }}
            />
            {hover && (
              <Box
                className="overlay"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: '#000',
                  opacity: 0,
                  transition: 'opacity 0.3s',
                  padding: 2,
                  textAlign: 'center',
                  borderRadius: '8px', // Add border radius to the overlay
                }}
              >
                <Typography variant="h6" gutterBottom sx={{ color: '#d32f2f', fontWeight: 'bold',fontSize: '0.89rem' }}>
                  SECURITY GUARDING
                </Typography>
                <Typography variant="body2" gutterBottom sx={{ fontSize: '0.69rem' }}>
                  Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface commonly used to do a demonstrate the visual form of a document or a typeface.
                </Typography>
                <Button variant="contained" sx={{ mt: 2, backgroundColor: '#262f69' }}>
                  Learn More
                </Button>
              </Box>
            )}
          </Box>
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
