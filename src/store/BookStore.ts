import {makeAutoObservable} from 'mobx';
import {Book, BookType} from "../types/Book.types"

class BookStore {
    books: Book[] = [];
    isLoading: boolean = false;
    error: string | null = null;
    bookType: BookType = "all";

    constructor() {
        makeAutoObservable(this);
    }

    get booksCount(): number {
        return this.books.length;
    }

    setBooks(data: Book[]) {
        this.books = data;
    }

    setLoading(status: boolean) {
        this.isLoading = status;
    }

    setBookType(type: BookType) {
        this.bookType = type;
    }

    setError(error: string | null) {
        this.error = error;
    }
}

export const bookStore = new BookStore();