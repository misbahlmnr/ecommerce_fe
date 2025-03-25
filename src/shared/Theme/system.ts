import { createSystem } from "@chakra-ui/react";
import { foundations } from "./foundations";
import { config } from "./config";

export const system = createSystem(config, {
  theme: {
    tokens: {
      ...foundations,
    },
  },
});
