import * as React from "react";
import { Image, ImageProps } from "@chakra-ui/react";
import logo from "../../assets/images/logo.png";

export const Logo = ({ width = 50, height = 50, ...props }: ImageProps) => (
  <Image src={logo} width={width} height={height} {...props} />
);
