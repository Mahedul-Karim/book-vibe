import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useBooks } from "@/context/BooksProvider";
import BooksCard from "../home/all-books/BooksCard";

const BookTabs = () => {
  const { readBooks, wishlistBooks } = useBooks();

  return (
    <Tabs defaultValue="read" className="w-full">
      <TabsList className="bg-white border-b border-solid border-stroke rounded-none w-full h-auto justify-start p-0 mb-8">
        <TabsTrigger
          value="read"
          className="h-auto data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border data-[state=active]:border-solid data-[state=active]:border-stroke data-[state=active]:border-b-white rounded-none py-[5px] -mb-[1px] grow-0 rounded-tl-md rounded-tr-md  px-6 cursor-pointer text-dark-light"
        >
          Read Books
        </TabsTrigger>
        <TabsTrigger
          value="wishlist"
          className="h-auto data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border data-[state=active]:border-solid data-[state=active]:border-stroke data-[state=active]:border-b-white rounded-none py-[5px] -mb-[1px] grow-0 rounded-tl-md rounded-tr-md  px-6 cursor-pointer text-dark-light"
        >
          Wishlist Books
        </TabsTrigger>
      </TabsList>
      <TabsContent value="read">
        <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-2 xs:gap-3 sm:gap-6">
          {readBooks.length > 0 ? (
            readBooks.map((book,i) => (
              <BooksCard
                key={i}
                bookName={book.bookName}
                author={book.author}
                image={book.image}
                rating={book.rating}
                category={book.category}
                tags={book.tags}
                id={book.bookId}
              />
            ))
          ) : (
            <p>No books to read!</p>
          )}
        </div>
      </TabsContent>
      <TabsContent value="wishlist">
        <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-2 xs:gap-3 sm:gap-6">
          {wishlistBooks.length > 0 ? (
            wishlistBooks.map((book,i) => (
              <BooksCard
                key={i}
                bookName={book.bookName}
                author={book.author}
                image={book.image}
                rating={book.rating}
                category={book.category}
                tags={book.tags}
                id={book.bookId}
              />
            ))
          ) : (
            <p>No books in the wishlist!</p>
          )}
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default BookTabs;
