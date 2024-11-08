import axios from 'axios';
import {runInAction} from 'mobx';

import {bookStore} from '../../store/BookStore';
import {Book, BookType} from "../../types/BookTypes";

export class BookController {

    fetchBooks = async (): Promise<Book[]> => {
        bookStore.setLoading(true);
        bookStore.setError(null);

        try {
            const options = bookStore.bookType === "private" ? "/private" : ""
            const response = await axios.get<Book[]>(`https://tdd.demo.reaktivate.com/v1/books/postnikov${options}`);
            const data = response.data;

            runInAction(() => {
                bookStore.setBooks(data);
                bookStore.setLoading(false);
            });

            return data;
        } catch (error) {
            runInAction(() => {
                bookStore.setError('Failed to fetch books');
                bookStore.setLoading(false);
            });
            throw error;
        }
    }

    addBook = async (book: Book) => {
        try {
            console.log("Calling axios.post with book:", book);  //
            const response = await axios.post<Book>('https://tdd.demo.reaktivate.com/v1/books/postnikov', book);

            await this.fetchBooks();
            return response.status


        } catch (error) {
            runInAction(() => {
                bookStore.setError('Failed to add book');
            });
            return false;
        }
    }

    bookTypeSelection = async (type: BookType) => {
        bookStore.setBookType(type);
        await this.fetchBooks();
    }
}

export const bookController = new BookController();
