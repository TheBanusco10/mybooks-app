import AuthLayout from "@/features/auth/components/AuthLayout";
import { AuthProvider } from "@/features/auth/contexts/auth";
import { defaultConfig } from "@tamagui/config/v4";
import { createTamagui, TamaguiProvider } from "tamagui";

// you usually export this from a tamagui.config.ts file
const config = createTamagui(defaultConfig);

type Conf = typeof config;

// make imports typed
declare module "tamagui" {
  interface TamaguiCustomConfig extends Conf {}
}

export default function RootLayout() {
  return (
    <TamaguiProvider config={config}>
      <AuthProvider>
        <AuthLayout />
      </AuthProvider>
    </TamaguiProvider>
  );
}
