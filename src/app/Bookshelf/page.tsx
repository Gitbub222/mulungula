'use client';

import Book from "./../components/book";

const books = [
    { title: 'The Count of Monte Cristo', booksrc: '/books/monte.jpg' },
    { title: 'Pride and Prejudice', booksrc: '/books/monte.jpg' },
    { title: 'Moby Dick', booksrc: '/books/monte.jpg' },
    { title: 'Great Expectations', booksrc: '/books/monte.jpg' },
    { title: '1984', booksrc: '/books/monte.jpg' },
    { title: 'War and Peace', booksrc: '/books/monte.jpg' },
    { title: 'The Odyssey', booksrc: '/books/monte.jpg' },
];

export default function Home() {
    return (
        <main className="p-24">
            <div className="flex flex-wrap justify-start gap-8">
                {books.map((book, index) => (
                    <Book key={index} title={book.title} booksrc={book.booksrc} />
                ))}
            </div>
        </main>
    );
}
