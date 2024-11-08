import {makeAutoObservable} from 'mobx';
import {Book, BookType} from "../types/BookTypes"

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
}

export const bookStore = new BookStore();