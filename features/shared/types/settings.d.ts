import type { ThemeEnum } from "~/enums/ThemeEnum";
import type { LocaleEnum } from "~/enums/LocaleEnum";

interface Settings {
  locale?: LocaleEnum;
  theme?: ThemeEnum;
}

export type { Settings };
