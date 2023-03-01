import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Link,
  Slide,
  Typography,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import React, { useState } from "react";

interface DialogBoxProps {
  project: {
    id: number;
    name: string;
    description: string;
    technologies: string[];
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
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoaded = () => {
    setIsLoading(false);
  };
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
      {isLoading && (
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CircularProgress />
        </Box>
      )}
      <DialogContent>
        <Box
          sx={{
            maxHeight: "400px",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
          }}
        >
          <img
            src={project.photo}
            alt={`${project.name} image`}
            style={{ width: "100%", height: "auto" }}
            onLoad={handleImageLoaded}
            hidden={isLoading}
          />
        </Box>
        <DialogContentText id="alert-dialog-slide-description" sx={{ mt: 2 }}>
          {project.description}
        </DialogContentText>
        <Typography variant="body2" color="text.secondary">
          Technologies : {project.technologies.join(", ")}
        </Typography>
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
