import React from "react";
import { IconButton, Link, useStyleConfig } from "@chakra-ui/react";

export default function RoundedIconButton({
  href,
  ...props
}: {
  [p: string]: any;
}) {
  const innerIconButton = (
    <IconButton
      {...props}
      sx={useStyleConfig("RoundedIconButton")}
      isRound
      aria-label="Turn off dark mode"
    />
  );
  return href && new URL(href) ? (
    <Link href={href} isExternal>
      {innerIconButton}
    </Link>
  ) : (
    innerIconButton
  );
}
