import React, { useEffect, useState } from "react";
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
  bgcolor: "#242424",
  border: "2px solid #fff",
  boxShadow: 24,
  display: "flex",
  p: 4,
  minWidth: "70%",
  maxHeight: "50%",
  // overflow: "auto",
};

export default function CustomModal(props) {
  const ImgLink = `https://image.tmdb.org/t/p/original`;
  const [width, setWidth] = useState(window.innerWidth);
  const breakPoint = 1000;
  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={props?.myOpen}
      onClose={props?.myClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={props?.myOpen}>
        <Box sx={style}>
          {width > breakPoint ? (
            <img
              src={ImgLink + props?.data?.poster_path}
              alt="Poster"
              className="rounded-xl float-left p-4 w-1/2"
            />
          ) : (
            <div></div>
          )}
          <div className="overflow-y-auto">
            <Typography id="transition-modal-title" variant="h6" component="h5">
              <div className="text-xl md:text-2xl lg:text-3xl my-2 md:my-5 border-b-2 ">
                {props?.data?.title || props?.data?.name}
              </div>
            </Typography>
            <Typography id="transition-modal-description">
              <div className="text-xl mt-10">Description: </div>
              <div className="text-xl mt-5 ">{props?.data?.overview}</div>
            </Typography>
          </div>
          <Button
            onClick={props?.myClose}
            sx={{
              position: "absolute",
              bottom: "8px",
              right: "8px",
              cursor: "pointer",
              background: "transparent",
              border: "2px solid #808080",
              fontSize: "1rem",
            }}
          >
            Close
          </Button>
        </Box>
      </Fade>
    </Modal>
  );
}
