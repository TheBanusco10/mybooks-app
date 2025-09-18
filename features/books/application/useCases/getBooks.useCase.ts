import BooksRepository from "../../domain/repositories/booksRepository";

export default class GetBooksUseCase {
    constructor(private booksRepository: BooksRepository) {}

    async execute(from: number, to: number) {
        return this.booksRepository.getBooks(from, to);
    }
}