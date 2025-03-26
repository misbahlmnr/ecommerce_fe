import { createSystem } from "@chakra-ui/react";
import { foundations } from "./foundations";
import { config } from "./config";

export const system = createSystem(config, {
  globalCss: {
    body: {
      bg: "gray.50",
      color: "gray.900",
      _dark: {
        bg: "gray.800",
        color: "gray.50",
      },
    },
  },
  theme: {
    tokens: {
      ...foundations,
    },
  },
});
