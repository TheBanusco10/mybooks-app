import useAuth from "@/features/auth/hooks/useAuth";
import { Book, LogOut } from "@tamagui/lucide-icons";
import { Tabs } from "expo-router";
import { Button } from "tamagui";

export default function RootLayout() {
  const { logOut } = useAuth();

  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarLabel: "Libros",
          tabBarIcon: () => <Book />,
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
