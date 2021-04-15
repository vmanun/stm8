import React from "react";
import { Flex, InputGroup, InputRightElement } from "@chakra-ui/react";
import { MoonIcon, SearchIcon } from "@chakra-ui/icons";
import { MdAccountCircle } from "react-icons/md";

import { Logo } from "./Logo";
import TextInput from "./TextInput";
import RoundedIconButton from "./RoundedIconButton";
import { ScopedStyleSheet } from "../../declarations";

const styles: ScopedStyleSheet = {
  topNavBar: {
    padding: "5px 20px",
    alignItems: "center",
    justifyContent: "space-between",
    color: "gray.100",
    background: "gray.900",
  },
};

const TopNavBar = () => {
  return (
    <Flex as="nav" sx={styles.topNavBar}>
      <Logo />
      <InputGroup width="44%" maxWidth="500px" variant="filled" size="sm">
        <TextInput placeholder="Search tasks" />
        <InputRightElement>
          <SearchIcon />
        </InputRightElement>
      </InputGroup>
      <Flex justifyContent="space-between" width="26%" maxWidth="100px">
        <RoundedIconButton
          href={new URL("https://www.youtube.com/watch?v=dQw4w9WgXcQ")}
          icon={<MoonIcon />}
          aria-label="Turn off dark mode"
        />
        <RoundedIconButton
          icon={<MdAccountCircle size="25" />}
          aria-label="See your profile"
        />
      </Flex>
    </Flex>
  );
};

export default TopNavBar;
