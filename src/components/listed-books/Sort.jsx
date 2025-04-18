import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useBooks } from "@/context/BooksProvider";

const Sort = () => {
  const [sortBy, setSortBy] = useState("");

  const { readBooks, wishlistBooks, setReadBooks, setWishlistBooks } =
    useBooks();

  useEffect(() => {
    if (!sortBy) return;
    console.log(sortBy);

    const exisitngReadBooks = [...readBooks];
    const exisitngWishlistBooks = [...wishlistBooks];

    if (sortBy === "Rating") {
     const sortedReadBooks = exisitngReadBooks.sort((a, b) => b.rating - a.rating);
      const sortedWishlistbooks = exisitngWishlistBooks.sort((a, b) => b.rating - a.rating);

      

      setReadBooks(sortedReadBooks);
      setWishlistBooks(sortedWishlistbooks);
    }
    if (sortBy === "Number of pages") {
     const sortedReadBooks = exisitngReadBooks.sort((a, b) => b.totalPages - a.totalPages);
     const sortedWishlistbooks = exisitngWishlistBooks.sort((a, b) => b.totalPages - a.totalPages);
      setReadBooks(sortedReadBooks);
      setWishlistBooks(sortedWishlistbooks);
    }
    if (sortBy === "Publisher year") {
     const sortedReadBooks = exisitngReadBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
     const sortedWishlistbooks = exisitngWishlistBooks.sort(
        (a, b) => b.yearOfPublishing - a.yearOfPublishing
      );
      setReadBooks(sortedReadBooks);
      setWishlistBooks(sortedWishlistbooks);
    }
  }, [sortBy]);

  return (
    <Select value={sortBy} onValueChange={(val) => setSortBy(val)}>
      <SelectTrigger className="w-[180px] cursor-pointer font-medium ml-auto my-5">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent className="border-stroke font-medium">
        <SelectGroup>
          <SelectItem value="Rating" className={"cursor-pointer"}>
            Rating
          </SelectItem>
          <SelectItem value="Number of pages" className={"cursor-pointer"}>
            Number of pages
          </SelectItem>
          <SelectItem value="Publisher year" className={"cursor-pointer"}>
            Publisher year
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default Sort;
