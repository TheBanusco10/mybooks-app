import { defaultConfig } from '@tamagui/config/v4';
import { Drawer } from "expo-router/drawer";
import { createTamagui, TamaguiProvider } from 'tamagui';

// you usually export this from a tamagui.config.ts file
const config = createTamagui(defaultConfig)

type Conf = typeof config

// make imports typed
declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf { }
}

export default function RootLayout() {
  return (
    <TamaguiProvider config={config}>
      <Drawer>
        <Drawer.Screen name="index" options={{ title: 'Index', drawerLabel: "Index" }} />
        <Drawer.Screen name="home" options={{ title: 'Página de inicio', drawerLabel: "Inicio" }} />
      </Drawer>
    </TamaguiProvider>
  );
}