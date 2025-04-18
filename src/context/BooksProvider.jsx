import React, { createContext,  useContext, useState } from "react";

const BooksContext = createContext();

const BooksProvider = ({ children }) => {
  const [readBooks, setReadBooks] = useState([]);
  const [wishlistBooks, setWishlistBooks] = useState([]);

  return (
    <BooksContext.Provider
      value={{ readBooks, setReadBooks, wishlistBooks, setWishlistBooks }}
    >
      {children}
    </BooksContext.Provider>
  );
};

export const useBooks=()=>{
    return useContext(BooksContext)
}

export default BooksProvider;
