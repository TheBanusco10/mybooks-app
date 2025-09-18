import GothamSafeStack from "@/features/shared/components/GothamSafeStack";
import { useLocalSearchParams } from "expo-router";
import { Text } from "tamagui";
import { useEffect, useState } from "react";
import { Row } from "@/features/shared/interfaces/database";
import GetBookByIdUseCase from "@/features/books/application/useCases/getBookById.useCase";
import SupabaseBooksRepository from "@/features/books/infrastructure/repositories/supabaseBooksRepository";

export default function BookDetailsLayout() {
  const [book, setBook] = useState<Row<"books"> | null>(null);

  const { id } = useLocalSearchParams();

  useEffect(() => {
    const getBookById = async () => {
      const getBookByIdUseCase = new GetBookByIdUseCase(
        new SupabaseBooksRepository()
      );
      return await getBookByIdUseCase.execute(Number(id));
    };

    getBookById().then(setBook);
  }, [id]);

  return (
    <GothamSafeStack>
      <Text>BookDetailsLayout {id}</Text>
      <Text>{book?.title}</Text>
    </GothamSafeStack>
  );
}
