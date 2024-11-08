import React from 'react';
import {observer} from 'mobx-react-lite';
import {useBooks} from "../../hooks/useBooks";
import {BookList} from "../BookList/BookList";


export const Book: React.FC = observer(() => {
    const {books, isLoading} = useBooks()

    if (isLoading) return <p>Loading...</p>;

    return (
        <>
            <BookList books={books}/>
        </>
    )
});

