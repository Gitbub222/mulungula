'use client';

import Image from 'next/image';

type BookProps = {
    booksrc: string;
    title: string;
};

const Book: React.FC<BookProps> = ({ booksrc, title }) => {
    return (
        <figure className="flex flex-col items-center mr-10">
            <Image
                className="h-64 w-40 rounded-xl"
                width={164}
                height={256} // Adjusted height to match the aspect ratio of a book cover
                src={booksrc}
                alt={title}
            />
            <figcaption className="mt-2 text-center text-sm">{title}</figcaption>
        </figure>
    );
};

export default Book;
