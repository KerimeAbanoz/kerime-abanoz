import React from "react";
import "./Home.css";
import profilePic from "../../img/profilepic.jpg";

const Home = () => {
  return (
    <div className="home">
      <div className="hello">
        <h1 className="title">I'm a <br /> Front-End <br /> Developer <br /> and <br /> UI Designer</h1>
        <img src={profilePic} alt="profile pic" className="profilePic" />
      </div>
      <h1 className="sentence">A MEANİNGFUL SENTENCE ABOUT SOMETHİNG</h1>
    </div>
  );
};

export default Home;
