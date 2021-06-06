import { useContext } from "react";
import BooksContext from "../contexts/BooksContext";

let useBooks = () => useContext(BooksContext);

export default useBooks;
