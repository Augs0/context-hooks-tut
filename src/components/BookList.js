import React, { Component } from 'react'
import { ThemeContext } from '../contexts/themeContext'

class BookList extends Component {
    static contextType = ThemeContext;
    render() {
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;
        return (
            <div className="book-list" style={{ background: theme.bg, color: theme.text }}>
                <ul>
                    <li style={{ background: theme.ui }}>The Catcher in the Rye</li>
                    <li style={{ background: theme.ui }}>The Illustrated Mum</li>
                    <li style={{ background: theme.ui }}>The Great Gatsby</li>
                </ul >
            </div >
        );
    }
}

export default BookList;