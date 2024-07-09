
// import React, { useRef } from "react";
// import {
//   Box,
//   Container,
//   Card,
//   CardContent,
//   CardMedia,
//   Typography,
//   IconButton,
// } from "@mui/material";
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// const ScrollSection = () => {
//   const scrollRef = useRef(null);

//   const scrollLeft = () => {
//     scrollRef.current.scrollBy({
//       left: -300,
//       behavior: 'smooth'
//     });
//   };

//   const scrollRight = () => {
//     scrollRef.current.scrollBy({
//       left: 300,
//       behavior: 'smooth'
//     });
//   };

//   const cards = [
//     {
//       title: "Corporate Establishment",
//       description:
//         "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a",
//       image: "Rectangle 4321.png",
//     },
//     {
//         title: "Corporate Establishment",
//         description:
//           "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a",
//         image: "Rectangle 4321.png",
//     },
//     {
//         title: "Corporate Establishment",
//         description:
//           "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a",
//         image: "Rectangle 4321.png",
//     },
//     {
//         title: "Corporate Establishment",
//         description:
//           "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a",
//         image: "Rectangle 4321.png",
//     },
//     {
//         title: "Corporate Establishment",
//         description:
//           "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a",
//         image: "Rectangle 4321.png",
//     },
//     {
//         title: "Corporate Establishment",
//         description:
//           "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a",
//         image: "Rectangle 4321.png",
//     },
//     {
//         title: "Corporate Establishment",
//         description:
//           "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a",
//         image: "Rectangle 4321.png",
//     },
//   ];

//   return (
//     <div>
//       <Box display="flex" flexDirection="column" alignItems="center" mb={4}>
//         <Typography variant="h5" component="div" gutterBottom sx={{ fontWeight: 'bold', mt: 4 }}>
//           SECTORS WE SERVE
//         </Typography>
//         <Typography variant="body1" color="textSecondary" textAlign="center" sx={{ maxWidth: '650px', mb: 4 }}>
//           Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used
//         </Typography>
//       </Box>

//       <Container>
//         <Box display="flex" alignItems="center">
//           <IconButton onClick={scrollLeft}>
//             <ArrowBackIosIcon />
//           </IconButton>
//           <Box
//             ref={scrollRef}
//             display="flex"
//             overflow="hidden"
//             sx={{
//               scrollbarWidth: 'none', // For Firefox
//               '&::-webkit-scrollbar': { display: 'none' }, // For Chrome, Safari, and Opera
//             }}
//           >
//             {cards.map((card, index) => (
//               <Box key={index} flexShrink={0} p={2} sx={{ width: '300px' }}>
//                 <Card
//                   sx={{
//                     maxWidth: 345,
//                     height: 450,
//                     position: "relative",
//                     overflow: "hidden",
//                     background: "linear-gradient(to bottom, #f7f8fa, #ffffff)",
//                     "&:hover .card-media": {
//                       clipPath: "none",
//                       height: "60%",
//                       width: "100%",
//                       top: "40%",
//                       transform: "translateY(-50%)",
//                     },
//                   }}
//                 >
//                   <Box sx={{ position: "relative", height: "100%" }}>
//                     <CardMedia
//                       component="img"
//                       className="card-media"
//                       sx={{
//                         height: "33%",
//                         width: "100%",
//                         objectFit: "cover",
//                         position: "absolute",
//                         top: "50%",
//                         transform: "translateY(-50%)",
//                         clipPath: "polygon(0 10%, 100% 0, 100% 90%, 0% 100%)",
//                         transition: "all 0.5s ease-in-out",
//                       }}
//                       image={card.image}
//                       alt={card.title}
//                     />
//                   </Box>
//                   <CardContent
//                     sx={{
//                       position: "relative",
//                       zIndex: 1,
//                       background: "rgba(255, 255, 255, 0.8)",
//                       height: "calc(0% - 0px)",
//                       display: "flex",
//                       flexDirection: "column",
//                       justifyContent: "flex-end",
//                       alignItems: "center", // Center-aligns the content horizontally
//                       textAlign: "center", // Center-aligns the text
//                       p: 2,
//                       boxSizing: "border-box",
//                       overflowY: "visible",
//                     }}
//                   >
//                     <Typography
//                       gutterBottom
//                       variant="h6"
//                       component="div"
//                       sx={{ color: "#262f69", fontWeight: 'bold' }}
//                     >
//                       {card.title}
//                     </Typography>
//                     <Typography variant="body2" color="text.primary">
//                       {card.description}
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </Box>
//             ))}
//           </Box>
//           <IconButton onClick={scrollRight}>
//             <ArrowForwardIosIcon />
//           </IconButton>
//         </Box>
//       </Container>
//     </div>
//   );
// };

// export default ScrollSection;



import React, { useRef } from "react";
import {
  Box,
  Container,
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
} from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const ScrollSection = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -300,
      behavior: 'smooth'
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 300,
      behavior: 'smooth'
    });
  };

  const cards = [
    {
      title: "Corporate Establishment",
      description:
        "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a",
      image: "Rectangle 4321.png",
    },
    {
      title: "Corporate Establishment",
      description:
        "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a",
      image: "Rectangle 4321.png",
    },
    {
      title: "Corporate Establishment",
      description:
        "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a",
      image: "Rectangle 4321.png",
    },
    {
      title: "Corporate Establishment",
      description:
        "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a",
      image: "Rectangle 4321.png",
    },
    {
      title: "Corporate Establishment",
      description:
        "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a",
      image: "Rectangle 4321.png",
    },
    {
      title: "Corporate Establishment",
      description:
        "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a",
      image: "Rectangle 4321.png",
    },
    {
      title: "Corporate Establishment",
      description:
        "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a",
      image: "Rectangle 4321.png",
    },
  ];

  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center" mb={4}>
        <Typography variant="h5" component="div" gutterBottom sx={{ fontWeight: 'bold', mt: 4 }}>
          SECTORS WE SERVE
        </Typography>
        <Typography variant="body1" color="textSecondary" textAlign="center" sx={{ maxWidth: '650px', mb: 4 }}>
          Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used
        </Typography>
      </Box>

      <Container>
        <Box display="flex" alignItems="center">
          <IconButton onClick={scrollLeft} sx={{ backgroundColor: 'white', border: '1px solid #ccc', borderRadius: '50%', padding: '10px' }}>
            <ArrowBackIosIcon sx={{ color: '#000' }} />
          </IconButton>
          <Box
            ref={scrollRef}
            display="flex"
            overflow="hidden"
            sx={{
              scrollbarWidth: 'none', // For Firefox
              '&::-webkit-scrollbar': { display: 'none' }, // For Chrome, Safari, and Opera
              mx: 2, // Adding margin on both sides of the cards container
            }}
          >
            {cards.map((card, index) => (
              <Box key={index} flexShrink={0} p={2} sx={{ width: '300px', mb: 2 }}>
                <Card
                  sx={{
                    maxWidth: 345,
                    height: 450,
                    position: "relative",
                    overflow: "hidden",
                    background: "linear-gradient(to bottom, #f7f8fa, #ffffff)",
                    "&:hover .card-media": {
                      clipPath: "none",
                      height: "60%",
                      width: "100%",
                      top: "40%",
                      transform: "translateY(-50%)",
                    },
                  }}
                >
                  <Box sx={{ position: "relative", height: "100%" }}>
                    <CardMedia
                      component="img"
                      className="card-media"
                      sx={{
                        height: "33%",
                        width: "100%",
                        objectFit: "cover",
                        position: "absolute",
                        top: "50%",
                        transform: "translateY(-50%)",
                        clipPath: "polygon(0 10%, 100% 0, 100% 90%, 0% 100%)",
                        transition: "all 0.5s ease-in-out",
                      }}
                      image={card.image}
                      alt={card.title}
                    />
                  </Box>
                  <CardContent
                    sx={{
                      position: "relative",
                      zIndex: 1,
                      background: "rgba(255, 255, 255, 0.8)",
                      height: "calc(0% - 0px)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      alignItems: "center", // Center-aligns the content horizontally
                      textAlign: "center", // Center-aligns the text
                      p: 2,
                      boxSizing: "border-box",
                      overflowY: "visible",
                    }}
                  >
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      sx={{ color: "#262f69", fontWeight: 'bold' }}
                    >
                      {card.title}
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                      {card.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
          <IconButton onClick={scrollRight} sx={{ backgroundColor: 'white', border: '1px solid #ccc', borderRadius: '50%', padding: '10px' }}>
            <ArrowForwardIosIcon sx={{ color: '#000' }} />
          </IconButton>
        </Box>
      </Container>
    </div>
  );
};

export default ScrollSection;
