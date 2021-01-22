import React from "react";
import {
  Flex,
  HTMLChakraProps,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  useStyleConfig,
} from "@chakra-ui/react";
import { MoonIcon, SearchIcon } from "@chakra-ui/icons";
import { MdAccountCircle } from "react-icons/md";

import { Logo } from "./Logo";

const style: Record<string, HTMLChakraProps<any>> = {
  nav: {
    padding: "5px 20px",
    alignItems: "center",
    justifyContent: "space-between",
    color: "gray.100",
    bg: "gray.800",
  },
};

const TopNavBar = ({ ...props }) => {
  const iconButtonStyles = useStyleConfig("IconButton");
  const searchBarStyles = useStyleConfig("SearchBar");

  return (
    <Flex as="nav" {...style.nav}>
      <Logo />
      <InputGroup maxWidth="200px" variant="filled" size="sm">
        <Input placeholder="Search tasks" sx={searchBarStyles} />
        <InputRightElement>
          <SearchIcon />
        </InputRightElement>
      </InputGroup>
      <Flex justifyContent="space-between" width="85px">
        <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" isExternal>
          <IconButton
            icon={<MoonIcon />}
            sx={iconButtonStyles}
            isRound
            aria-label="Turn off dark mode"
          />
        </Link>
        <IconButton
          icon={<MdAccountCircle size="25" />}
          sx={iconButtonStyles}
          isRound
          aria-label="See your profile"
        />
      </Flex>
    </Flex>
  );
};

export default TopNavBar;
