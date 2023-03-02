import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import movieapp from "../../img/movieapp.jpg";

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
            React Movie Finder
          </Typography>
          <img src={movieapp} alt="" />
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            The aim of this project is to show the user some current popular
            movies and help the user to find some movies that they search for.
            In this project, tailwind is used for the designing and Firebase for
            the backend services. The user can see the info about the movie but
            they need to sign in to see the details. Also dark and light mode
            can be switched.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
