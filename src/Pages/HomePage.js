// import React from "react";
// // import Navbar from "./Navbar"; // Make sure to import your Navbar component
// import { useState } from "react";
// // import FireWardenCard from "../Component/CardsHomepage/FireWardenCard";
// import Footer from "../Component/HomePageComponent/Footer";
// import {
//   Typography,
//   Box,
//   Container,
//   Grid,
//   Button,
//   Card,
//   CardContent,
//   CardMedia,
// } from "@mui/material";

// export default function FeaturedSection() {
//   // const [showFireSafetyImages, setShowFireSafetyImages] = useState(true);
//   // const [showFireWardenCard, setShowFireWardenCard] = useState(false);

//   const [activeButton, setActiveButton] = useState("");

//   // const handleFireSafetyClick = () => {
//   //   setShowFireSafetyImages(true);
//   // };
//   const handleButtonClick = (buttonName) => {
//     setActiveButton(buttonName);
//   };

//   const serviceData = [
//     {
//       title: "Security Guarding",
//       description:
//         "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used.",
//     },
//     {
//       title: "Lockup Services",
//       description:
//         "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used.",
//     },
//     {
//       title: "Manned Security",
//       description:
//         "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used",
//     },
//     {
//       title: "Security Training",
//       description:
//         "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used",
//     },
//     {
//       title: "Door Supervisors",
//       description:
//         "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used",
//     },
//     {
//       title: "Cleaning Services",
//       description:
//         "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used",
//     },
//   ];

//   const iconMapping = {
//     "Security Guarding": "span.png",
//     "Lockup Services": "span (1).png",
//     "Manned Security": "span (2).png",
//     "Security Training": "span (3).png",
//     "Door Supervisors": "span (4).png",
//     "Cleaning Services": "span (5).png",
//   };

//   return (
//     <>
//       {/* <Navbar /> Include the Navbar component */}
//       <Box
//         sx={{
//           position: "relative",
//           backgroundImage: "url('Image.png')",
//           height: { xs: "auto", md: 600 },
//           backgroundColor: "#262f69",
//           backgroundSize: "cover",
//           backgroundRepeat: "no-repeat",
//           display: "flex",
//           justifyContent: "center",
//           px: { xs: 4, md: 5, lg: 7 },
//         }}
//       >
//         <Container
//           maxWidth="lg"
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <Grid
//             container
//             spacing={2}
//             alignItems="center"
//             justifyContent="center"
//           >
//             <Grid item xs={12} md={6}>
//               <Typography
//                 variant="h1"
//                 sx={{
//                   fontSize: { xs: "34px", sm: "40px", lg: "51px" },
//                   lineHeight: "64px",
//                   letterSpacing: "-0.5px",
//                   fontWeight: "bold",
//                   color: "#ffffff",
//                 }}
//               >
//                 <span className="text-white">
//                   Build Your Skills,
//                   <br />
//                   Get Certified
//                 </span>
//                 <br />
//                 <span style={{ color: "#ea4643" }}>Launch Your Career</span>
//               </Typography>
//               <Typography
//                 variant="body1"
//                 sx={{
//                   fontSize: { lg: "15px" },
//                   lineHeight: "26px",
//                   letterSpacing: "-0.5px",
//                   color: "#ffffff",
//                   mt: 2,
//                   maxWidth: "60%",
//                 }}
//                 paragraph // This tells Material-UI that this Typography component is meant to be used as a paragraph
//               >
//                 Lorem ipsum is a placeholder text commonly used to demonstrate
//                 the visual form of a document or a typeface without relying on
//                 meaningful content.
//               </Typography>
//               <Box mt={3} display="flex" flexDirection="column" gap={0.5}>
//                 <Box display="flex" alignItems="center" gap={2.5}>
//                   <img
//                     src="Icon.png"
//                     alt="checkmark icon"
//                     className="icon"
//                     style={{
//                       width: "16px",
//                       height: "16px",
//                     }}
//                   />
//                   <Typography
//                     variant="body1"
//                     sx={{
//                       fontSize: { lg: "15px" },
//                       color: "#ffffff",
//                     }}
//                   >
//                     Find the best qualified teacher for you
//                   </Typography>
//                 </Box>
//                 <Box display="flex" alignItems="center" gap={2.5}>
//                   <img
//                     src="Icon.png"
//                     alt="checkmark icon"
//                     className="icon"
//                     style={{
//                       width: "16px",
//                       height: "16px",
//                     }}
//                   />
//                   <Typography
//                     variant="body1"
//                     sx={{
//                       fontSize: { lg: "15px" },
//                       color: "#ffffff",
//                     }}
//                   >
//                     Transform access to education
//                   </Typography>
//                 </Box>
//               </Box>
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <Box sx={{ mt: 12.5, mb: 6 }}>
//                 {" "}
//                 {/* Margin left for the image box only */}
//                 <img
//                   src="4copy1.png"
//                   alt="feature image"
//                   style={{
//                     width: "76%",
//                     height: "550px",
//                     objectFit: "cover",
//                     borderBottomLeftRadius: "8px",
//                     borderBottomRightRadius: "8px",
//                   }}
//                 />
//               </Box>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           py: 8,
//           backgroundColor: "#ffffff",
//         }}
//       >
//         <Typography
//           variant="h2"
//           sx={{
//             fontSize: { xs: "28px", sm: "32px", lg: "36px" },
//             fontWeight: "700",
//             color: "#262f69",
//             mb: 2,
//           }}
//         >
//           EXPLORE COURSES
//         </Typography>
//         <Typography
//           variant="body1"
//           sx={{
//             fontSize: { xs: "14px", sm: "16px", lg: "18px" },
//             lineHeight: "24px",
//             color: "#000000",
//             textAlign: "center",
//             maxWidth: "900px",
//             px: { xs: 3, sm: 5 },
//           }}
//         >
//           Lorem ipsum is a placeholder text commonly used to demonstrate the
//           visual form of a document or a typeface without relying on meaningful
//           content. Lorem ipsum may be used.
//         </Typography>
//       </Box>

//       {/* Buttons COde started here  */}
//       <Container sx={{ mt: -5, ml: 7 }}>
//         <Box
//           sx={{
//             backgroundColor: "#f5f5f5",
//             borderRadius: "8px",
//             p: 2,
//             display: "flex",
//             maxWidth: "93%",
//             justifyContent: "space-around",
//             alignItems: "center",
//             flexWrap: "wrap",
//           }}
//         >
//           {["Fire Safety", "Security", "Health and Safety", "Education"].map(
//             (buttonName) => (
//               <Button
//                 key={buttonName}
//                 variant="text"
//                 sx={{
//                   color: activeButton === buttonName ? "#ffffff" : "#262f69",
//                   textTransform: "none",
//                   fontWeight: "bold",
//                   backgroundColor:
//                     activeButton === buttonName ? "#262f69" : "transparent",
//                   ":hover": {
//                     backgroundColor: "#262f69",
//                     color: "#ffffff",
//                   },
//                   m: 1,
//                 }}
//                 onClick={() => handleButtonClick(buttonName)}
//               >
//                 {buttonName}
//               </Button>
//             )
//           )}
//         </Box>
//       </Container>

//       {/* fire saftey card code  */}

//       <Container
//   sx={{
//     mt: 2,
//     ml: 7,
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "left",
//     gap: "5px",
//     width: "100%",
//   }}
// >
//   <Card
//     sx={{
//       position: "relative",
//       width: "48%",
//       mb: 2,
//       bgcolor: "#262F69",
//       height: 250,
//     }}
//   >
//     <CardMedia
//       component="img"
//       height="250"
//       image="/Image (7).png"
//       alt="Fire Warden"
//     />
//     <Box
//       sx={{
//         position: "absolute",
//         top: 0,
//         right: 0,
//         width: "100%",
//         height: "100%",
//         backgroundImage: 'url("/Vector.png")',
//         backgroundSize: "contain",
//         backgroundRepeat: "no-repeat",
//         backgroundPosition: "right top",
//         mr: 20,
//       }}
//     />
//     <Box
//       sx={{
//         position: "absolute",
//         top: 0,
//         left: 0,
//         width: "100%",
//         height: "100%",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "space-between",
//       }}
//     >
//       <Typography variant="h6" sx={{ color: "white", m: 2, mt: 8, ml: 4 }}>
//         FIRE <br /> WARDEN
//       </Typography>
//       <Box sx={{ display: "flex", justifyContent: "flex-start", p: 1 }}>
//         <Button
//           sx={{
//             color: "white",
//             backgroundColor: "red",
//             "&:hover": { backgroundColor: "#ff3333" },
//             m: 1,
//             mb: 5,
//             width: 100,
//           }}
//         >
//           Book Now
//         </Button>
//         <Button sx={{ color: "white", m: 1, mb: 5 }}>View Details</Button>
//       </Box>
//     </Box>
//   </Card>
//   <Card
//     sx={{
//       position: "relative",
//       width: "48%",
//       mb: 2,
//       bgcolor: "#262F69",
//       height: 250,
//     }}
//   >
//     <CardMedia
//       component="img"
//       height="250"
//       image="/Image (8).png"
//       alt="Fire Marshal"
//     />
//     <Box
//       sx={{
//         position: "absolute",
//         top: 0,
//         right: 0,
//         width: "100%",
//         height: "100%",
//         backgroundImage: 'url("/Vector.png")',
//         backgroundSize: "contain",
//         backgroundRepeat: "no-repeat",
//         backgroundPosition: "right top",
//         mr: 20,
//       }}
//     />
//     <Box
//       sx={{
//         position: "absolute",
//         top: 0,
//         left: 0,
//         width: "100%",
//         height: "100%",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "space-between",
//       }}
//     >
//       <Typography variant="h6" sx={{ color: "white", m: 2, mt: 8, ml: 4 }}>
//         FIRE <br /> MARSHAL
//       </Typography>
//       <Box sx={{ display: "flex", justifyContent: "flex-start", p: 1 }}>
//         <Button
//           sx={{
//             color: "white",
//             backgroundColor: "red",
//             "&:hover": { backgroundColor: "#ff3333" },
//             m: 1,
//             mb: 5,
//             width: 100,
//           }}
//         >
//           Book Now
//         </Button>
//         <Button sx={{ color: "white", m: 1, mb: 5 }}>View Details</Button>
//       </Box>
//     </Box>
//   </Card>
// </Container>

// {/* Security Card Container  */}

// <Container
//   sx={{
//     mt: 2,
//     ml: 7,
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "left",
//     gap: "5px",
//     width: "100%",
//   }}
// >
//   <Card
//     sx={{
//       position: "relative",
//       width: "48%",
//       mb: 2,
//       bgcolor: "#262F69",
//       height: 250,
//     }}
//   >
//     <CardMedia
//       component="img"
//       height="250"
//       image="/Image (7).png"
//       alt="Fire Warden"
//     />
//     <Box
//       sx={{
//         position: "absolute",
//         top: 0,
//         right: 0,
//         width: "100%",
//         height: "100%",
//         backgroundImage: 'url("/Vector.png")',
//         backgroundSize: "contain",
//         backgroundRepeat: "no-repeat",
//         backgroundPosition: "right top",
//         mr: 20,
//       }}
//     />
//     <Box
//       sx={{
//         position: "absolute",
//         top: 0,
//         left: 0,
//         width: "100%",
//         height: "100%",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "space-between",
//       }}
//     >
//       <Typography variant="h6" sx={{ color: "white", m: 2, mt: 8, ml: 4 }}>
//         FIRE <br /> WARDEN
//       </Typography>
//       <Box sx={{ display: "flex", justifyContent: "flex-start", p: 1 }}>
//         <Button
//           sx={{
//             color: "white",
//             backgroundColor: "red",
//             "&:hover": { backgroundColor: "#ff3333" },
//             m: 1,
//             mb: 5,
//             width: 100,
//           }}
//         >
//           Book Now
//         </Button>
//         <Button sx={{ color: "white", m: 1, mb: 5 }}>View Details</Button>
//       </Box>
//     </Box>
//   </Card>
//   <Card
//     sx={{
//       position: "relative",
//       width: "48%",
//       mb: 2,
//       bgcolor: "#262F69",
//       height: 250,
//     }}
//   >
//     <CardMedia
//       component="img"
//       height="250"
//       image="/Image (8).png"
//       alt="Fire Marshal"
//     />
//     <Box
//       sx={{
//         position: "absolute",
//         top: 0,
//         right: 0,
//         width: "100%",
//         height: "100%",
//         backgroundImage: 'url("/Vector.png")',
//         backgroundSize: "contain",
//         backgroundRepeat: "no-repeat",
//         backgroundPosition: "right top",
//         mr: 20,
//       }}
//     />
//     <Box
//       sx={{
//         position: "absolute",
//         top: 0,
//         left: 0,
//         width: "100%",
//         height: "100%",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "space-between",
//       }}
//     >
//       <Typography variant="h6" sx={{ color: "white", m: 2, mt: 8, ml: 4 }}>
//         FIRE <br /> MARSHAL
//       </Typography>
//       <Box sx={{ display: "flex", justifyContent: "flex-start", p: 1 }}>
//         <Button
//           sx={{
//             color: "white",
//             backgroundColor: "red",
//             "&:hover": { backgroundColor: "#ff3333" },
//             m: 1,
//             mb: 5,
//             width: 100,
//           }}
//         >
//           Book Now
//         </Button>
//         <Button sx={{ color: "white", m: 1, mb: 5 }}>View Details</Button>
//       </Box>
//     </Box>
//   </Card>
// </Container>

// {/* Health and Saftey card conatiner  */}

// <Container
//   sx={{
//     mt: 2,
//     ml: 7,
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "left",
//     gap: "5px",
//     width: "100%",
//   }}
// >
//   <Card
//     sx={{
//       position: "relative",
//       width: "48%",
//       mb: 2,
//       bgcolor: "#262F69",
//       height: 250,
//     }}
//   >
//     <CardMedia
//       component="img"
//       height="250"
//       image="/Image (7).png"
//       alt="Fire Warden"
//     />
//     <Box
//       sx={{
//         position: "absolute",
//         top: 0,
//         right: 0,
//         width: "100%",
//         height: "100%",
//         backgroundImage: 'url("/Vector.png")',
//         backgroundSize: "contain",
//         backgroundRepeat: "no-repeat",
//         backgroundPosition: "right top",
//         mr: 20,
//       }}
//     />
//     <Box
//       sx={{
//         position: "absolute",
//         top: 0,
//         left: 0,
//         width: "100%",
//         height: "100%",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "space-between",
//       }}
//     >
//       <Typography variant="h6" sx={{ color: "white", m: 2, mt: 8, ml: 4 }}>
//         FIRE <br /> WARDEN
//       </Typography>
//       <Box sx={{ display: "flex", justifyContent: "flex-start", p: 1 }}>
//         <Button
//           sx={{
//             color: "white",
//             backgroundColor: "red",
//             "&:hover": { backgroundColor: "#ff3333" },
//             m: 1,
//             mb: 5,
//             width: 100,
//           }}
//         >
//           Book Now
//         </Button>
//         <Button sx={{ color: "white", m: 1, mb: 5 }}>View Details</Button>
//       </Box>
//     </Box>
//   </Card>
//   <Card
//     sx={{
//       position: "relative",
//       width: "48%",
//       mb: 2,
//       bgcolor: "#262F69",
//       height: 250,
//     }}
//   >
//     <CardMedia
//       component="img"
//       height="250"
//       image="/Image (8).png"
//       alt="Fire Marshal"
//     />
//     <Box
//       sx={{
//         position: "absolute",
//         top: 0,
//         right: 0,
//         width: "100%",
//         height: "100%",
//         backgroundImage: 'url("/Vector.png")',
//         backgroundSize: "contain",
//         backgroundRepeat: "no-repeat",
//         backgroundPosition: "right top",
//         mr: 20,
//       }}
//     />
//     <Box
//       sx={{
//         position: "absolute",
//         top: 0,
//         left: 0,
//         width: "100%",
//         height: "100%",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "space-between",
//       }}
//     >
//       <Typography variant="h6" sx={{ color: "white", m: 2, mt: 8, ml: 4 }}>
//         FIRE <br /> MARSHAL
//       </Typography>
//       <Box sx={{ display: "flex", justifyContent: "flex-start", p: 1 }}>
//         <Button
//           sx={{
//             color: "white",
//             backgroundColor: "red",
//             "&:hover": { backgroundColor: "#ff3333" },
//             m: 1,
//             mb: 5,
//             width: 100,
//           }}
//         >
//           Book Now
//         </Button>
//         <Button sx={{ color: "white", m: 1, mb: 5 }}>View Details</Button>
//       </Box>
//     </Box>
//   </Card>
// </Container>

// {/* Education Card container  */}

// <Container
//   sx={{
//     mt: 2,
//     ml: 7,
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "left",
//     gap: "5px",
//     width: "100%",
//   }}
// >
//   <Card
//     sx={{
//       position: "relative",
//       width: "48%",
//       mb: 2,
//       bgcolor: "#262F69",
//       height: 250,
//     }}
//   >
//     <CardMedia
//       component="img"
//       height="250"
//       image="/Image (7).png"
//       alt="Fire Warden"
//     />
//     <Box
//       sx={{
//         position: "absolute",
//         top: 0,
//         right: 0,
//         width: "100%",
//         height: "100%",
//         backgroundImage: 'url("/Vector.png")',
//         backgroundSize: "contain",
//         backgroundRepeat: "no-repeat",
//         backgroundPosition: "right top",
//         mr: 20,
//       }}
//     />
//     <Box
//       sx={{
//         position: "absolute",
//         top: 0,
//         left: 0,
//         width: "100%",
//         height: "100%",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "space-between",
//       }}
//     >
//       <Typography variant="h6" sx={{ color: "white", m: 2, mt: 8, ml: 4 }}>
//         FIRE <br /> WARDEN
//       </Typography>
//       <Box sx={{ display: "flex", justifyContent: "flex-start", p: 1 }}>
//         <Button
//           sx={{
//             color: "white",
//             backgroundColor: "red",
//             "&:hover": { backgroundColor: "#ff3333" },
//             m: 1,
//             mb: 5,
//             width: 100,
//           }}
//         >
//           Book Now
//         </Button>
//         <Button sx={{ color: "white", m: 1, mb: 5 }}>View Details</Button>
//       </Box>
//     </Box>
//   </Card>
//   <Card
//     sx={{
//       position: "relative",
//       width: "48%",
//       mb: 2,
//       bgcolor: "#262F69",
//       height: 250,
//     }}
//   >
//     <CardMedia
//       component="img"
//       height="250"
//       image="/Image (8).png"
//       alt="Fire Marshal"
//     />
//     <Box
//       sx={{
//         position: "absolute",
//         top: 0,
//         right: 0,
//         width: "100%",
//         height: "100%",
//         backgroundImage: 'url("/Vector.png")',
//         backgroundSize: "contain",
//         backgroundRepeat: "no-repeat",
//         backgroundPosition: "right top",
//         mr: 20,
//       }}
//     />
//     <Box
//       sx={{
//         position: "absolute",
//         top: 0,
//         left: 0,
//         width: "100%",
//         height: "100%",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "space-between",
//       }}
//     >
//       <Typography variant="h6" sx={{ color: "white", m: 2, mt: 8, ml: 4 }}>
//         FIRE <br /> MARSHAL
//       </Typography>
//       <Box sx={{ display: "flex", justifyContent: "flex-start", p: 1 }}>
//         <Button
//           sx={{
//             color: "white",
//             backgroundColor: "red",
//             "&:hover": { backgroundColor: "#ff3333" },
//             m: 1,
//             mb: 5,
//             width: 100,
//           }}
//         >
//           Book Now
//         </Button>
//         <Button sx={{ color: "white", m: 1, mb: 5 }}>View Details</Button>
//       </Box>
//     </Box>
//   </Card>
// </Container>

//       {/* new Secation  */}
//       <Box
//         sx={{
//           backgroundColor: "#262f69",
//           py: 6,
//           mt: 4,
//         }}
//       >
//         <Container maxWidth="lg">
//           <Box
//             sx={{
//               backgroundColor: "#ffffff",
//               borderRadius: "8px",
//               p: 3,
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "space-between",
//               ml: 3,
//               maxWidth: "91.5%",
//             }}
//           >
//             <Box display="flex" alignItems="center">
//               <img
//                 src="banner-02 1.png"
//                 alt="Register"
//                 style={{ width: "80px", height: "100px", marginRight: "16px" }}
//               />
//               <Box>
//                 <Typography
//                   variant="h5"
//                   sx={{
//                     fontWeight: "bold",
//                     color: "#262f69",
//                     mb: 1,
//                   }}
//                 >
//                   Register for our Courses in Easy Steps
//                 </Typography>
//                 <Typography
//                   variant="body1"
//                   sx={{
//                     color: "#000000",
//                   }}
//                 >
//                   Lorem ipsum is a placeholder text commonly used to demonstrate
//                   the visual form
//                 </Typography>
//               </Box>
//             </Box>
//             <Button
//               variant="contained"
//               sx={{
//                 backgroundColor: "#262f69",
//                 color: "#ffffff",
//                 textTransform: "none",
//                 fontWeight: "bold",
//                 mr: 5,
//               }}
//             >
//               Learn More →
//             </Button>
//           </Box>
//         </Container>
//       </Box>

//       <Box
//         sx={{
//           py: 6,
//           mt: 4,
//           display: "flex",
//           ml: 7,
//           mr: 7,
//           justifyContent: "center",
//         }}
//       >
//         <Container maxWidth="lg">
//           <Box
//             sx={{
//               backgroundColor: "#d9534f",
//               borderRadius: "8px",
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               p: 3,
//             }}
//           >
//             <Box
//               sx={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}
//             >
//               <Box sx={{ flex: "1 1 0%", textAlign: "left" }}>
//                 <Typography
//                   variant="h5"
//                   sx={{
//                     fontWeight: "bold",
//                     color: "#ffffff",
//                     mb: 1,
//                     backgroundColor: "#d9534f",
//                     p: 1,
//                     borderRadius: "8px",
//                   }}
//                 >
//                   HOW TO GET AN SIA LICENSE
//                 </Typography>
//                 <Typography
//                   variant="body1"
//                   sx={{
//                     fontSize: { lg: "15px" },
//                     lineHeight: "26px",
//                     letterSpacing: "-0.5px",
//                     color: "#ffffff",
//                     mt: 2,
//                     maxWidth: "60%",
//                   }}
//                   paragraph // This tells Material-UI that this Typography component is meant to be used as a paragraph
//                 >
//                   Lorem ipsum is a placeholder text commonly used to demonstrate
//                   the visual form of a document or a typeface without relying on
//                   meaningful content.
//                 </Typography>
//                 <Button
//                   variant="contained"
//                   sx={{
//                     backgroundColor: "#262f69",
//                     color: "#ffffff",
//                     textTransform: "none",
//                     fontWeight: "bold",
//                     mt: 2,
//                   }}
//                 >
//                   Learn More →
//                 </Button>
//               </Box>
//               <Box sx={{ flex: "1 1 0%", textAlign: "right" }}>
//                 <img
//                   src="DEP2012-0133-02 1.png"
//                   alt="SIA License"
//                   style={{ width: "80%", borderRadius: "8px" }}
//                 />
//               </Box>
//             </Box>
//           </Box>
//         </Container>
//       </Box>

//       {/* new Secation */}
//       <Box
//         sx={{
//           backgroundColor: "#262f69",
//           py: 6,
//           mt: 4,
//         }}
//       >
//         <Container maxWidth="lg">
//           <Typography
//             variant="h4"
//             sx={{
//               fontWeight: "bold",
//               color: "#ffffff",
//               mb: 1,
//               textAlign: "center",
//             }}
//           >
//             OUR SERVICES
//           </Typography>
//           <Typography
//             variant="body1"
//             sx={{
//               color: "#ffffff",
//               textAlign: "center",
//               mb: 4,
//             }}
//           >
//             Lorem ipsum is a placeholder text commonly used to demonstrate the
//             visual form of a <br />
//             document or a typeface without relying on meaningful content. Lorem
//             ipsum may be used.
//           </Typography>
//           <Grid container spacing={3} ml={0} mr={0}>
//             {serviceData.map((service, index) => (
//               <Grid item xs={12} md={4} key={index}>
//                 <Card sx={{ backgroundColor: "#ffffff", borderRadius: "8px" }}>
//                   <CardContent>
//                     <Box
//                       sx={{
//                         display: "flex",
//                         flexDirection: "column",
//                         alignItems: "left",
//                         mb: 2,
//                       }}
//                     >
//                       <img
//                         src={iconMapping[service.title]}
//                         alt={service.title}
//                         style={{
//                           width: "60px",
//                           height: "60px",
//                           marginBottom: "8px",
//                         }}
//                       />
//                       <Typography
//                         variant="h6"
//                         sx={{
//                           fontWeight: "bold",
//                           color: "#d9534f",
//                           textAlign: "left",
//                         }}
//                       >
//                         {service.title}
//                       </Typography>
//                     </Box>
//                     <Typography
//                       variant="body2"
//                       sx={{
//                         color: "#000000",
//                         mb: 2,
//                       }}
//                     >
//                       {service.description}
//                     </Typography>
//                     <Button
//                       variant="contained"
//                       sx={{
//                         backgroundColor: "#262f69",
//                         color: "#ffffff",
//                         textTransform: "none",
//                         fontWeight: "bold",
//                       }}
//                     >
//                       Learn more →
//                     </Button>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </Box>
//       <Box
//         sx={{
//           backgroundColor: "#d9534f",
//           py: 6,
//           mt: 0,
//         }}
//       >
//         <Container maxWidth="lg">
//           <Grid container alignItems="center">
//             <Grid item xs={12} md={5} ml={3}>
//               <Typography
//                 variant="h4"
//                 sx={{
//                   fontWeight: "bold",
//                   color: "#ffffff",
//                   mb: 3,
//                 }}
//               >
//                 GET THE RAPID SERVICES APP
//               </Typography>
//               <Typography
//                 variant="body1"
//                 sx={{
//                   color: "#ffffff",
//                   mb: 2,
//                 }}
//               >
//                 Lorem ipsum is a placeholder text commonly used to demonstrate
//                 the visual form of a document or a typeface without meaningful
//                 content.
//               </Typography>
//               <img
//                 src="Layer_1.png"
//                 alt="Coming Soon"
//                 style={{
//                   marginTop: 8,
//                   marginBottom: 16,
//                   maxWidth: "50%",
//                   height: "auto",
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <Box
//                 sx={{
//                   mt: { xs: 4, md: 0 },
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   mb: -10.5, // Adjust this value as needed to ensure separation from the following section
//                 }}
//               >
//                 <img
//                   src="Picture → download-gp-badges.webp.png"
//                   alt="App preview"
//                   style={{
//                     width: "100%",
//                     maxWidth: "400px",
//                     objectFit: "contain",
//                   }}
//                 />
//               </Box>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>

//       <Footer />
//     </>
//   );
// }

import React, { useState } from "react";
import Footer from "../Component/HomePageComponent/Footer";
import {
  Typography,
  Box,
  Container,
  Grid,
  Button,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

export default function FeaturedSection() {
  const [activeButton, setActiveButton] = useState("");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
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
                paragraph
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
              <Box sx={{ mt: 12.5, mb: 6 }}>
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
            color: "#000000",
            textAlign: "center",
            maxWidth: "900px",
            px: { xs: 3, sm: 5 },
          }}
        >
          Lorem ipsum is a placeholder text commonly used to demonstrate the
          visual form of a document or a typeface without relying on meaningful
          content. Lorem ipsum may be used.
        </Typography>
      </Box>

      {/* Buttons Code started here */}
      <Container sx={{ mt: -5, ml: 7 }}>
        <Box
          sx={{
            backgroundColor: "#f5f5f5",
            borderRadius: "8px",
            p: 2,
            display: "flex",
            maxWidth: "93%",
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {["Fire Safety", "Security", "Health and Safety", "Education"].map(
            (buttonName) => (
              <Button
                key={buttonName}
                variant="text"
                sx={{
                  color: activeButton === buttonName ? "#ffffff" : "#262f69",
                  textTransform: "none",
                  fontWeight: "bold",
                  backgroundColor:
                    activeButton === buttonName ? "#262f69" : "transparent",
                  ":hover": {
                    backgroundColor: "#262f69",
                    color: "#ffffff",
                  },
                  m: 1,
                }}
                onClick={() => handleButtonClick(buttonName)}
              >
                {buttonName}
              </Button>
            )
          )}
        </Box>
      </Container>

      {/* Conditional rendering of containers */}
      {activeButton === "Fire Safety" && (
        <Container
          sx={{
            mt: 2,
            ml: 7,
            display: "flex",
            flexDirection: "row",
            justifyContent: "left",
            gap: "5px",
            width: "100%",
          }}
        >
          <Card
            sx={{
              position: "relative",
              width: "48%",
              mb: 2,
              bgcolor: "#262F69",
              height: 250,
            }}
          >
            <CardMedia
              component="img"
              height="250"
              image="/Image (7).png"
              alt="Fire Warden"
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "100%",
                height: "100%",
                backgroundImage: 'url("/Vector.png")',
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right top",
                mr: 20,
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: "white", m: 2, mt: 8, ml: 4 }}
              >
                FIRE <br /> WARDEN
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "flex-start", p: 1 }}>
                <Button
                  sx={{
                    color: "white",
                    backgroundColor: "red",
                    "&:hover": { backgroundColor: "#ff3333" },
                    m: 1,
                    mb: 5,
                    width: 100,
                  }}
                >
                  Book Now
                </Button>
                <Button sx={{ color: "white", m: 1, mb: 5 }}>
                  View Details
                </Button>
              </Box>
            </Box>
          </Card>
          <Card
            sx={{
              position: "relative",
              width: "48%",
              mb: 2,
              bgcolor: "#262F69",
              height: 250,
            }}
          >
            <CardMedia
              component="img"
              height="250"
              image="/Image (8).png"
              alt="Fire Marshal"
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "100%",
                height: "100%",
                backgroundImage: 'url("/Vector.png")',
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right top",
                mr: 20,
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: "white", m: 2, mt: 8, ml: 4 }}
              >
                FIRE <br /> MARSHAL
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "flex-start", p: 1 }}>
                <Button
                  sx={{
                    color: "white",
                    backgroundColor: "red",
                    "&:hover": { backgroundColor: "#ff3333" },
                    m: 1,
                    mb: 5,
                    width: 100,
                  }}
                >
                  Book Now
                </Button>
                <Button sx={{ color: "white", m: 1, mb: 5 }}>
                  View Details
                </Button>
              </Box>
            </Box>
          </Card>
        </Container>
      )}

      {activeButton === "Security" && (
        <Container
          sx={{
            mt: 2,
            ml: 7,
            display: "flex",
            flexDirection: "row",
            justifyContent: "left",
            gap: "5px",
            width: "100%",
            flexWrap: "wrap",
          }}
        >
          <Card
            sx={{
              position: "relative",
              width: "48%",
              mb: 2,
              bgcolor: "#262F69",
              height: 250,
            }}
          >
            <CardMedia
              component="img"
              // height="50"

              image="/Image (9).png"
              alt="Level 2 Door Supervisor Top Up Plus Emergency First Aid"
              sx={{ objectFit: "cover" }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "100%",
                height: "100%",
                backgroundImage: 'url("/Vector.png")',
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right top",
                mr: 20,
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: "white", m: 2, mt: 4, ml: 4 }}
              >
                LEVEL 2 DOOR <br /> SUPERVISOR TOP UP <br />
                PLUS EMERGENCY <br />
                FIRST AID
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "flex-start", p: 1 }}>
                <Button
                  sx={{
                    color: "white",
                    backgroundColor: "red",
                    "&:hover": { backgroundColor: "#ff3333" },
                    m: 1,
                    mb: 5,
                    width: 100,
                  }}
                >
                  Book Now
                </Button>
                <Button sx={{ color: "white", m: 1, mb: 5 }}>
                  View Details
                </Button>
              </Box>
            </Box>
          </Card>
          <Card
            sx={{
              position: "relative",
              width: "48%",
              mb: 2,
              bgcolor: "#262F69",
              height: 250,
            }}
          >
            <CardMedia
              component="img"
              // height="250"
              sx={{
                width: 500, // Set the width as needed
                height: 250, // Set the height as needed
                objectFit: "contain", // Ensures the image aspect ratio is maintained
                ml:25,
              }}
              image="/Image (10).png"
              alt="Level 2 Security Guarding Top Up"
              // sx={{ objectFit: "cover" }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "100%",
                height: "100%",
                backgroundImage: 'url("/Vector.png")',
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right top",
                mr: 20,
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: "white", m: 2, mt: 4, ml: 3 }}
              >
                LEVEL 2 SECURITY <br />
                GUARDING TOP UP
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "flex-start", p: 1  }}>
                <Button
                  sx={{
                    color: "white",
                    backgroundColor: "red",
                    "&:hover": { backgroundColor: "#ff3333" },
                    m: 1,
                    mb: 5,
                    width: 100,
                  }}
                >
                  Book Now
                </Button>
                <Button sx={{ color: "white", m: 1, mb: 5 }}>
                  View Details
                </Button>
              </Box>
            </Box>
          </Card>
          <Card
            sx={{
              position: "relative",
              width: "48%",
              mb: 2,
              bgcolor: "#262F69",
              height: 250,
            }}
          >
            <CardMedia
              component="img"
              // height="250"
              image="/Image (11).png"
              alt="Level 2 Door Supervisor In Private Security Industry Plus Emergency First Aid"
              // sx={{ objectFit: "cover" }}
              sx={{
                width: 500, // Set the width as needed
                height: 250, // Set the height as needed
                objectFit: "contain", // Ensures the image aspect ratio is maintained
                ml:25,
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "100%",
                height: "100%",
                backgroundImage: 'url("/Vector.png")',
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right top",
                mr: 20,
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: "white", m: 2, mt: 1, ml: 4 }}
              >
                LEVEL 2 DOOR <br />  SUPERVISOR IN<br />  PRIVATE SECURITY <br /> INDUSTRY PLUS<br /> 
                EMERGENCY FIRST AID
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "flex-start", p: 1 }}>
                <Button
                  sx={{
                    color: "white",
                    backgroundColor: "red",
                    "&:hover": { backgroundColor: "#ff3333" },
                    m: 1,
                    mb: 5,
                    width: 100,
                  }}
                >
                  Book Now
                </Button>
                <Button sx={{ color: "white", m: 1, mb: 5 }}>
                  View Details
                </Button>
              </Box>
            </Box>
          </Card>
          <Card
            sx={{
              position: "relative",
              width: "48%",
              mb: 2,
              bgcolor: "#262F69",
              height: 250,
            }}
          >
            <CardMedia
              component="img"
              // height="250"
              sx={{
                width: 500, // Set the width as needed
                height: 250, // Set the height as needed
                objectFit: "contain", // Ensures the image aspect ratio is maintained
                ml:25,
              }}
              image="/Image (12).png"
              alt="Level 2 Security Guarding In Private Security Industry"
              // sx={{ objectFit: "cover" }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "100%",
                height: "100%",
                backgroundImage: 'url("/Vector.png")',
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right top",
                mr: 20,
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: "white", m: 2, mt: 3, ml: 2 }}
              >
                LEVEL 2 SECURITY <br />  GUARDING IN <br />  PRIVATE SECURITY<br /> INDUSTRY
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "flex-start", p: 1 }}>
                <Button
                  sx={{
                    color: "white",
                    backgroundColor: "red",
                    "&:hover": { backgroundColor: "#ff3333" },
                    m: 1,
                    mb: 5,
                    width: 100,
                  }}
                >
                  Book Now
                </Button>
                <Button sx={{ color: "white", m: 1, mb: 5 }}>
                  View Details
                </Button>
              </Box>
            </Box>
          </Card>
        </Container>
      )}

      {activeButton === "Health and Safety" && (
        <Container
          sx={{
            mt: 2,
            ml: 7,
            display: "flex",
            flexDirection: "row",
            justifyContent: "left",
            gap: "5px",
            width: "100%",
          }}
        >
          <Card
            sx={{
              position: "relative",
              width: "48%",
              mb: 2,
              bgcolor: "#262F69",
              height: 250,
            }}
          >
            <CardMedia
              component="img"
              // height="250"
              image="/Image (13).png"
              alt="Emergency First Aid Training at Workplace"
              // sx={{ objectFit: "cover" }}
              sx={{
                width: 500, // Set the width as needed
                height: 250, // Set the height as needed
                objectFit: "contain", // Ensures the image aspect ratio is maintained
                ml:25,
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "100%",
                height: "100%",
                backgroundImage: 'url("/Vector.png")',
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right top",
                mr: 20,
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: "white", m: 2, mt: 8, ml: 4 }}
              >
                EMERGENCY FIRST <br /> AID  TRAINING AT<br /> WORKPLACE
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "flex-start", p: 1 }}>
                <Button
                  sx={{
                    color: "white",
                    backgroundColor: "red",
                    "&:hover": { backgroundColor: "#ff3333" },
                    m: 1,
                    mb: 5,
                    width: 100,
                  }}
                >
                  Book Now
                </Button>
                <Button sx={{ color: "white", m: 1, mb: 5 }}>
                  View Details
                </Button>
              </Box>
            </Box>
          </Card>
          <Card
            sx={{
              position: "relative",
              width: "48%",
              mb: 2,
              bgcolor: "#262F69",
              height: 250,
            }}
          >
            <CardMedia
              component="img"
              // height="250"
              image="/Image (14).png"
              alt="Traffic Marshal"
              // sx={{ objectFit: "cover" }}
              sx={{
                width: 500, // Set the width as needed
                height: 250, // Set the height as needed
                objectFit: "contain", // Ensures the image aspect ratio is maintained
                ml:25,
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "100%",
                height: "100%",
                backgroundImage: 'url("/Vector.png")',
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right top",
                mr: 20,
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: "white", m: 2, mt: 8, ml: 4 }}
              >
                TRAFFIC <br /> MARSHAL
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "flex-start", p: 1 }}>
                <Button
                  sx={{
                    color: "white",
                    backgroundColor: "red",
                    "&:hover": { backgroundColor: "#ff3333" },
                    m: 1,
                    mb: 5,
                    width: 100,
                  }}
                >
                  Book Now
                </Button>
                <Button sx={{ color: "white", m: 1, mb: 5 }}>
                  View Details
                </Button>
              </Box>
            </Box>
          </Card>
        </Container>
      )}

      {activeButton === "Education" && (
        <Container
          sx={{
            mt: 2,
            ml: 7,
            display: "flex",
            flexDirection: "row",
            justifyContent: "left",
            gap: "5px",
            width: "100%",
            flexWrap: "wrap",
          }}
        >
          <Card
            sx={{
              position: "relative",
              width: "48%",
              mb: 2,
              bgcolor: "#262F69",
              height: 250,
            }}
          >
            <CardMedia
              component="img"
              // height="250"
              image="/Image (15).png"
              alt="Level 3 Award In Education"
              // sx={{ objectFit: "cover" }}
              sx={{
                width: 500, // Set the width as needed
                height: 250, // Set the height as needed
                objectFit: "contain", // Ensures the image aspect ratio is maintained
                ml:25,
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "100%",
                height: "100%",
                backgroundImage: 'url("/Vector.png")',
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right top",
                mr: 20,
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: "white", m: 2, mt: 8, ml: 4 }}
              >
                LEVEL 3 AWARD  IN <br /> EDUCATION
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "flex-start", p: 1 }}>
                <Button
                  sx={{
                    color: "white",
                    backgroundColor: "red",
                    "&:hover": { backgroundColor: "#ff3333" },
                    m: 1,
                    mb: 5,
                    width: 100,
                  }}
                >
                  Book Now
                </Button>
                <Button sx={{ color: "white", m: 1, mb: 5 }}>
                  View Details
                </Button>
              </Box>
            </Box>
          </Card>
          <Card
            sx={{
              position: "relative",
              width: "48%",
              mb: 2,
              bgcolor: "#262F69",
              height: 250,
            }}
          >
            <CardMedia
              component="img"
              // height="250"
              image="/Image (16).png"
              alt="Level 4 IQA Course-Internal Quality Assurance"
              // sx={{ objectFit: "cover" }}
              sx={{
                width: 500, // Set the width as needed
                height: 250, // Set the height as needed
                objectFit: "contain", // Ensures the image aspect ratio is maintained
                ml:25,
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "100%",
                height: "100%",
                backgroundImage: 'url("/Vector.png")',
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right top",
                mr: 20,
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: "white", m: 2, mt: 8, ml: 4 }}
              >
                LEVEL 4 IQA  <br />COURSE  INTERNAL 
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "flex-start", p: 1 }}>
                <Button
                  sx={{
                    color: "white",
                    backgroundColor: "red",
                    "&:hover": { backgroundColor: "#ff3333" },
                    m: 1,
                    mb: 5,
                    width: 100,
                  }}
                >
                  Book Now
                </Button>
                <Button sx={{ color: "white", m: 1, mb: 5 }}>
                  View Details
                </Button>
              </Box>
            </Box>
          </Card>
          <Card
            sx={{
              position: "relative",
              width: "48%",
              mb: 2,
              bgcolor: "#262F69",
              height: 250,
              alignSelf: "center",
            }}
          >
            <CardMedia
              component="img"
              // height="250"
              image="/Image (17).png"
              alt="Level 4 IQA Course-Internal Quality Assurance"
              // sx={{ objectFit: "cover" }}
              sx={{
                width: 500, // Set the width as needed
                height: 250, // Set the height as needed
                objectFit: "contain", // Ensures the image aspect ratio is maintained
                ml:25,
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "100%",
                height: "100%",
                backgroundImage: 'url("/Vector.png")',
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right top",
                mr: 20,
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: "white", m: 2, mt: 8, ml: 4 }}
              >
     Quality Assurance <br/>- IQA Course
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "flex-start", p: 1 }}>
                <Button
                  sx={{
                    color: "white",
                    backgroundColor: "red",
                    "&:hover": { backgroundColor: "#ff3333" },
                    m: 1,
                    mb: 5,
                    width: 100,
                  }}
                >
                  Book Now
                </Button>
                <Button sx={{ color: "white", m: 1, mb: 5 }}>
                  View Details
                </Button>
              </Box>
            </Box>
          </Card>
        </Container>
      )}

      {/* new Section */}
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
              ml: 3,
              maxWidth: "91.5%",
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
                    color: "#000000",
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
                mr: 5,
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
          ml: 7,
          mr: 7,
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
                    fontSize: { lg: "15px" },
                    lineHeight: "26px",
                    letterSpacing: "-0.5px",
                    color: "#ffffff",
                    mt: 2,
                    maxWidth: "60%",
                  }}
                  paragraph
                >
                  Lorem ipsum is a placeholder text commonly used to demonstrate
                  the visual form of a document or a typeface without relying on
                  meaningful content.
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

      {/* new Section */}
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
              mb: 1,
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
          <Grid container spacing={3} ml={0} mr={0}>
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
                          width: "60px",
                          height: "60px",
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
                        color: "#000000",
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
            <Grid item xs={12} md={5} ml={3}>
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
                the visual form of a document or a typeface without relying on
                meaningful content.
              </Typography>
              <img
                src="Layer_1.png"
                alt="Coming Soon"
                style={{
                  marginTop: 8,
                  marginBottom: 16,
                  maxWidth: "50%",
                  height: "auto",
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  mt: { xs: 4, md: 0 },
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mb: -10.5, // Adjust this value as needed to ensure separation from the following section
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
