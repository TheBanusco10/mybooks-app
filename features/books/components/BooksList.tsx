import { BooksResult } from "@/features/shared/types/books";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ScrollView, Text, XStack, YStack } from "tamagui";
import GetBooksUseCase from "@/features/books/application/useCases/getBooks.useCase";
import SupabaseBooksRepository from "@/features/books/infrastructure/repositories/supabaseBooksRepository";
import BooksItem from "./BooksItem";

export default function BooksList() {
  const [books, setBooks] = useState<BooksResult>({
    results: [],
    total: 0,
  });

  const { t } = useTranslation();

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
        {!books.results.length && <Text>{t("app.libraryEmpty")}</Text>}
      </XStack>
    </ScrollView>
  );
}
