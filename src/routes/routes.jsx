import Root from "@/layout/Root";
import BookDetails from "@/pages/BookDetails";
import Home from "@/pages/Home";
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
    ],
  },
]);
