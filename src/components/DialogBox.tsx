import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Link,
  Slide,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import React from "react";

interface DialogBoxProps {
  project: {
    id: number;
    name: string;
    description: string;
    url: string;
    photo: string;
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
      fullWidth
      maxWidth="md"
    >
      <DialogTitle>{project.name}</DialogTitle>
      <DialogContent>
        <Box
          sx={{
            maxHeight: "400px",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={project.photo}
            alt="Project"
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
        <DialogContentText id="alert-dialog-slide-description">
          {project.description}
        </DialogContentText>
        <Divider sx={{ mb: 2, mt: 2 }} />
        <Link
          href={project.url}
          underline="none"
          variant="body2"
          color="secondary"
          target="_blank"
          rel="noopener noreferrer"
        >
          {project.url}
        </Link>
      </DialogContent>
      <DialogActions>
        <Button color="secondary" onClick={handleClose}>
          Fermer
        </Button>
      </DialogActions>
    </Dialog>
  );
}
