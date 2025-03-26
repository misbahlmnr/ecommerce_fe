import { createSystem } from "@chakra-ui/react";
import { foundations } from "./foundations";
import { config } from "./config";
import { styles } from "./styles";

export const system = createSystem(config, {
  globalCss: styles,
  theme: {
    tokens: {
      ...foundations,
    },
  },
});
