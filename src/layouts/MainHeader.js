import React, { useState, useEffect, useRef } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function MainHeader() {
  const [widthHeader, setWidthHeader] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    setWidthHeader(ref.current.clientWidth);
  }, []);
  const auth = useAuth();
  let navigate = useNavigate();

  if (!auth.user) {
    return <p>You are not logged in.</p>;
  }
  return (
    <Box
      ref={ref}
      sx={{
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "row",
      }}
    >
      <AppBar position="static">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ m: 1 }}>
            <Link to="/">
              <img src="../logo.png" alt="" width={200} />
            </Link>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              mb: 1,
              mr: 1,
            }}
          >
            <h2 style={{ margin: 10 }}>
              {/* {auth.user.username === "" ? "Guess" : auth.user.username} */}
              {widthHeader < 500 ? "" : auth.user.username}
            </h2>
            <Button
              sx={{ height: 30, minWidth: 20 }}
              variant="contained"
              color="success"
              onClick={() => {
                auth.logout(() => navigate("/"));
              }}
            >
              Sign out
            </Button>
          </Box>
        </Box>
      </AppBar>
    </Box>
  );
}

export default MainHeader;
