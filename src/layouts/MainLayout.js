import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Stack } from "@mui/material";
import MainHeader from "./MainHeader";
function MainLayout() {
  return (
    <div>
      <Stack>
        <MainHeader />
        <Outlet />
        <Box sx={{ flexGrow: 1 }} />
      </Stack>
    </div>
  );
}

export default MainLayout;
