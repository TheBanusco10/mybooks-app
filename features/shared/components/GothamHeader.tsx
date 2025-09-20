import { ArrowLeft } from "@tamagui/lucide-icons";
import { useRouter } from "expo-router";
import { Button } from "tamagui";

export default function GothamHeader() {
  const router = useRouter();

  return (
    <>
      {router.canGoBack() && (
        <Button
          onPress={() => router.back()}
          circular
          maxW="max-content"
          mb={2}
        >
          <ArrowLeft />
        </Button>
      )}
    </>
  );
}
