import React, { Suspense } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import SuspenseLoader from "../components/common/SuspenseLoader";
import { Box } from "@mui/material";

const Main = () => {
  return (
    <>
      <Header />
      <Box>
        <Sidebar />
        <Suspense fallback={<SuspenseLoader />}>
          <Outlet />
        </Suspense>
      </Box>
    </>
  );
};

export default Main;
