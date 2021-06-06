import React from "react";
export default function Help() {
  return (
    <div>
      <div className="row p-5">
        <div className="col">
          <div className="row">
            <h2>Navigate the page</h2>
            <p>
              The navigation of the page is done through the navigation bar
              located at the top of the page, from the bar you can go to any
              corner you want, you can also search for any book you want from
              the navigation bar.
            </p>
          </div>
          <div className="row">
            <img src="img/nav.jpg" className="" alt="logo" width="300px" />
          </div>
        </div>
        <div className="col">
          <div className="row">
            <h2>How to buy</h2>
            <p>
              To buy an item it is necessary that you add the desired book to
              the shopping cart and that you have your payment method defined so
              that at the end of the process, you will be able to pay. After
              this process, the book will be sent to you. If it is an e-book you
              will receive it via e-mail.
            </p>
          </div>
          <div className="row">
            {" "}
            <img src="img/nav2.jpg" className="" alt="logo" width="300px" />
          </div>
        </div>
      </div>
    </div>
  );
}
