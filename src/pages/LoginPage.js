import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
function LoginPage() {
  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();

  function handleSubmit(event) {
    event.preventDefault();

    let from = location.state?.from?.pathname || "/";
    let formData = new FormData(event.currentTarget);
    let username = formData.get("username");

    auth.login(username, () => {
      navigate(from, { replace: true });
    });
  }

  return (
    <div>
      <Box component="form" onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography textAlign={"center"} variant="h2">
            Unlimited movies, TV
          </Typography>
          <Typography textAlign={"center"} variant="h2">
            shows, and more.
          </Typography>

          <TextField
            id="outlined-basic"
            name="username"
            label="Enter your name"
            variant="outlined"
            sx={{ width: 350, mt: 5 }}
          />
          <Button
            sx={{ width: 350, height: 50, mt: 1 }}
            variant="outlined"
            type="submit"
          >
            Get Started
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default LoginPage;
