import React from "react";
import { useLoaderData } from "react-router";
import BooksCard from "./all-books/BooksCard";

const AllBooks = () => {
  const data = useLoaderData() || [];

  console.log(data);

  return (
    <section className="py-10 xs:py-16">
      <h2 className="text-center font-playfair font-bold text-2xl">Books</h2>
      <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-2 xs:gap-3 sm:gap-6">
        {data.length > 0 &&
          data.map((book) => (
            <BooksCard
              key={book.bookId}
              bookName={book.bookName}
              author={book.author}
              image={book.image}
              rating={book.rating}
              category={book.category}
              tags={book.tags}
              id={book.bookId}
            />
          ))}
      </div>
    </section>
  );
};

export default AllBooks;
