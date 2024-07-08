// import React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container'; // Import Container
// import FacebookIcon from '@mui/icons-material/Facebook';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import CallIcon from '@mui/icons-material/Call';
// import EmailIcon from '@mui/icons-material/Email';

// const Navbar = () => {
//   const logoWidth = 200; // Adjust the width of your logo
//   const logoMarginLeft = 20; // Adjust the margin-left for your logo
//   const navbarBackgroundColor = '#ffffff'; // Background color for both navbars
//   const borderColor = '#e0e0e0'; // Border color for the line in the center

//   return (
//     <div>
//       <AppBar position="static" style={{ backgroundColor: navbarBackgroundColor, color: '#000000', boxShadow: 'none', borderBottom: `1px solid ${borderColor}` }}>
//         <Container>
//           <Toolbar style={{ justifyContent: 'space-between' }}>
//             <Box display="flex" alignItems="center" style={{ marginLeft: logoMarginLeft }}>
//               <img src="/logo.png" alt="Logo" style={{ height: 50, width: logoWidth }} />
//             </Box>
//             <Box display="flex" alignItems="center" style={{ gap: '10px', position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
//               <IconButton color="inherit">
//                 <FacebookIcon />
//               </IconButton>
//               <IconButton color="inherit">
//                 <LinkedInIcon />
//               </IconButton>
//               <IconButton color="inherit">
//                 <InstagramIcon />
//               </IconButton>
//             </Box>
//             <Box display="flex" alignItems="center" style={{ gap: '10px', marginLeft: 'auto' }}>
//               <Box display="flex" alignItems="center" style={{ paddingRight: '20px', borderRight: `1px solid ${borderColor}` }}>
//                 <CallIcon style={{ color: '#000', marginRight: '10px' }} />
//                 <Box>
//                   <Typography variant="body2" style={{ color: '#8e8e8e', fontSize: '12px' }}>Call Agent</Typography>
//                   <Typography variant="body1" style={{ color: '#000', fontSize: '14px' }}>075 060 97207</Typography>
//                 </Box>
//               </Box>
//               <Box display="flex" alignItems="center" style={{ paddingLeft: '20px' }}>
//                 <EmailIcon style={{ color: '#000', marginRight: '10px' }} />
//                 <Box>
//                   <Typography variant="body2" style={{ color: '#8e8e8e', fontSize: '12px' }}>Send Email</Typography>
//                   <Typography variant="body1" style={{ color: '#000', fontSize: '14px' }}>contact@rapidservicesolutions.co.uk</Typography>
//                 </Box>
//               </Box>
//             </Box>
//           </Toolbar>
//         </Container>
//       </AppBar>

//       <div style={{ width: '100%', height: '1px', backgroundColor: borderColor }}></div> {/* Line in the center */}

//       {/* Second Navbar */}
//       <AppBar position="static" style={{ backgroundColor: navbarBackgroundColor, color: '#000000', boxShadow: 'none', borderBottom: `1px solid ${borderColor}` }}>
//         <Container>
//           <Toolbar style={{ justifyContent: 'space-between' }}>
//             <Box display="flex" alignItems="center" style={{ gap: '35px' }}>
//               <Button color="inherit">Home</Button>
//               <Button color="inherit">About</Button>
//               <Button color="inherit">Course</Button>
//               <Button color="inherit">Services</Button>
//               <Button color="inherit">News</Button>
//               <Button color="inherit">Contact</Button>
//             </Box>
//           </Toolbar>
//         </Container>
//       </AppBar>
//     </div>
//   );
// };

// export default Navbar;

// import React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container'; // Import Container
// import FacebookIcon from '@mui/icons-material/Facebook';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import CallIcon from '@mui/icons-material/Call';
// import EmailIcon from '@mui/icons-material/Email';
// import SearchIcon from '@mui/icons-material/Search';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import PersonIcon from '@mui/icons-material/Person';

// const Navbar = () => {
//   const logoWidth = 200; // Adjust the width of your logo
//   const logoMarginLeft = 20; // Adjust the margin-left for your logo
//   const navbarBackgroundColor = '#ffffff'; // Background color for both navbars
//   const borderColor = '#e0e0e0'; // Border color for the line in the center

//   return (
//     <div>
//       <AppBar position="fixed" style={{ backgroundColor: navbarBackgroundColor, color: '#000000', boxShadow: 'none', borderBottom: `1px solid ${borderColor}` }}>
//         <Container>
//           {/* Upper Part of Navbar */}
//           <Toolbar style={{ justifyContent: 'space-between' }}>
//             <Box display="flex" alignItems="center" style={{ marginLeft: logoMarginLeft }}>
//               <img src="/logo.png" alt="Logo" style={{ height: 50, width: logoWidth }} />
//             </Box>
//             <Box display="flex" alignItems="center" style={{ gap: '10px', position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
//               <IconButton color="inherit">
//                 <FacebookIcon />
//               </IconButton>
//               <IconButton color="inherit">
//                 <LinkedInIcon />
//               </IconButton>
//               <IconButton color="inherit">
//                 <InstagramIcon />
//               </IconButton>
//             </Box>
//             <Box display="flex" alignItems="center" style={{ gap: '10px', marginLeft: 'auto' }}>
//               <Box display="flex" alignItems="center" style={{ paddingRight: '20px', borderRight: `1px solid ${borderColor}` }}>
//                 <CallIcon style={{ color: '#000', marginRight: '10px' }} />
//                 <Box>
//                   <Typography variant="body2" style={{ color: '#8e8e8e', fontSize: '12px' }}>Call Agent</Typography>
//                   <Typography variant="body1" style={{ color: '#000', fontSize: '14px' }}>075 060 97207</Typography>
//                 </Box>
//               </Box>
//               <Box display="flex" alignItems="center" style={{ paddingLeft: '20px' }}>
//                 <EmailIcon style={{ color: '#000', marginRight: '10px' }} />
//                 <Box>
//                   <Typography variant="body2" style={{ color: '#8e8e8e', fontSize: '12px' }}>Send Email</Typography>
//                   <Typography variant="body1" style={{ color: '#000', fontSize: '14px' }}>contact@rapidservicesolutions.co.uk</Typography>
//                 </Box>
//               </Box>
//             </Box>
//           </Toolbar>

//           <div style={{ width: '100%', height: '1px', backgroundColor: borderColor }}></div> {/* Line in the center */}

//           {/* Lower Part of Navbar */}
//           <Toolbar style={{ justifyContent: 'space-between' }}>
//             <Box display="flex" alignItems="center">
//               <Button color="inherit" style={{ marginLeft: '20px', marginRight: '30px' }}>Home</Button>
//               <Button color="inherit" style={{ marginRight: '30px' }}>About</Button>
//               <Button color="inherit" style={{ marginRight: '30px' }}>Course</Button>
//               <Button color="inherit" style={{ marginRight: '30px' }}>Services</Button>
//               <Button color="inherit" style={{ marginRight: '30px' }}>News</Button>
//               <Button color="inherit" style={{ marginRight: '30px' }}>Contact</Button>
//             </Box>
//             <Box display="flex" alignItems="center" style={{ gap: '10px' }}>
//               <Box display="flex" alignItems="center" style={{ paddingRight: '20px', borderRight: `1px solid ${borderColor}` }}>
//                 <PersonIcon style={{ color: '#000', marginRight: '5px' }} />
//                 <Typography variant="body2" style={{ color: '#000', fontSize: '14px' }}>Sign in / Register</Typography>
//               </Box>
//               <IconButton color="inherit">
//                 <SearchIcon />
//               </IconButton>
//               <IconButton color="inherit">
//                 <ShoppingCartIcon />
//               </IconButton>
//             </Box>
//           </Toolbar>
//         </Container>
//       </AppBar>
//       <Toolbar /> {/* This is to push down the content below the fixed navbar */}
//     </div>
//   );
// };

// export default Navbar;

import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const logoWidth = 200; // Adjust the width of your logo
  const logoMarginLeft = 0; // Adjust the margin-left for your logo
  const navbarBackgroundColor = "#ffffff"; // Background color for both navbars
  const borderColor = "#e0e0e0"; // Border color for the line in the center

  const navigate = useNavigate(); // Using useNavigate for navigation

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div>
      <AppBar
        position="fixed"
        style={{
          backgroundColor: navbarBackgroundColor,
          color: "#000000",
          boxShadow: "none",
          borderBottom: `1px solid ${borderColor}`,
        }}
      >
        <Container>
          <Toolbar style={{ justifyContent: "space-between" }}>
            <Box
              display="flex"
              alignItems="center"
              style={{ marginLeft: logoMarginLeft }}
            >
              <img
                src="/logo.png"
                alt="Logo"
                style={{ height: 50, width: logoWidth }}
              />
            </Box>
            <Box
              display="flex"
              alignItems="center"
              style={{
                gap: "10px",
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <IconButton color="inherit">
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit">
                <LinkedInIcon />
              </IconButton>
              <IconButton color="inherit">
                <InstagramIcon />
              </IconButton>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              style={{ gap: "10px", marginLeft: "auto" }}
            >
              <Box
                display="flex"
                alignItems="center"
                style={{
                  paddingRight: "20px",
                  borderRight: `1px solid ${borderColor}`,
                }}
              >
                <CallIcon style={{ color: "#000", marginRight: "10px" }} />
                <Box>
                  <Typography
                    variant="body2"
                    style={{ color: "#8e8e8e", fontSize: "12px" }}
                  >
                    Call Agent
                  </Typography>
                  <Typography
                    variant="body1"
                    style={{ color: "#000", fontSize: "14px" }}
                  >
                    075 060 97207
                  </Typography>
                </Box>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                style={{ paddingLeft: "20px" }}
              >
                <EmailIcon style={{ color: "#000", marginRight: "10px" }} />
                <Box>
                  <Typography
                    variant="body2"
                    style={{ color: "#8e8e8e", fontSize: "12px" }}
                  >
                    Send Email
                  </Typography>
                  <Typography
                    variant="body1"
                    style={{ color: "#000", fontSize: "14px" }}
                  >
                    contact@rapidservicesolutions.co.uk
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Toolbar>
          <div
            style={{
              width: "100%",
              height: "1px",
              backgroundColor: borderColor,
            }}
          ></div>{" "}
          {/* Line in the center */}
          <Toolbar style={{ justifyContent: "space-between" }}>
            <Box display="flex" alignItems="center">
              <Button
                color="inherit"
                style={{ marginLeft: "0px", marginRight: "30px" }}
                onClick={() => handleNavigate("/")}
              >
                Home
              </Button>
              <Button
                color="inherit"
                style={{ marginRight: "30px" }}
                onClick={() => handleNavigate("/about")}
              >
                About
              </Button>
              <Button
                color="inherit"
                style={{ marginRight: "30px" }}
                onClick={() => handleNavigate("/course")}
              >
                Course
              </Button>
              <Button
                color="inherit"
                style={{ marginRight: "30px" }}
                onClick={() => handleNavigate("/services")}
              >
                Services
              </Button>
              <Button
                color="inherit"
                style={{ marginRight: "30px" }}
                onClick={() => handleNavigate("/news")}
              >
                News
              </Button>
              <Button
                color="inherit"
                style={{ marginRight: "30px" }}
                onClick={() => handleNavigate("/contact")}
              >
                Contact
              </Button>
            </Box>
            <Box display="flex" alignItems="center" style={{ gap: "10px" }}>
              <Box
                display="flex"
                alignItems="center"
                style={{
                  paddingRight: "20px",
                  borderRight: `1px solid ${borderColor}`,
                }}
              >
                <PersonIcon style={{ color: "#000", marginRight: "5px" }} />
                <Typography
                  variant="body2"
                  style={{ color: "#000", fontSize: "14px" }}
                >
                  Sign in / Register
                </Typography>
              </Box>
              <IconButton color="inherit">
                <SearchIcon />
              </IconButton>
              <IconButton color="inherit">
                <ShoppingCartIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />{" "}
      {/* This is to push down the content below the fixed navbar */}
    </div>
  );
};

export default Navbar;
