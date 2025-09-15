import { defaultConfig } from '@tamagui/config/v4';
import { Stack } from 'expo-router';
import { createTamagui, TamaguiProvider } from 'tamagui';

// you usually export this from a tamagui.config.ts file
const config = createTamagui(defaultConfig)

type Conf = typeof config

// make imports typed
declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf { }
}

const isLoggedIn = true;

export default function RootLayout() {
  return (
    <TamaguiProvider config={config}>
      <Stack>
        <Stack.Protected guard={isLoggedIn}>
          <Stack.Screen name="(tabs)" options={{ title: 'Index' }} />
        </Stack.Protected>
        <Stack.Protected guard={!isLoggedIn}>
          <Stack.Screen name="sign-in" options={{ title: 'Sign in' }} />
        </Stack.Protected>
      </Stack>
    </TamaguiProvider>
  );
}