import * as React from "react";
import { Image } from "@chakra-ui/react";
import logo from "../assets/images/logo.png";

export const Logo = ({ width = 50, height = 50, ...props }) => (
  <Image src={logo} style={{ width, height }} {...props} />
);
