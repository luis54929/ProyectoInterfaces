  import React from "react";
export default function About() {
  return (
    <div>
      <div className="row p-5">
        <div className="col">
          <div className="row">
            <h2>About the page</h2>
            <p>
              This brand, and this page was founded in 2021 and seeks to be a
              benchmark in the self-service mode, in the sale of books and
              e-books across the country. We are constantly receiving new titles
              to increase our catalog for our users to consume.
            </p>
          </div>
          <div className="row">
            <img src="img/About1.jpg" className="" alt="logo" width="300px" />
          </div>
        </div>
        <div className="col">
          <div className="row">
            <h2>Mission and vision</h2>
            <p>
              Tradition, a friendly page, a wide and varied selection and an
              excellent attention are the missions and visions that we have for
              each user who uses WishBook.
            </p>
          </div>
          <div className="row">
            {" "}
            <img src="img/About2.jpg" className="" alt="logo" width="300px" />
          </div>
        </div>
      </div>
    </div>
  );
}
