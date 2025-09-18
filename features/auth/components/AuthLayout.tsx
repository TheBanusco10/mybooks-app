import useAuth from "@/features/auth/hooks/useAuth";
import { Stack } from "expo-router";

export default function AuthLayout() {
  const { session } = useAuth();

  const isLoggedIn = session?.user !== undefined;

  return (
    <Stack>
      <Stack.Protected guard={isLoggedIn}>
        <Stack.Screen name="(tabs)" options={{ title: "Index", headerShown: false }} />
        <Stack.Screen name="books/[id]" options={{ title: "BookDetails", headerShown: false }} />
      </Stack.Protected>
      <Stack.Protected guard={!isLoggedIn}>
        <Stack.Screen name="sign-in" options={{ title: "Sign in", headerShown: false }} />
      </Stack.Protected>
    </Stack>
  );
}
