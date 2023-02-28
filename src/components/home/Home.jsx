import React from "react";
import Grid from "@mui/material/Grid";
import "./Home.css";
import profilePic from "../../img/profilepic.jpg";
import Box from "@mui/material/Box";

const Home = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <h1 className="title">
            I'm a <br /> Front-End <br /> Developer <br /> and <br /> UI
            Designer
          </h1>
        </Grid>
        <Grid item xs={4}>
          <img src={profilePic} alt="profile pic" className="profilePic" />
        </Grid>
        <Grid item xs={12}>
          <h1 className="sentence">A MEANİNGFUL SENTENCE ABOUT SOMETHİNG</h1>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;

/* <Grid container spacing={2}>
  <Grid item xs={8}>
    <Item>xs=8</Item>
  </Grid>
  <Grid item xs={4}>
    <Item>xs=4</Item>
  </Grid>
  <Grid item xs={4}>
    <Item>xs=4</Item>
  </Grid>
  <Grid item xs={8}>
    <Item>xs=8</Item>
  </Grid>
</Grid> */
