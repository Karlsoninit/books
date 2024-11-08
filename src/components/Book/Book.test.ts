import {bookStore} from '../../store/BookStore';
import {BookController} from "./Book.ctrl";

import { testBooks} from "./Book.mock";
import axios from "axios";


jest.mock('axios', () => ({
    get: jest.fn(),
    post: jest.fn(),
}));

export const mockedAxios = axios as jest.Mocked<typeof axios>;


describe('BookController', () => {
    const controller = new BookController();


    afterEach(() => {
        jest.clearAllMocks();
    });


    it('should fetch books successfully and update the store', async () => {
        mockedAxios.get.mockResolvedValue({data: testBooks});
        const result = await controller.fetchBooks();

        expect(result).toEqual(testBooks);
        expect(bookStore.books).toEqual(testBooks);
        expect(bookStore.isLoading).toBe(false);
        expect(bookStore.error).toBeNull();
        expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    });

    it('should handle errors while fetching books', async () => {
        mockedAxios.get.mockRejectedValue(new Error('Network Error'));

        await expect(controller.fetchBooks()).rejects.toThrow('Network Error');
        expect(bookStore.isLoading).toBe(false);
        expect(bookStore.error).toBe('Failed to fetch books');
        expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    });

    it('should receive the correct data in addBook', async () => {
        const newBook = testBooks[0]
        const addBookSpy = jest.spyOn(controller, 'addBook');
        await controller.addBook(newBook);

        expect(addBookSpy).toHaveBeenCalledWith(newBook);
        addBookSpy.mockRestore();
    });
});