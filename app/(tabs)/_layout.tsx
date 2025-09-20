import useAuth from "@/features/auth/hooks/useAuth";
import { Book, LogOut } from "@tamagui/lucide-icons";
import { Tabs } from "expo-router";
import { Button, useTheme } from "tamagui";

export default function RootLayout() {
  const { logOut } = useAuth();

  const theme = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: theme.background.val,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarLabel: "Libros",
          tabBarActiveTintColor: theme.color10.val,
          tabBarIcon: ({ color }) => <Book color={color as any} />,
        }}
      />
      <Tabs.Screen
        name="logout"
        options={{
          tabBarButton: (props) => (
            <Button chromeless onPress={logOut}>
              <LogOut color="red" />
            </Button>
          ),
        }}
        listeners={undefined} // evita warnings
      />
    </Tabs>
  );
}
