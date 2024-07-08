// import React, { useEffect, useRef } from "react";
// import {
//   Container,
//   Typography,
//   Box,
//   Grid,
//   Card,
//   CardContent,
// } from "@mui/material";
// import Footer from "../Component/HomePageComponent/Footer";
// import { keyframes } from "@mui/system";

// const slideIn = keyframes`
//   0% {
//     transform: translateX(-100%);
//     opacity: 0;
//   }
//   100% {
//     transform: translateX(0);
//     opacity: 1;
//   }
// `;

// const guidingPrinciples = [
//   {
//     title: "Deliver Quality",
//     description:
//       "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface.",
//     icon: "fun.svg fill.png", // replace with actual icon paths
//   },
//   {
//     title: "Be Committed",
//     description:
//       "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface.",
//     icon: "be-committed.svg.png", // replace with actual icon paths
//   },
//   {
//     title: "Remain Curious",
//     description:
//       "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface.",
//     icon: "bulb-61.svg fill.png", // replace with actual icon paths
//   },
//   {
//     title: "Use Your Empathy",
//     description:
//       "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface.",
//     icon: "Group 11165.png", // replace with actual icon paths
//   },
//   {
//     title: "Empower People",
//     description:
//       "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface.",
//     icon: "empower.svg.png", // replace with actual icon paths
//   },
//   {
//     title: "Be Agile",
//     description:
//       "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface.",
//     icon: "agile.svg fill.png", // replace with actual icon paths
//   },
// ];

// const AboutUs = () => {
//   const animatedTextRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           entry.target.style.animation = `${slideIn} 3s ease-out`;
//         } else {
//           entry.target.style.animation = "none";
//         }
//       },
//       { threshold: 0.5 }
//     );

//     if (animatedTextRef.current) {
//       observer.observe(animatedTextRef.current);
//     }

//     return () => {
//       if (animatedTextRef.current) {
//         observer.unobserve(animatedTextRef.current);
//       }
//     };
//   }, []);

//   return (
//     <>
//       <Box
//         sx={{
//           position: "relative",
//           backgroundImage: 'url("Rectangle 4301.png")',
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           height: "500px", // Increased height to account for the gap
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           color: "#fff",
//           textAlign: "center",
//           mt: 8, // Margin top to add a gap from the top of the page
//         }}
//       >
//         <Box
//           sx={{
//             position: "absolute",
//             top: "0px", // Gap from the top of the Box
//             width: "100%",
//             display: "flex",
//             justifyContent: "center",
//             zIndex: 2,
//           }}
//         >
//           <img
//             src="Rectangle 4302.png"
//             alt="Overlay"
//             style={{ width: "100%", height: "500px", opacity: 0.7 }}
//           />
//         </Box>
//         <Box
//           sx={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             backgroundColor: "rgba(0, 0, 0, 0.5)",
//             zIndex: 1,
//           }}
//         ></Box>
//         <Box sx={{ zIndex: 3 }}>
//           <Typography variant="h3" component="h1" gutterBottom>
//             About Us
//           </Typography>
//           <Typography variant="body1" sx={{ maxWidth: "800px", mx: "auto" }}>
//             Lorem ipsum is a placeholder text commonly used to demonstrate the
//             visual form of a document or a typeface without relying on
//             meaningful content. Lorem ipsum may be used.
//           </Typography>
//         </Box>
//       </Box>

//       {/* New Section */}
//       <Container sx={{ my: 4 }}>
//         <Grid container spacing={4} alignItems="center">
//           <Grid item xs={12} md={6}>
//             <Typography
//               variant="h4"
//               component="h2"
//               sx={{ fontWeight: "bold", mb: 2, mt: 4 }}
//             >
//               TRUST US TO EXCEED YOUR SECURITY NEEDS
//             </Typography>
//             <Typography
//               variant="body1"
//               paragraph
//               sx={{
//                 fontSize: "15px",
//                 lineHeight: "1.6",
//                 mb: 2,
//                 color: "#000000",
//               }}
//             >
//               Lorem Ipsum is simply dummy text of the printing and typesetting
//               industry. Lorem Ipsum has been the industry's standard dummy text
//               ever since the 1500s, when an unknown printer took a galley of
//               type and scrambled it to make a type specimen book. It has
//               survived not only five centuries, but also the leap into
//               electronic typesetting, remaining essentially unchanged.
//             </Typography>
//             <Typography
//               variant="body1"
//               paragraph
//               sx={{
//                 fontSize: "15px",
//                 lineHeight: "1.6",
//                 color: "#000000",
//               }}
//             >
//               Lorem Ipsum is simply dummy text of the printing and typesetting
//               industry. Lorem Ipsum has been the industry's standard dummy text
//               ever since the 1500s, when an unknown printer took a galley of
//               type and scrambled it to make a type specimen book. It has
//               survived not only five centuries, but also the leap into
//               electronic typesetting, remaining essentially unchanged.
//             </Typography>
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <Box
//               sx={{
//                 width: "100%",
//                 height: "auto",
//                 position: "relative", // Added position relative to Box
//                 padding: "8px",
//               }}
//             >
//               <img
//                 src="Rectangle 4313.png"
//                 alt="Background"
//                 style={{
//                   position: "absolute",
//                   left: 62.5,
//                   height: "65%",
//                   width: "50%",
//                   top: "32.5%",
//                   zIndex: 1,
//                 }}
//               />
//               <img
//                 src="2 1.png"
//                 alt="Security Personnel"
//                 style={{
//                   width: "70%",
//                   height: "70%",
//                   borderRadius: "0px",
//                   position: "relative",
//                   zIndex: 2,
//                   margin: "auto",
//                 }}
//               />
//             </Box>
//           </Grid>
//         </Grid>
//       </Container>

//       {/* New Red Section */}
//       <Box sx={{ backgroundColor: "#e94d3c", py: 6 }}>
//         <Container
//           maxWidth="md"
//           sx={{
//             textAlign: "center",
//             color: "#fff",
//             position: "relative",
//             overflow: "hidden",
//           }}
//         >
//           <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
//             WHAT WE DO
//           </Typography>
//           <Typography
//             variant="h4"
//             component="h3"
//             sx={{ mb: 2, fontSize: "2rem", fontWeight: "normal" }}
//           >
//             Protecting You and Your Business, <br />
//             Family, Properties with Devotion,
//             <br />
//             <Typography
//               component="span"
//               ref={animatedTextRef}
//               sx={{
//                 fontWeight: "bold",
//                 fontSize: "2.5rem", // Increased font size
//                 display: "inline-block",
//                 color: "#1e2a78", // Added color
//                 animation: `${slideIn} 4s ease-out forwards`, // Slowed down animation
//               }}
//             >
//               Intelligence and Pride
//             </Typography>
//           </Typography>
//           <Typography variant="h6" component="h4" sx={{ mt: 2 }}>
//             Piter Bowman
//           </Typography>
//           <Typography variant="body2" component="p">
//             Creative Director
//           </Typography>
//         </Container>
//       </Box>

//       {/* New Guiding Principles Section */}
//       <Container sx={{ textAlign: "center", py: 6 }}>
//         <Typography
//           variant="h4"
//           component="h2"
//           sx={{ fontWeight: "bold", mb: 2 }}
//         >
//           OUR GUIDING PRINCIPLES
//         </Typography>
//         <Typography
//           variant="body1"
//           sx={{ maxWidth: "800px", mx: "auto", color: "#666666", mb: 6 }}
//         >
//           Lorem ipsum is a placeholder text commonly used to demonstrate the
//           visual form of a document or a typeface without relying on meaningful
//           content. Lorem ipsum may be used.
//         </Typography>
//         <Grid container spacing={4}>
//           {guidingPrinciples.map((principle, index) => (
//             <Grid item xs={12} md={4} key={index}>
//               <Card
//                 sx={{
//                   height: "100%",
//                   backgroundColor: "#1e2a78",
//                   color: "#fff",
//                   textAlign: "left",
//                   display: "flex",
//                   flexDirection: "column",
//                 }}
//               >
//                 <CardContent>
//                   <Box
//                     sx={{
//                       display: "flex",
//                       alignItems: "center",
//                       mb: 2,
//                     }}
//                   >
//                     <img
//                       src={principle.icon}
//                       alt={principle.title}
//                       style={{ width: "40px", marginRight: "16px" }}
//                     />
//                     <Typography
//                       variant="h6"
//                       component="h3"
//                       sx={{ fontWeight: "bold", color: "#e94d3c" }}
//                     >
//                       {principle.title}
//                     </Typography>
//                   </Box>
//                   <Typography variant="body2" sx={{ marginLeft: "56px" }}>
//                     {principle.description}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>

//       <Footer />
//     </>
//   );
// };

// export default AboutUs;

import React, { useEffect, useRef } from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import Footer from "../Component/HomePageComponent/Footer";
import { keyframes } from "@mui/system";

const slideIn = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const guidingPrinciples = [
  {
    title: "Deliver Quality",
    description:
      "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface.",
    icon: "fun.svg fill.png", // replace with actual icon paths
  },
  {
    title: "Be Committed",
    description:
      "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface.",
    icon: "be-committed.svg.png", // replace with actual icon paths
  },
  {
    title: "Remain Curious",
    description:
      "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface.",
    icon: "bulb-61.svg fill.png", // replace with actual icon paths
  },
  {
    title: "Use Your Empathy",
    description:
      "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface.",
    icon: "Group 11165.png", // replace with actual icon paths
  },
  {
    title: "Empower People",
    description:
      "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface.",
    icon: "empower.svg.png", // replace with actual icon paths
  },
  {
    title: "Be Agile",
    description:
      "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface.",
    icon: "agile.svg fill.png", // replace with actual icon paths
  },
];

const faqItems = [
  {
    category: "What exactly is web development?",
    description:
      "I help people who have lost in the life cycle to take control of their life back and start doing things to make their dream.",
    questions: [
      "What does a website development company do?",
      "Can I develop a website myself?",
      "What does an SEO company report look like?",
      "What is SEO consulting?",
    ],
  },
  {
    category: "Why should I hire a search engine marketing company?",
    description:
      "I help people who have lost in the life cycle to take control of their life back and start doing things to make their dream.",
    questions: [
      "What is international SEO?",
      "What should I ask an SEO firm?",
      "How much does SEO cost?",
      "What does an international SEO consultant do?",
    ],
  },
];

const AboutUs = () => {
  const animatedTextRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.style.animation = `${slideIn} 3s ease-out`;
        } else {
          entry.target.style.animation = "none";
        }
      },
      { threshold: 0.5 }
    );

    if (animatedTextRef.current) {
      observer.observe(animatedTextRef.current);
    }

    return () => {
      if (animatedTextRef.current) {
        observer.unobserve(animatedTextRef.current);
      }
    };
  }, []);

  return (
    <>
      <Box
        sx={{
          position: "relative",
          backgroundImage: 'url("Rectangle 4301.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "500px", // Increased height to account for the gap
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          textAlign: "center",
          mt: 8, // Margin top to add a gap from the top of the page
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
            About Us
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: "800px", mx: "auto" }}>
            Lorem ipsum is a placeholder text commonly used to demonstrate the
            visual form of a document or a typeface without relying on
            meaningful content. Lorem ipsum may be used.
          </Typography>
        </Box>
      </Box>

      {/* New Section */}
      <Container sx={{ my: 4 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              component="h2"
              sx={{ fontWeight: "bold", mb: 2, mt: 4 }}
            >
              TRUST US TO EXCEED YOUR SECURITY NEEDS
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
                src="Rectangle 4313.png"
                alt="Background"
                style={{
                  position: "absolute",
                  left: 62.5,
                  height: "65%",
                  width: "50%",
                  top: "32.5%",
                  zIndex: 1,
                }}
              />
              <img
                src="2 1.png"
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

      {/* New Red Section */}
      <Box sx={{ backgroundColor: "#e94d3c", py: 6 }}>
        <Container
          maxWidth="md"
          sx={{
            textAlign: "center",
            color: "#fff",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
            WHAT WE DO
          </Typography>
          <Typography
            variant="h4"
            component="h3"
            sx={{ mb: 2, fontSize: "2rem", fontWeight: "normal" }}
          >
            Protecting You and Your Business, <br />
            Family, Properties with Devotion,
            <br />
            <Typography
              component="span"
              ref={animatedTextRef}
              sx={{
                fontWeight: "bold",
                fontSize: "2.5rem", // Increased font size
                display: "inline-block",
                color: "#1e2a78", // Added color
                animation: `${slideIn} 4s ease-out forwards`, // Slowed down animation
              }}
            >
              Intelligence and Pride
            </Typography>
          </Typography>
          <Typography variant="h6" component="h4" sx={{ mt: 2 }}>
            Piter Bowman
          </Typography>
          <Typography variant="body2" component="p">
            Creative Director
          </Typography>
        </Container>
      </Box>

      {/* New Guiding Principles Section */}
      <Container sx={{ textAlign: "center", py: 6 }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{ fontWeight: "bold", mb: 2 }}
        >
          OUR GUIDING PRINCIPLES
        </Typography>
        <Typography
          variant="body1"
          sx={{ maxWidth: "800px", mx: "auto", color: "#666666", mb: 6 }}
        >
          Lorem ipsum is a placeholder text commonly used to demonstrate the
          visual form of a document or a typeface without relying on meaningful
          content. Lorem ipsum may be used.
        </Typography>
        <Grid container spacing={4}>
          {guidingPrinciples.map((principle, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  height: "100%",
                  backgroundColor: "#1e2a78",
                  color: "#fff",
                  textAlign: "left",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mb: 2,
                    }}
                  >
                    <img
                      src={principle.icon}
                      alt={principle.title}
                      style={{ width: "40px", marginRight: "16px" }}
                    />
                    <Typography
                      variant="h6"
                      component="h3"
                      sx={{ fontWeight: "bold", color: "#e94d3c" }}
                    >
                      {principle.title}
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ marginLeft: "56px" }}>
                    {principle.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* New Section with Images and Text */}
      <Box sx={{ backgroundColor: "#1e2a78", py: 6, position: "relative" }}>
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
            zIndex: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 2,
              position: "relative",
              top: "-50px", // Adjust to move images above the background
              zIndex: 2,
            }}
          >
            <img
              src="1 24.png"
              alt="Security Person 1"
              style={{ width: "50%", height: "50%" }}
            />
            <img
              src="side-view-male-laborer-with-hard-hat-copy-space 1.png"
              alt="Security Person 2"
              style={{ width: "50%", height: "50%" }}
            />
          </Box>
          <Box
            sx={{
              color: "#fff",
              maxWidth: "400px",
              ml: 4,
              position: "relative",
              zIndex: 3,
            }}
          >
            <Typography variant="h4" component="h3" sx={{ mb: 2 }}>
              GET TO KNOW US
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Lorem ipsum is a placeholder text commonly used to demonstrate the
              visual form of a document or a typeface without relying on
              meaningful content. Lorem ipsum may be used as a placeholder before
              the final copy is available.
            </Typography>
            <Button variant="contained" sx={{ backgroundColor: "#e94d3c" }}>
              Download
            </Button>
          </Box>
        </Container>
        <Box
          sx={{
            position: "absolute",
            top: "150px", // Adjust to move the background start from the shoulder
            left: 0,
            right: 0,
            height: "50%",
            backgroundColor: "#1e2a78",
            zIndex: 1,
          }}
        ></Box>
      </Box>

      {/* New FAQ Section */}
      <Container sx={{ my: 4 }}>
        <Grid container spacing={4}>
          {faqItems.map((item, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card sx={{ mb: 2 }}>
                <CardContent>
                  <Typography variant="h6" component="h3" sx={{ fontWeight: "bold", color: "#1e2a78", mb: 2 }}>
                    {item.category}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    {item.description}
                  </Typography>
                  {item.questions.map((question, qIndex) => (
                    <Card key={qIndex} sx={{ mb: 2 }}>
                      <CardContent>
                        <Typography variant="body1" sx={{ color: "#1e2a78" }}>
                          {question}
                        </Typography>
                      </CardContent>
                    </Card>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Footer />
    </>
  );
};

export default AboutUs;
