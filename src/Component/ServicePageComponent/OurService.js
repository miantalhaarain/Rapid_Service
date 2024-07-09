


// // src/Pages/OurService.js
// import React, { useState } from 'react';
// import { Container, Typography, Box, Button } from '@mui/material';

// const OurService = () => {
//   const [hover, setHover] = useState(false);

//   const handleMouseEnter = () => {
//     setHover(true);
//   };

//   const handleMouseLeave = () => {
//     setHover(false);
//   };

//   return (
//     <Box
//       sx={{
//         backgroundColor: '#262f69', // Background color
//         color: '#fff', // Text color
//         textAlign: 'center', // Center align text
//         py: 8, // Padding on y-axis (top and bottom)
//       }}
//     >
//       <Container>
//         <Typography variant="h3" component="h1" gutterBottom>
//           OUR SERVICE
//         </Typography>
//         <Typography
//           variant="body1"
//           sx={{
//             maxWidth: '1000px', // Control the width for better line control
//             mx: 'auto',
//             lineHeight: 1.6, // Adjust line height for better readability
//           }}
//         >
//           Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document <br /> or a typeface without relying on meaningful content. Lorem ipsum may be used.
//         </Typography>
//         <Box
//           sx={{
//             display: 'flex',
//             justifyContent: 'center',
//             mt: 4, // Margin top for spacing
//             position: 'relative',
//           }}
//         >
//           <Box
//             sx={{
//               position: 'relative',
//               margin: '0 10px',
//               '&:hover .overlay': {
//                 opacity: 1,
//               },
//             }}
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//           >
//             <img
//               src="Image (2).png"
//               alt="Our Service"
//               style={{
//                 height: 'auto',
//                 display: 'block',
//                 borderRadius: '8px', // Add border radius to the image
//               }}
//             />
//             {hover && (
//               <Box
//                 className="overlay"
//                 sx={{
//                   position: 'absolute',
//                   top: '50%',
//                   left: '50%',
//                   transform: 'translate(-50%, -50%)',
//                   width: '80%',
//                   height: '80%',
//                   backgroundColor: 'rgba(255, 255, 255, 0.7)',
//                   display: 'flex',
//                   flexDirection: 'column',
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   color: '#000',
//                   opacity: 0,
//                   transition: 'opacity 0.3s',
//                   padding: 2,
//                   textAlign: 'center',
//                   borderRadius: '8px', // Add border radius to the overlay
//                 }}
//               >
//                 <Typography variant="h6" gutterBottom sx={{ color: '#d32f2f', fontWeight: 'bold' }}>
//                   SECURITY GUARDING
//                 </Typography>
//                 <Typography variant="body2" gutterBottom sx={{ fontSize: '0.89rem' }}>
//                   Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface commonly used to do a demonstrate the visual form of a document or a typeface.
//                 </Typography>
//                 <Button variant="contained" sx={{ mt: 2, backgroundColor: '#262f69' }}>
//                   Learn More
//                 </Button>
//               </Box>
//             )}
//           </Box>
//           <img
//             src="Image (1).png"
//             alt="Our Service"
//             style={{
//               maxWidth: '33%', // Decreased size
//               height: 'auto',
//               zIndex: 1,
//               margin: '0 10px', // Add margin to the left and right
//             }}
//           />
//           <img
//             src="Image (3).png"
//             alt="Our Service"
//             style={{
//               maxWidth: '33%', // Decreased size
//               height: 'auto',
//               zIndex: 1,
//               margin: '0 10px', // Add margin to the left and right
//             }}
//           />
//         </Box>
//         <Box
//           sx={{
//             display: 'flex',
//             justifyContent: 'center',
//             mt: 4, // Margin top for spacing
//           }}
//         >
//           <img
//             src="Image (4).png"
//             alt="Our Service"
//             style={{
//               maxWidth: '33%', // Decreased size
//               height: 'auto',
//               zIndex: 1,
//               margin: '0 10px', // Add margin to the left and right
//             }}
//           />
//           <img
//             src="Image (5).png"
//             alt="Our Service"
//             style={{
//               maxWidth: '33%', // Decreased size
//               height: 'auto',
//               zIndex: 1,
//               margin: '0 10px', // Add margin to the left and right
//             }}
//           />
//           <img
//             src="Image (6).png"
//             alt="Our Service"
//             style={{
//               maxWidth: '33%', // Decreased size
//               height: 'auto',
//               zIndex: 1,
//               margin: '0 10px', // Add margin to the left and right
//             }}
//           />
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default OurService;



// src/Pages/OurService.js
import React, { useState } from 'react';
import { Container, Typography, Box, Button } from '@mui/material';

const OurService = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  const hoverContents = [
    {
      heading: 'SECURITY GUARDING',
      content: 'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface commonly used to do a demonstrate the visual form of a document or a typeface.',
      button: 'Learn More',
    },
    {
      heading: 'PATROLLING SERVICES',
      content: 'TLorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface commonly used to do a demonstrate the visual form of a document or a typeface.',
      button: 'Discover',
    },
    {
      heading: 'EVENT SECURITY',
      content: 'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface commonly used to do a demonstrate the visual form of a document or a typeface.',
      button: 'Explore',
    },
    {
      heading: 'ALARM RESPONSE',
      content: 'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface commonly used to do a demonstrate the visual form of a document or a typeface.',
      button: 'Find Out More',
    },
    {
      heading: 'CCTV MONITORING',
      content: 'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface commonly used to do a demonstrate the visual form of a document or a typeface.',
      button: 'Check It Out',
    },
    {
      heading: 'ACCESS CONTROL',
      content: 'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface commonly used to do a demonstrate the visual form of a document or a typeface.',
      button: 'See Details',
    },
  ];

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
          {['Image (2).png', 'Image (1).png', 'Image (3).png'].map((src, index) => (
            <Box
              key={index}
              sx={{
                position: 'relative',
                margin: '0 10px',
                '&:hover .overlay': {
                  opacity: 1,
                },
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={src}
                alt="Our Service"
                style={{
                  height: 'auto',
                  display: 'block',
                  borderRadius: '8px', // Add border radius to the image
                }}
              />
              {hoverIndex === index && (
                <Box
                  className="overlay"
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '80%',
                    height: '80%',
                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
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
                  <Typography variant="h6" gutterBottom sx={{ color: '#d32f2f', fontWeight: 'bold' }}>
                    {hoverContents[index].heading}
                  </Typography>
                  <Typography variant="body2" gutterBottom sx={{ fontSize: '0.89rem' }}>
                    {hoverContents[index].content}
                  </Typography>
                  <Button variant="contained" sx={{ mt: 2, backgroundColor: '#262f69' }}>
                    {hoverContents[index].button}
                  </Button>
                </Box>
              )}
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: 4, // Margin top for spacing
          }}
        >
          {['Image (4).png', 'Image (5).png', 'Image (6).png'].map((src, index) => (
            <Box
              key={index + 3}
              sx={{
                position: 'relative',
                margin: '0 10px',
                '&:hover .overlay': {
                  opacity: 1,
                },
              }}
              onMouseEnter={() => handleMouseEnter(index + 3)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={src}
                alt="Our Service"
                style={{
                  height: 'auto',
                  display: 'block',
                  borderRadius: '8px', // Add border radius to the image
                }}
              />
              {hoverIndex === index + 3 && (
                <Box
                  className="overlay"
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '80%',
                    height: '80%',
                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
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
                  <Typography variant="h6" gutterBottom sx={{ color: '#d32f2f', fontWeight: 'bold' }}>
                    {hoverContents[index + 3].heading}
                  </Typography>
                  <Typography variant="body2" gutterBottom sx={{ fontSize: '0.89rem' }}>
                    {hoverContents[index + 3].content}
                  </Typography>
                  <Button variant="contained" sx={{ mt: 2, backgroundColor: '#262f69' }}>
                    {hoverContents[index + 3].button}
                  </Button>
                </Box>
              )}
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default OurService;
