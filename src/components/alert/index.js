import { Box, IconButton } from "@material-ui/core";
import { Alert, Collapse, Stack } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";
import CloseIcon from "@mui/icons-material/Close";
import "./index.css";
import Button from "@mui/material/Button";

export function ActionAlerts({ message, link }) {
  const navigate = useNavigate();
  const onCloseHandler = () => {
    navigate(`/${link}`);
  };

  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert className="alert" onClose={onCloseHandler}>
        {message}
      </Alert>
    </Stack>
  );
}

export function SuccessAlerts({ message }) {
  const [open, setOpen] = useState(true);

  return (
    <Box sx={{ width: "100%" }}>
      <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {message}
        </Alert>
      </Collapse>
    </Box>
  );
}

export function ErrorAlerts({ message }) {
  const [open, setOpen] = useState(true);

  return (
    <Box sx={{ width: "100%" }}>
      <Collapse in={open}>
        <Alert
          severity="error"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {message}
        </Alert>
      </Collapse>
    </Box>
  );
}
