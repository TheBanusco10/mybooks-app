import BooksRepository from "@/features/books/domain/repositories/booksRepository";
import { Row } from "@/features/shared/interfaces/database";

export default class GetBookByIdUseCase {
  constructor(private booksRepository: BooksRepository) {}

  async execute(id: number): Promise<Row<"books">> {
    return await this.booksRepository.getBookById(id);
  }
}
