import Header from "@/components/header/Header";
import Container from "@/components/layout/Container";
import React from "react";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
};

export default Root;
