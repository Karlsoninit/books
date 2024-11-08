import React from "react";
import {Book} from "../../types/Book.types";


export const BookList: React.FC<{ books: Book[] }> = ({books}) => {

    return <ul>
        {books.map((book) => (
            <li key={book.author}>
                <p>{book.author}: {book.name}</p>
                <button onClick={() => {
                }}>Remove
                </button>
            </li>
        ))}
    </ul>
}