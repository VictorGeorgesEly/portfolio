import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import React from "react";

interface DialogBoxProps {
  project: {
    id: number;
    name: string;
    description: string;
  };
  open: boolean;
  handleClose: () => void;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogBox({
  project,
  open,
  handleClose,
}: DialogBoxProps): JSX.Element {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{project.name}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          {project.description}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="secondary" onClick={handleClose}>
          Fermer
        </Button>
      </DialogActions>
    </Dialog>
  );
}
