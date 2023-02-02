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
        <Box />
      </Stack>
    </div>
  );
}

export default MainLayout;
