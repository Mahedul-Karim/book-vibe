import BookCover from "@/components/details/BookCover";
import BookInfo from "@/components/details/BookInfo";
import React from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const { bookId } = useParams();

  const data = useLoaderData() || [];

  const id = parseInt(bookId);

  const singleBook =
    data.length > 0 ? data.find((book) => book.bookId === id) : null;

  if (!singleBook) {
    return <div>No books found!!!</div>;
  }

  return (
    <div className="py-16 grid lg:grid-cols-2 gap-7">
      <BookCover src={singleBook.image} />
      <BookInfo
        bookName={singleBook.bookName}
        author={singleBook.author}
        category={singleBook.category}
        review={singleBook.review}
        tags={singleBook.tags}
        totalPages={singleBook.totalPages}
        yearOfPublishing={singleBook.yearOfPublishing}
        rating={singleBook.rating}
        publisher={singleBook.publisher}
      />
    </div>
  );
};

export default BookDetails;
