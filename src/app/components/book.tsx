'use client'

const Book: React.FC = () => {
    return (
        <figure className="flex flex-col items-center mr-10" >
            <img
                className="h-64 rounded-xl"
                src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1692339248i/197029269.jpg"
            />
            <figcaption>The Counte Of Monte Cristo</figcaption>
        </figure>
    )
}

export default Book