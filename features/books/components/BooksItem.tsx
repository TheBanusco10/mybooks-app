import { Image } from "tamagui";
import { Row } from "@/features/shared/interfaces/database";

export default function BooksItem({ book }: { book: Row<"books"> }) {
  return (
    <Image
      source={{ width: 144, height: 230, uri: book.image_url || "" }}
      objectFit="cover"
      borderRadius="$2"
      boxShadow="0px 5px 10px rgba(0, 0, 0, .3)"
    />
  );
}
