import React from "react";
import Grid from "@mui/material/Grid";
import profilePic from "../../img/profilepic.jpg";
import Box from "@mui/material/Box";

const Home = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={12} sm={12} md={6}>
          <img
            style={{
              display: "block",
              width: "400px",
              minWidth: "352px",
              height: "400px",
              margin: "9rem auto",
              border: "none",
              borderRadius: "50%",
              position: "relative",
            }}
            src={profilePic}
            alt="profile pic"
            className="profilePic"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <h1
            className="title"
            style={{
              display: "block",
              fontSize: "70px",
              padding: "50px",
              margin: "2rem auto",
            }}
          >
            I'm a <br /> Front-End <br /> Developer <br /> and <br /> UI
            Designer
          </h1>
        </Grid>
        <Grid item xs={12}>
          <h1
            className="sentence"
            style={{
              padding: "4rem",
              display: "block",
              textAlign: "center",
              justifyItems: "center",
              position: "relative",
            }}
          >
            A MEANİNGFUL SENTENCE ABOUT SOMETHİNG
          </h1>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
