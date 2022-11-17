import React from 'react'
import {render, screen} from '@testing-library/react'
import BookList from './Components/BookList/bookList'

test('renders books', () => {
    const books ={
        name: "test",
        publisher:"test",
        isbn: "test",
        released:"test",
        authors:"test",
    }
    render(<BookList books={books}/>);
    const anchorElements = screen.getAllByRole("books")
    expect(anchorElements).toHaveTextContent(books.name)
    expect(anchorElements).toHaveTextContent(books.publisher)
    expect(anchorElements).toHaveTextContent(books.isbn)
    expect(anchorElements).toHaveTextContent(books.authors)
    expect(anchorElements).toHaveTextContent(books.released)
})