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
            React Contact Saver
          </Typography>
          <img src={contactapp} alt="" />
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            In this project, UI has two main area; one is a form that the user
            can enter new informations about people; such as name, phone number
            and gender and the other one is the list that the user can see,
            change or delete the informations that entered before. While
            developing this project, Firebase database is used and some other
            packages are; Material UI and it’s icons, Toastify.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
