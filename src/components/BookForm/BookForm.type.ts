import {AddBookResponse, Book} from "../../types/Book.type";

export type BookFormProps = {
    createBook: (book: Book) => Promise<AddBookResponse>;
    handleClose: () => void;
}