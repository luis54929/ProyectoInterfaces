import { createContext } from "react";

const SingleBookContext = createContext({
  data: {
    title: "hey",
    genre: "",
    pages: 0,
    price: 0,
    language: "",
    img: "",
    desc: ""
  }
});

export default SingleBookContext;
