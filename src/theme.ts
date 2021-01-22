import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools"

export const theme = extendTheme({
    components: {
        IconButton: {
            baseStyle: {
                color: "gray.800",
                background: "gray.100",
                _focus: {}
            },
        },
        SearchBar: {
            baseStyle: {
                bg: "gray.700",
                _placeholder: {
                    color: "gray.400",
                },
                _focus: {
                    bg: "gray.700",
                    
                }
            }
        }
    },
    styles: {
        global: (props: Record<string, any>) => ({
            "body, html": {
                bg: mode("gray", "gray.900")(props),
                fonts: "serif",
            }
        })
    }
});