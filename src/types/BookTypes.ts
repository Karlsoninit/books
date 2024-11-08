export interface Book {
    name: string;
    author: string;
    isPrivate: boolean,
    bookId: string;
}

export type BookType = 'all' | 'private';

export type AddBookResponse  ={
    status: "Ok"
} | boolean