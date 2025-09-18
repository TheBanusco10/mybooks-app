import { Row } from "@/features/shared/interfaces/database";

type TypeSingle = "reading" | "finished" | "paused";

interface Type {
  value: string;
  label: string;
}

interface BooksResult {
  results: Row<"books">[];
  total: number;
}

interface OpenLibraryBook {
  author: string;
  cover: string | null;
  description: string;
  key: string;
  title: string;
}

type Status = Type;

type BookFormInformationType = Omit<Row<"books">, "id" | "created_at" | "updated_at" | "user_id">;

export type { Type, Status, BooksResult, OpenLibraryBook, TypeSingle, BookFormInformationType };
