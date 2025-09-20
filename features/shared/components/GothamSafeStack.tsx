import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { Stack, YStack } from "tamagui";
import GothamHeader from "./GothamHeader";

const HORIZONTAL_PADDING = 20;

export default function GothamSafeStack({
  children,
}: {
  children: React.ReactNode;
}) {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaProvider>
      <YStack flex={1} bg="$background">
        <Stack
          pt={insets.top}
          pb={insets.bottom}
          pl={insets.left + HORIZONTAL_PADDING}
          pr={insets.right + HORIZONTAL_PADDING}
          flex={1}
        >
          <GothamHeader />
          {children}
        </Stack>
      </YStack>
    </SafeAreaProvider>
  );
}
