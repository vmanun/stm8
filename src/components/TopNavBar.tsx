import React from "react";
import {
  Flex,
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

const TopNavBar = ({ ...props }) => {
  const iconButtonStyles = useStyleConfig("IconButton");
  const searchBarStyles = useStyleConfig("SearchBar");
  const navBarStyles = useStyleConfig("TopNavBar");

  return (
    <Flex as="nav" sx={navBarStyles}>
      <Logo />
      <InputGroup width="44%" maxWidth="500px" variant="filled" size="sm">
        <Input placeholder="Search tasks" sx={searchBarStyles} />
        <InputRightElement>
          <SearchIcon />
        </InputRightElement>
      </InputGroup>
      <Flex justifyContent="space-between" width="26%" maxWidth="100px">
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
