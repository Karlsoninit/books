import { bookStore } from './BookStore';

describe('BookStore', () => {

    beforeEach(() => {
        bookStore.setBooks([]);
        bookStore.setLoading(false);
        bookStore.setError(null);
        bookStore.setBookType("all");
    });

    it('should initialize with default values', () => {
        expect(bookStore.books).toEqual([]);
        expect(bookStore.isLoading).toBe(false);
        expect(bookStore.error).toBeNull();
        expect(bookStore.bookType).toBe("all");
    });

    it('should return the correct book count', () => {
        bookStore.setBooks([{ bookId: '1', author: 'Author 1', isPrivate: false, name: 'Book 1' }]);
        expect(bookStore.booksCount).toBe(1);
    });

    it('should set books correctly', () => {
        const books = [
            { bookId: '1', author: 'Author 1', isPrivate: false, name: 'Book 1' },
            { bookId: '2', author: 'Author 2', isPrivate: true, name: 'Book 2' }
        ];
        bookStore.setBooks(books);
        expect(bookStore.books).toEqual(books);
    });

    it('should set loading status correctly', () => {
        bookStore.setLoading(true);
        expect(bookStore.isLoading).toBe(true);
    });

    it('should set error message correctly', () => {
        bookStore.setError('Error loading books');
        expect(bookStore.error).toBe('Error loading books');
    });

    it('should set book type correctly', () => {
        bookStore.setBookType("private");
        expect(bookStore.bookType).toBe("private");
    });
});
