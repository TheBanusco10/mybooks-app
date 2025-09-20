import AuthLayout from "@/features/auth/components/AuthLayout";
import { AuthProvider } from "@/features/auth/contexts/auth";
import "@/features/shared/i18n";
import { config } from "@/tamagui.config";
import { TamaguiProvider, Theme } from "tamagui";

type Conf = typeof config;

// make imports typed
declare module "tamagui" {
  interface TamaguiCustomConfig extends Conf {}
}

export default function RootLayout() {
  return (
    <TamaguiProvider config={config}>
      <AuthProvider>
        <Theme name="green">
          <AuthLayout />
        </Theme>
      </AuthProvider>
    </TamaguiProvider>
  );
}
