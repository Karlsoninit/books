import React from 'react';
import {observer} from 'mobx-react-lite';
import {useBooks} from "../../hooks/useBooks";
import {BookType} from "../../types/Book.type";


export const TypeSelection: React.FC = observer(({}) => {
    const {bookTypeSelection, bookType} = useBooks()
    const handleBookTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        bookTypeSelection(event.target.value as BookType);
    };

    return <label>
        Show:
        <select value={bookType} onChange={handleBookTypeChange}>
            <option value="all">All Books</option>
            <option value="private">Private Books</option>
        </select>
    </label>
})