import GothamSafeStack from "@/features/shared/components/GothamSafeStack";
import { H3 } from "tamagui";
import BooksList from "./BooksList";

export default function BooksLayout() {
  return (
    <GothamSafeStack>
      <H3 pb="$4">Tus libros</H3>
      <BooksList />
    </GothamSafeStack>
  );
}
