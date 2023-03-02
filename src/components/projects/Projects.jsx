import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";
import Project4 from "./Project4";
import movieapp from "../../img/movieapp.jpg";
import contactapp from "../../img/contactapp.jpg";
import tasktracker from "../../img/tasktracker.jpg";
import randompeople from "../../img/randompeople.jpg";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function Projects() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box
      sx={{
        display: "block",
        bgcolor: "#28303e",
        width: "100%",
        height: "800px",
      }}
    >
      <h1>My projects</h1>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Project One" {...a11yProps(0)} />
          <Tab label="Project Two" {...a11yProps(1)} />
          <Tab label="Project Three" {...a11yProps(2)} />
          <Tab label="Project Four" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          value={value}
          index={0}
          dir={theme.direction}
        >
          <img
            style={{
              maxHeight: "500px",
            }}
            src={movieapp}
            alt=""
          />
          <Project1 />
        </TabPanel>
        <TabPanel
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          value={value}
          index={1}
          dir={theme.direction}
        >
          <img
            style={{
              maxHeight: "500px",
            }}
            src={contactapp}
            alt=""
          />
          <Project2 />
        </TabPanel>
        <TabPanel
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          value={value}
          index={2}
          dir={theme.direction}
        >
          <img
            style={{
              maxHeight: "500px",
            }}
            src={tasktracker}
            alt=""
          />
          <Project3 />
        </TabPanel>
        <TabPanel
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          value={value}
          index={3}
          dir={theme.direction}
        >
          <img
            style={{
              maxHeight: "500px",
            }}
            src={randompeople}
            alt=""
          />
          <Project4 />
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
