import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Stack,
} from "@mui/material";
import ModalClose from "@mui/joy/ModalClose";
import { useState } from "react";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const GetAppointmentModal = ({ open, close }) => {
  useState(() => {}, [open]);
  console.log(close);

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={close}
      fullWidth={true}
      maxWidth="md"
    >
      <Stack direction="block" justifyContent="center" alignItems="center">
        <DialogTitle>
          <Typography variant="h2">Tebrikler</Typography>
        </DialogTitle>
      </Stack>
      <DialogContent>
        <Stack direction="block" justifyContent="center" alignItems="center">
          <Typography variant="h6">
            Randevunuz başarıyla oluşturulmuştur.
          </Typography>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default GetAppointmentModal;
