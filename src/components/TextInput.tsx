import React from "react";
import { Input, useStyleConfig } from "@chakra-ui/react";

export default function TextInput({ ...props }) {
  return <Input type="text" sx={useStyleConfig("TextInput")} {...props} />;
}
