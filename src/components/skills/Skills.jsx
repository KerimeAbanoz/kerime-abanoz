import React from "react";

const Skills = () => {
  return (
    <div style={{ display: "flex", flextWrap: "wrap" }}>
      <div style={{ flex: "50%" }}>
        <h1>Languages and Libraries</h1>
        <ul>
          <li>HTML5</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>SQL</li>
          <li>Python</li>
          <li>React.js</li>
          <li>Vue.js</li>
        </ul>
      </div>
      <div style={{ flex: "50%" }}>
        <h1>Tools</h1>
      </div>
      <div style={{ flex: "50%" }}>Others</div>
    </div>
  );
};

export default Skills;
