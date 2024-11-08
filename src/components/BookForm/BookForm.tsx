import React, {useState} from "react";
import {BookFormProps} from "./BookForm.types";


export const BookForm: React.FC<BookFormProps> = ({createBook, handleClose}) => {
    const [author, setAuthor] = useState("")
    const [name, setName] = useState("")
    const [isPrivate, setIsPrivate] = useState(false)

    const handleSubmitForm = async (e: React.FormEvent) => {
        e.preventDefault()
        const newBook = {author, name, isPrivate}
        await createBook({...newBook, bookId: "dsds"})
        handleClose()
    };

    return (
        <form onSubmit={handleSubmitForm}>
            <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)}/>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="checkbox" checked={isPrivate} onChange={(e) => setIsPrivate(e.target.checked)}/>
            <button type="submit">Add Book</button>
        </form>
    )
};
