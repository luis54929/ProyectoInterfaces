import { useContext } from "react";
import SingleBookContext from "../contexts/SingleBookContext";

let useSingleBook = () => useContext(SingleBookContext);

export default useSingleBook;
