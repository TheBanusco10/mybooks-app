import { useEffect, useState } from "react";
import { ScrollView, XStack, YStack } from "tamagui";
import GetBooksUseCase from "../application/useCases/getBooks.useCase";
import SupabaseBooksRepository from "../infrastructure/repositories/supabaseBooksRepository";
import { BooksResult } from "@/features/shared/types/books";
import BooksItem from "./BooksItem";

export default function BooksList() {
  const [books, setBooks] = useState<BooksResult>({
    results: [],
    total: 0,
  });

  useEffect(() => {
    const getBooks = async () => {
      const getBooksUseCase = new GetBooksUseCase(
        new SupabaseBooksRepository()
      );
      return await getBooksUseCase.execute(0, 10);
    };

    getBooks().then(setBooks);
  }, []);

  return (
    <ScrollView>
      <XStack gap="$2" justify="center">
        {books.results.map((book) => (
          <YStack key={book.id}>
            <BooksItem book={book} />
          </YStack>
        ))}
      </XStack>
    </ScrollView>
  );
}
