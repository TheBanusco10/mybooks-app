import useBookStatus from "@/features/books/hooks/useBookStatus";
import useBookType from "@/features/books/hooks/useBookType";
import { Row } from "@/features/shared/interfaces/database";
import { Link } from "expo-router";
import { Image, View, XStack } from "tamagui";

export default function BooksItem({ book }: { book: Row<"books"> }) {
  const { getStatusBackgroundColor } = useBookStatus();
  const { getTypeIcon } = useBookType();

  const BookTypeIcon = getTypeIcon({
    typeValue: book.type!,
    color: "$white",
    size: "$1",
  });

  const BookStatusColor = getStatusBackgroundColor(book.status!);

  return (
    <Link href={`/books/${book.id}`}>
      <View position="relative">
        <Image
          source={{ width: 144, height: 230, uri: book.image_url || "" }}
          objectFit="cover"
          boxShadow="0px 5px 10px rgba(0, 0, 0, .3)"
          rounded="$2"
        />
        <XStack
          position="absolute"
          l={0}
          t={0}
          justify="space-between"
          width="100%"
          bg="$black-50"
          p="$1.5"
          pl="$2"
          pr="$2"
          borderTopRightRadius="$2"
          borderTopLeftRadius="$2"
          items="center"
        >
          <View
            bg={BookStatusColor}
            width={13}
            height={13}
            rounded="$radius.12"
          />
          <View>{BookTypeIcon}</View>
        </XStack>
      </View>
    </Link>
  );
}
