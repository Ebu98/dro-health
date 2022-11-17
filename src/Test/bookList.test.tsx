import React from 'react'
import {render, screen} from '@testing-library/react'
import BookList from '../Components/BookList/bookList'



  it("renders title text", () => {
    render(<BookList />);
    const welcomeElement = screen.getByText("Authors");
    expect(welcomeElement).toBeInTheDocument();
  });

  it("renders title text", () => {
    render(<BookList />);
    const welcomeElement = screen.getByText("Name");
    expect(welcomeElement).toBeInTheDocument();
  });
  
  it("renders title text", () => {
    render(<BookList />);
    const welcomeElement = screen.getByText("Publisher");
    expect(welcomeElement).toBeInTheDocument();
  });

  it("renders title text", () => {
    render(<BookList />);
    const welcomeElement = screen.getByText("ISBN");
    expect(welcomeElement).toBeInTheDocument();
  });

  it("renders title text", () => {
    render(<BookList />);
    const welcomeElement = screen.getByText("Date");
    expect(welcomeElement).toBeInTheDocument();
  });
