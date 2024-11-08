import React from 'react';
import {observer} from 'mobx-react-lite';
import {useBooks} from "../../hooks/useBooks";
import {BookList} from "../BookList/BookList";
import {Modal} from "../../uikit/modal/Modal";
import {BookForm} from "../BookForm/BookForm";
import {BookType} from "../../types/Book.types";


export const Book: React.FC = observer(() => {
    const [isOpen, setIsOpen] = React.useState(false)
    const {books, isLoading, addBook} = useBooks()

    const handleOpenModal = () => {
        setIsOpen((prev) => !prev);
    }

    if (isLoading) return <p>Loading...</p>;

    return (
        <>
            <BookList books={books}/>
            {isOpen &&
                <Modal onClose={handleOpenModal}><BookForm createBook={addBook} handleClose={handleOpenModal}/></Modal>}
        </>
    )
});

