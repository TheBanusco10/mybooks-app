import { Link } from "expo-router";
import { Button, View } from "tamagui";

export default function Index() {
  return (
    <View m="$5">
      <Link href="/home" asChild>
        <Button>Ir a Home</Button>
      </Link>
    </View>
  )
}