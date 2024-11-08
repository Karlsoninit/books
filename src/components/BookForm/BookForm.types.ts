import {AddBookResponse, Book} from "../../types/Book.types";

export type BookFormProps = {
    createBook: (book: Book) => Promise<AddBookResponse>;
    handleClose: () => void;
}