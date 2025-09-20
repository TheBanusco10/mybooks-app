import { extendTokensWithAlpha } from "@/features/shared/utils/colors";
import { tokens } from "@/features/shared/utils/tokens";
import { defaultConfig } from "@tamagui/config/v4";
import { createTamagui } from "tamagui";

const tokensWithAlpha = extendTokensWithAlpha(tokens);

export const config = createTamagui({
  ...defaultConfig,
  tokens: {
    ...defaultConfig.tokens,
    ...tokensWithAlpha,
  },
});
