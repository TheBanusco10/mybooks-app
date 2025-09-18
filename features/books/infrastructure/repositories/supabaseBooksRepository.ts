import BooksRepository from "@/features/books/domain/repositories/booksRepository";
import { Row } from "@/features/shared/interfaces/database";
import { supabase } from "@/features/shared/libs/supabase";
import { BooksResult } from "@/features/shared/types/books";

export default class SupabaseBooksRepository implements BooksRepository {
  async getBooks(from: number, to: number): Promise<BooksResult> {
    const {
      data: books,
      error,
      count,
    } = await supabase
      .from("books")
      .select("*", { count: "exact" })
      .order("created_at", { ascending: false })
      .range(from, to);

    //   if (error) throw new BooksError(error.message, error.message, error.code);

    return {
      results: books || [],
      total: count || 0,
    };
  }

  async getBookById(id: number): Promise<Row<"books">> {
    const { data, error } = await supabase
      .from("books")
      .select("*")
      .eq("id", id)
      .single();

    if (error) throw error;

    return data;
  }
}
