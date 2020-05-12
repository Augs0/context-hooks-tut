import React, { createContext, useState } from 'react'

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        { title: 'jane eyre', id: 1 },
        { title: 'the catcher in the rye', id: 2 },
        { title: 'pride and prejudice', id: 3 },
        { title: 'quiet', id: 4 }
    ])
    return (
        <BookContext.Provider value={{ books }}>
            {props.children}
        </BookContext.Provider>
    );
}

export default BookContextProvider;