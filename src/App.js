import "./styles.css";
import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Help from "./pages/Help";
import Book from "./pages/Book";
import Footers from "./components/footer/Footer";
import BooksContext from "./contexts/BooksContext";
import { useFirebaseApp } from "reactfire";

let bookList = [
  {
    title: "Are you there vodka?",
    genre: "Fantasy",
    pages: 300,
    price: 55000,
    language: "Russian",
    img: "img/AYTV.png"
  },
  {
    title: "My good friend Vodka",
    genre: "Comedy",
    pages: 250,
    price: 35000,
    language: "English",
    img: "img/ABG.png"
  },
  {
    title: "The bizarre adventure of Vodka",
    genre: "Action",
    pages: 200,
    price: 25000,
    language: "Spanish",
    img: "img/JJS.png"
  },
  {
    title: "The strange case of Vodka: Horror Story",
    genre: "Horror",
    pages: 78,
    price: 23000,
    language: "English",
    img: "img/AHSV.png"
  },
  {
    title: "The walking Vodka",
    genre: "Drama",
    pages: 150,
    price: 25000,
    language: "Russian",
    img: "img/ZMV.png"
  },
  {
    title: "The king of Vodka",
    genre: "Politics",
    pages: 150,
    price: 9999999,
    language: "Russian",
    img: "img/theGod.png"
  },
  {
    title: "Test",
    genre: "Comedy",
    pages: 150,
    price: 9999999,
    language: "Russian",
    img: "img/theGod.png"
  }
];

export default function App() {
  const firebase = useFirebaseApp();
  return (
    <div className="app">
      <header>
        <Navbar />
      </header>
      <body className="">
        <div className="container-fluid">
          <BooksContext.Provider value={{ books: bookList }}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/Login" component={Login} />
              <Route exact path="/Signup" component={SignUp} />
              <Route exact path="/Shop" component={Shop} />
              <Route exact path="/About" component={About} />
              <Route exact path="/Help" component={Help} />
              <Route exact path="/Book" component={Book} />
            </Switch>
          </BooksContext.Provider>
        </div>
      </body>
      <Footers />
    </div>
  );
}
