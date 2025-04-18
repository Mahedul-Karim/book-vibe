import React from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { useBooks } from "@/context/BooksProvider";
import { toast } from "sonner";

const BookInfo = ({
  id,
  bookName,
  author,
  category,
  review,
  tags = [],
  totalPages,
  yearOfPublishing,
  rating,
  publisher,
  image
}) => {
  const { setReadBooks, setWishlistBooks } = useBooks();

  return (
    <section className="flex flex-col text-dark gap-3 justify-between">
      <h2 className="font-playfair text-3xl font-bold">{bookName}</h2>
      <p className="font-medium text-dark-light">By : {author}</p>
      <div className="border-y border-solid border-gray-200 font-medium text-dark-light py-4">
        {category}
      </div>
      <p className="text-dark-light">
        <span className="font-bold text-dark">Review : </span>
        {review}
      </p>
      <div className="flex items-center gap-2">
        <h4 className="font-bold text-dark">Tag : </h4>
        <div className="flex items-center gap-2 flex-wrap">
          {tags.map((tag, i) => (
            <Badge key={i}>{tag}</Badge>
          ))}
        </div>
      </div>
      <hr className="border-gray-200 my-4" />
      <div className="flex flex-col gap-3">
        <div className="grid grid-cols-2">
          <p className="text-dark-light">Number of Pages:</p>
          <p className="font-bold">{totalPages}</p>
        </div>
        <div className="grid grid-cols-2">
          <p className="text-dark-light">Publisher:</p>
          <p className="font-bold">{publisher}</p>
        </div>
        <div className="grid grid-cols-2">
          <p className="text-dark-light">Year of Publishing:</p>
          <p className="font-bold">{yearOfPublishing}</p>
        </div>
        <div className="grid grid-cols-2">
          <p className="text-dark-light">Rating:</p>
          <p className="font-bold">{rating}</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Button
          variant={"outline"}
          className={"border-stroke bg-transparent"}
          onClick={() => {
            setReadBooks((prev) => [
              ...prev,
              {
                id,
                bookName,
                author,
                category,
                review,
                image,
                tags,
                totalPages,
                yearOfPublishing,
                rating,
                publisher,
              },
            ]);
            toast.success('Book has been added to read later!')

          }}
        >
          Read
        </Button>
        <Button
          variant="secondary"
          className="text-white"
          onClick={() => {
            setWishlistBooks((prev) => [
              ...prev,
              {
                id,
                bookName,
                author,
                category,
                image,
                review,
                tags,
                totalPages,
                yearOfPublishing,
                rating,
                publisher,
              },
            ]);
            toast.success('Book has been added to wishlist!')
          }}
        >
          Wishlist
        </Button>
      </div>
    </section>
  );
};

export default BookInfo;
