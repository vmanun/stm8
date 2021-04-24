import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

import { TextInput } from "./components/TextInput";
import { RoundedIconButton } from "./components/RoundedIconButton";

export const theme = extendTheme({
  components: {
    RoundedIconButton,
    TextInput,
  },
  styles: {
    global: (props: Record<string, any>) => ({
      "body, html": {
        bg: mode("gray", "gray.800")(props),
        fonts: "serif",
      },
    }),
  },
  colors: {
    primary: "gray.800",
  },
});
