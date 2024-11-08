import {useEffect} from 'react';
import {AddBookResponse, Book, BookType} from "../types/Book.types";
import {bookController} from "../components/Book/Book.ctrl";
import {bookStore} from "../store/BookStore";

interface UseBooksReturn {
    books: Book[];
    isLoading: boolean;
    error: string | null;
    booksCount: number;
    addBook: (book: Book) => Promise<AddBookResponse>;
    bookTypeSelection: (type: BookType) => void;
    bookType: BookType
}

export const useBooks = (): UseBooksReturn => {
    useEffect(() => {
        bookController.fetchBooks();
    }, []);

    return {
        books: bookStore.books,
        isLoading: bookStore.isLoading,
        error: bookStore.error,
        booksCount: bookStore.booksCount,
        addBook: bookController.addBook,
        bookTypeSelection: bookController.bookTypeSelection,
        bookType: bookStore.bookType,
    };
};