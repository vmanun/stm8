import React from "react";
import { IconButton, useStyleConfig } from "@chakra-ui/react";

export default function RoundedIconButton({ ...props }) {
  return (
    <IconButton
      {...props}
      sx={useStyleConfig("RoundedIconButton")}
      isRound
      aria-label="Turn off dark mode"
    />
  );
}
