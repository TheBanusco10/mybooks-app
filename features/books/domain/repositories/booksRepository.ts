import { BooksResult } from "@/features/shared/types/books";

export default interface BooksRepository {
    getBooks(from: number, to: number): Promise<BooksResult>
}
