import React from "react";
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
};

export default function CustomModal(props) {
  const ImgLink = `https://image.tmdb.org/t/p/original`;

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
          <img
            src={ImgLink + props?.data?.poster_path}
            alt="Poster"
            className="rounded-3xl float-left p-4 w-1/2"
          />
          <div className=" ">
            <Typography
              id="transition-modal-title"
              variant="h6"
              component={"span"}
              sx={{
                fontSize: "1.875rem",
                marginTop: "2.5rem",
                marginBottom: "0.125rem",
                borderBottomWidth: 2,
              }}
            >
              {props?.data?.title || props?.data?.name}
            </Typography>
            <Typography
              id="transition-modal-description"
              component={"p"}
              sx={{ fontSize: "1.875rem", marginTop: "2.5rem" }}
            >
              Description:
            </Typography>

            <Typography
              id="transition-modal-description"
              component={"p"}
              sx={{ fontSize: "1rem", marginTop: "2.5rem" }}
            >
              {props?.data?.overview}
            </Typography>
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
          </div>
        </Box>
      </Fade>
    </Modal>
  );
}
// <Modal
//   aria-labelledby="transition-modal-title"
//   aria-describedby="transition-modal-description"
//   open={props.myOpen}
//   onClose={props?.myClose}
//   closeAfterTransition
//   slots={{ backdrop: Backdrop }}
//   slotProps={{
//     backdrop: {
//       timeout: 500,
//     },
//   }}
// >
//   <Fade in={props?.myOpen}>
//     <Box sx={style}>
//       <Typography
//         id="transition-modal-title"
//         variant="h6"
//         component="h5"
//         sx={{ color: "black" }}
//       >
//         Text in a modal
//       </Typography>
//       <Typography
//         id="transition-modal-description"
//         sx={{ color: "black", padding: "1rem" }}
//       >
//         Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//       </Typography>
//       <Button
//         onClick={props?.myClose}
//         sx={{
//           position: "absolute",
//           bottom: "8px",
//           right: "8px",
//           cursor: "pointer",
//           background: "transparent",
//           fontSize: "1rem",
//         }}
//       >
//         Close
//       </Button>
//     </Box>
//   </Fade>
// </Modal>
