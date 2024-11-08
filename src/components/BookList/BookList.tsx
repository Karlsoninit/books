import React from "react";
import {Book} from "../../types/Book.type";


export const BookList: React.FC<{ books: Book[] }> = ({books}) => {

    return <ul>
        {books.map((book) => (
            <li key={book.author}>
                <p>{book.author}: {book.name}</p>
            </li>
        ))}
    </ul>
}