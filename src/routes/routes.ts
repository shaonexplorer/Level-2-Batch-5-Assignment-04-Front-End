import { createBrowserRouter } from "react-router";
import App from "../App";
import Books from "../components/books/books";
import CreateBook from "../components/books/createBook";
import SingleBook from "../components/books/singleBook";
import Borrow from "../components/books/borrow";
import BorrowSummery from "../components/books/borrowSummary";
import EditBook from "../components/books/editBook";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Books },
      {
        path: "/books",
        Component: Books,
        children: [
          { path: ":id", Component: SingleBook },
          { path: "edit-book/:id", Component: EditBook },
          { path: "borrow/:bookId", Component: Borrow },
        ],
      },
      { path: "/create-book", Component: CreateBook },
      { path: "/borrow-summary", Component: BorrowSummery },
    ],
  },
]);
