import React from "react";
import "./body.scss";
// import { Box } from "@chakra-ui/react";

const BodyComponent = ({ children }: any) => {
  return <div className="min-h-screen">{children}</div>;
};

export default BodyComponent;
