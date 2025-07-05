import { createBrowserRouter } from "react-router";
import App from "../App";
import Books from "../components/books/books";
import BorrowSummery from "../components/books/borrowSummary";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Books },
      {
        path: "/books",
        Component: Books,
      },
      { path: "/borrow-summary", Component: BorrowSummery },
    ],
  },
]);
