import React from "react";
import {observer} from 'mobx-react-lite';
import {useBooks} from "../../hooks/useBooks";


export const BookCounter: React.FC = observer(() => {
    const {booksCount} = useBooks()
    return <h2>Books: {booksCount}</h2>
})