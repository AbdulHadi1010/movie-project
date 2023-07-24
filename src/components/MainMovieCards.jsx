import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
const style = {
  borderRadius: "12px",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
export default function MainMovieCards({ props }) {
  const ImgLink = `https://image.tmdb.org/t/p/original`;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="w-full hover:cursor-pointer">
      <img
        src={ImgLink + props.backdrop_path}
        alt="Poster"
        className="rounded "
      />
      <div className="font-bold absolute text-3xl text-left pt-16 py-4 pl-2 top-1/2">
        {props.title}
        <div className="font-semibold text-lg pt-4 w-1/2 text-justify">
          {props.overview}
        </div>
        {/* <button
          onClick={handleOpen}
          className="text-xl border-2 p-2 bg-slate-500 border-slate-500 rounded-lg mt-2"
        >
          Open modal
        </button> */}
      </div>
      {/* <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography
              id="transition-modal-title"
              variant="h6"
              component="h5"
              sx={{ color: "black" }} // Set text color to black
            >
              Text in a modal
            </Typography>
            <Typography
              id="transition-modal-description"
              sx={{ color: "black", padding: "1rem" }}
            >
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
            <Button
              onClick={handleClose}
              sx={{
                position: "absolute",
                bottom: "8px",
                right: "8px",
                cursor: "pointer",
                background: "transparent",
                fontSize: "1rem",
              }}
            >
              Close
            </Button>
          </Box>
        </Fade>
      </Modal> */}
    </div>
  );
}
