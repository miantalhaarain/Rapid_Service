import React from "react";
import {
  Card,
  CardContent,
  Button,
  CardActions,
  Typography,
  CardMedia,
} from "@mui/material";

const FireWardenCard = () => {
  return (
    <Card
      sx={{
        display: "flex",
        backgroundColor: "#262F69",
        color: "#fff",
        borderRadius: "8px",
        maxWidth: 440,
      }}
    >
      <div style={{ position: "relative", width: "100%" }}>
        {/* Using images from the public folder */}
        <CardMedia
          component="img"
          sx={{ width: "50%", position: "absolute", left: 0 }}
          image="/Vector.png" // Assuming 'Vector.png' is the name of the vector image
          alt="Decorative Line"
        />
        <CardMedia
          component="img"
          sx={{ width: "100%", height: "100%", position: "absolute", left: 0 }}
          image="/Image(7).png" // Assuming 'Image(7).png' is the fireman image
          alt="Fire Warden"
        />
        <CardContent
          sx={{ flex: "1 0 auto", position: "absolute", right: 0, p: 2 }}
        >
          <Typography variant="h5" component="div">
            FIRE WARDEN
          </Typography>
          <CardActions>
            <Button size="small" variant="contained" sx={{ marginRight: 1 }}>
              Book Now
            </Button>
            <Button size="small" variant="outlined">
              View Details
            </Button>
          </CardActions>
        </CardContent>
      </div>
    </Card>
  );
};

export default FireWardenCard;
