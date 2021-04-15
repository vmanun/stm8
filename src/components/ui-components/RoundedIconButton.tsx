import React from "react";
import {
  IconButton,
  IconButtonProps,
  Link,
  useStyleConfig,
} from "@chakra-ui/react";

type RoundedIconButtonProps = {
  href?: URL;
} & IconButtonProps;

export default function RoundedIconButton({
  href,
  ...props
}: RoundedIconButtonProps) {
  const innerIconButton = (
    <IconButton
      {...props}
      sx={useStyleConfig("RoundedIconButton")}
      isRound
      aria-label="Turn off dark mode"
    />
  );
  return href ? (
    <Link href={href.toString()} isExternal>
      {innerIconButton}
    </Link>
  ) : (
    innerIconButton
  );
}
