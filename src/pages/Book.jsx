import React, { useState } from "react";
// import useSingleBook from "../hooks/useSingleBook";

export default function Book(props) {
  // const { data } = useSingleBook();
  const [book, setBook] = useState(props.location.state);
  return (
    <div className="row p-5">
      <div className="col-4">
        <img src={book.img} alt="" />
      </div>
      <div className="col-4">
        <h2>{book.title}</h2>
      </div>
      <div className="col-4">
        <h4>{book.price}</h4>
      </div>
    </div>
  );
}
