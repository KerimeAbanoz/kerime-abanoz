import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import movieapp from "../../img/movieapp.jpg";
import contactapp from "../../img/contactapp.jpg";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70vw",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Project1() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button sx={{ fontSize: "2rem" }} onClick={handleOpen}>
        See Details
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            React Get Random People
          </Typography>
          <img src={contactapp} alt="" />
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          The purpose of this project is to improve my react skills by getting data from an API and rendering the data to the DOM. The user can see the data about random people and swipe between people by clicking on the New User button also add people to the table by clicking on the Add User button
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
