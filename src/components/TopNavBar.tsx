import React from "react";
import { Box, IconButton } from "@chakra-ui/react";
import { MoonIcon } from "@chakra-ui/icons";

import { Logo } from "./Logo";

const TopNavBar = ({ ...props }) => {
  return (
    <Box as="nav" bg="gray.200">
      <Logo />
      <IconButton
        color="gray.900"
        icon={<MoonIcon />}
        aria-label="Turn off dark mode"
      />
    </Box>
  );
};

export default TopNavBar;
