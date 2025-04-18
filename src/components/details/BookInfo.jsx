import React from "react";
import { Badge } from "../ui/badge";

const BookInfo = ({
  bookName,
  author,
  category,
  review,
  tags = [],
  totalPages,
  yearOfPublishing,
  rating,
  publisher,
}) => {
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
    </section>
  );
};

export default BookInfo;
