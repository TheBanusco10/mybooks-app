import { defaultConfig } from '@tamagui/config/v4'
import { Button, TamaguiProvider, View, createTamagui } from 'tamagui'

// you usually export this from a tamagui.config.ts file
const config = createTamagui(defaultConfig)

type Conf = typeof config

// make imports typed
declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf { }
}

const Index = () => {
  return (
    <TamaguiProvider config={config}>
      <View m="$4">
        <Button theme="blue">Click me</Button>
      </View>
    </TamaguiProvider>
  )
}

export default Index;