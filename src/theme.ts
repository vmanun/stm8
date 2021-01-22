import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools"

const theme = extendTheme({
    styles: {
        global: (props: Record<string, any>) => ({
            "body, html": {
                bg: mode("gray", "gray.900")(props),
                fonts: "serif",
            }
        })
    }
});

export default theme;