import React from 'react';
import {Book} from "./components/Book/Book";
import {TypeSelection} from "./components/TypeSelection/TypeSelection";
import {BookCounter} from "./components/BookCounter/BookCounter";

function App() {
    return (
        <div>
            <BookCounter/>
            <TypeSelection/>
            <Book/>
        </div>
    );
}

export default App;
