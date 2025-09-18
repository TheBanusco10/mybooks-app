import { Row } from "@/features/shared/interfaces/database";
import { BooksResult } from "@/features/shared/types/books";

export default interface BooksRepository {
  getBooks(from: number, to: number): Promise<BooksResult>;
  getBookById(id: number): Promise<Row<"books">>;
}
