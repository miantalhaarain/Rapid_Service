import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import EmailIcon from "@mui/icons-material/Email";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined"; // Changed to outlined cart icon
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";

import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const Navbar = () => {
  const logoWidth = 150; // Adjust the width of your logo
  const logoMarginLeft = 0; // Adjust the margin-left for your logo
  const navbarBackgroundColor = "#ffffff"; // Background color for both navbars
  const borderColor = "#e0e0e0"; // Border color for the line in the center

  const navigate = useNavigate(); // Using useNavigate for navigation
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleNavigate = (path) => {
    navigate(path);
  };

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerList = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {["Home", "About", "Course", "Services", "News", "Contact"].map(
          (text) => (
            <ListItem
              button
              key={text}
              onClick={() => handleNavigate(`/${text.toLowerCase()}`)}
            >
              <ListItemText primary={text} />
            </ListItem>
          )
        )}
      </List>
    </Box>
  );

  return (
    <div>
      <AppBar
        position="fixed"
        style={{
          backgroundColor: navbarBackgroundColor,
          color: "#000000",
          boxShadow: "none",
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
            {!isSmallScreen && (
              <Box
                display="flex"
                alignItems="center"
                style={{
                  gap: "0px",
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                <IconButton color="inherit">
                  <img
                    src="Link (3).png"
                    alt="LinkedIn Icon"
                    style={{
                      width: 40,
                      height: 40,
                      backgroundColor: "#F1F2F6",
                      borderRadius: "100%",
                      padding: -10,
                    }}
                  />
                </IconButton>
                <IconButton color="inherit">
                  <img
                    src="Link (1).png"
                    alt="LinkedIn Icon"
                    style={{
                      width: 40,
                      height: 40,
                      backgroundColor: "#F1F2F6",
                      borderRadius: "100%",
                      padding: -10,
                    }}
                  />
                </IconButton>
                <IconButton color="inherit">
                  <img
                    src="Link (2).png"
                    alt="LinkedIn Icon"
                    style={{
                      width: 40,
                      height: 40,
                      backgroundColor: "#F1F2F6",
                      borderRadius: "100%",
                      padding: -10,
                    }}
                  />
                </IconButton>
              </Box>
            )}
            <Box
              display="flex"
              alignItems="center"
              style={{ gap: "0px", marginLeft: "auto" }}
            >
              {!isSmallScreen && (
                <Box
                  display="flex"
                  alignItems="center"
                  style={{
                    paddingRight: "10px",
                    borderRight: `1px solid ${borderColor}`,
                    // marginLeft: "20px",
                  }}
                >
                  <img
                    src="Container.png"
                    alt="Call Icon"
                    style={{ width: 30, height: 30, marginRight: "10px" }}
                  />
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
              )}
              {!isSmallScreen && (
                <Box
                  display="flex"
                  alignItems="center"
                  style={{ paddingLeft: "20px" }}
                >
                  <IconButton color="inherit">
                    <img
                      src="Icon (1).png"
                      alt="Email Icon"
                      style={{
                        width: 30,
                        height: 30,
                        marginRight: "10px",
                      }}
                    />
                  </IconButton>
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
              )}
              {isSmallScreen && (
                <IconButton color="inherit" onClick={toggleDrawer(true)}>
                  <MenuIcon />
                </IconButton>
              )}
            </Box>
          </Toolbar>
          <div
            style={{
              width: "100%", // Changed from 100vw to 100%
              height: "1px",
              backgroundColor: borderColor,
              marginLeft: 0,
              marginRight: 0,
              left: 0, // Added this
              right: 0, // Added this
              position: "absolute", // Added this
            }}
          ></div>{" "}
          {/* Line in the center */}
          {!isSmallScreen && (
            <Toolbar style={{ justifyContent: "space-between" }}>
              <Box display="flex" alignItems="center">
                <Button
                  color="inherit"
                  style={{ marginLeft: "0px", marginRight: "40px" }}
                  onClick={() => handleNavigate("/")}>
                  Home
                </Button>
                <Button
                  color="inherit"
                  style={{ marginRight: "40px" }}
                  onClick={() => handleNavigate("/about")}>
                  About
                </Button>
                <Button
                  color="inherit"
                  style={{ marginRight: "40px" }}
                  onClick={() => handleNavigate("/course")}>
                  Course
                </Button>
                <Button
                  color="inherit"
                  style={{ marginRight: "40px" }}
                  onClick={() => handleNavigate("/services")}>
                  Services
                </Button>
                <Button
                  color="inherit"
                  style={{ marginRight: "40px" }}
                  onClick={() => handleNavigate("/news")}>
                  News
                </Button>
                <Button
                  color="inherit"
                  style={{ marginRight: "40px" }}
                  onClick={() => handleNavigate("/contact")}>
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
                  <PersonIcon style={{ color: "#8e8e8e", marginRight: "5px" }} />
                  <Typography
                    variant="body2"
                    style={{ color: "#8e8e8e", fontSize: "14px" }} // Changed to grey color
                  >
                    Sign in / Register
                  </Typography>
                </Box>
                <IconButton color="inherit">
                  <SearchIcon />
                </IconButton>
                <IconButton color="inherit">
                  <ShoppingCartIcon /> {/* Changed to outlined cart icon */}
                </IconButton>
              </Box>
            </Toolbar>
          )}
        </Container>
      </AppBar>
      <Toolbar />{" "}
      {/* This is to push down the content below the fixed navbar */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerList()}
      </Drawer>
    </div>
  );
};

export default Navbar;