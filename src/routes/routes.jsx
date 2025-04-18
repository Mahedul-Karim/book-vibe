import Root from "@/layout/Root";
import BookDetails from "@/pages/BookDetails";
import Home from "@/pages/Home";
import ListedBooks from "@/pages/ListedBooks";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: async () => {
          const res = await fetch("/data/booksData.json");
          return res;
        },
      },
      {
        path: "/book/:bookId",
        element: <BookDetails />,
        loader: async () => {
          const res = await fetch("/data/booksData.json");
          return res;
        },
      },
      {
        path: "/listed-books",
        element: <ListedBooks />,
      },
      {
        path: "*",
        element: (
          <p className="text-dark font-semibold flex items-center justify-center text-2xl py-16">
            No pages found!😥
          </p>
        ),
      },
    ],
  },
]);
