import React from 'react';
import {Book} from "./components/Book/Book";
import {TypeSelection} from "./components/TypeSelection/TypeSelection";

function App() {
    return (
        <div>
            <TypeSelection/>
            <Book/>
        </div>
    );
}

export default App;
