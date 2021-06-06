import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";

import SingleBookContext from "../contexts/SingleBookContext";

import { Button, ButtonGroup } from "reactstrap";

import useBooks from "../hooks/useBooks";

export default function Shop() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const [lastClicked, setLastClicked] = useState("Select a genre");
  const [bookType, setBookType] = useState("Both");
  const [price, setPrice] = useState("option1");
  const [language, setLanguage] = useState("option1");
  const { books } = useBooks();
  return (
    <div className="row p-3">
      <aside className="col-2 minwidth">
        <form className="pt-3" action="" method="get">
          <button
            className="btn btn-dark pruebaBotonMorado text-nowrap"
            type="submit"
          >
            Apply Filter
          </button>
          <h5>Type of book: {bookType}</h5>
          <ButtonGroup>
            <Button onClick={() => setBookType("Books")}>Books</Button>
            <Button
              className="text-nowrap"
              onClick={() => setBookType("E-Books")}
            >
              E-Books
            </Button>
            <Button onClick={() => setBookType("Both")}>Both</Button>
          </ButtonGroup>
          <input
            type="text"
            name="bookType"
            id="bookType"
            value={bookType}
            hidden
          />
          <h5>Genre</h5>
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>{lastClicked}</DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Fiction and Literature</DropdownItem>
              <DropdownItem onClick={() => setLastClicked("Some")}>
                Some Action
              </DropdownItem>
              <DropdownItem onClick={() => setLastClicked("Kids")}>
                For Kids
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem header>Educational</DropdownItem>
              <DropdownItem onClick={() => setLastClicked("Some")}>
                Some Action
              </DropdownItem>
              <DropdownItem onClick={() => setLastClicked("Foo")}>
                Foo Action
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <input
            type="text"
            name="genre"
            id="genre"
            value={lastClicked}
            hidden
          />
          <h5>Price</h5>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="radioPrice"
              id="radioPrice1"
              checked={price === "option1"}
              onChange={() => setPrice("option1")}
            />
            <label class="form-check-label" for="radioPrice1">
              $0-$10.000
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="radioPrice"
              id="radioPrice2"
              checked={price === "option2"}
              onChange={() => setPrice("option2")}
            />
            <label class="form-check-label" for="radioPrice2">
              $10.000-$25.000
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="radioPrice"
              id="radioPrice3"
              checked={price === "option3"}
              onChange={() => setPrice("option3")}
            />
            <label class="form-check-label" for="radioPrice3">
              $25.000-$50.000
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="radioPrice"
              id="radioPrice4"
              checked={price === "option4"}
              onChange={() => setPrice("option4")}
            />
            <label class="form-check-label" for="radioPrice4">
              $50.000-$100.000
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="radioPrice"
              id="radioPrice5"
              checked={price === "option5"}
              onChange={() => setPrice("option5")}
            />
            <label class="form-check-label" for="radioPrice5">
              More than $100.000
            </label>
          </div>
          <h5>Language</h5>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="radioLanguage"
              id="radioLanguage1"
              checked={language === "option1"}
              onChange={() => setLanguage("option1")}
            />
            <label class="form-check-label" for="radioLanguage1">
              Spanish
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="radioLanguage"
              id="radioLanguage2"
              checked={language === "option2"}
              onChange={() => setLanguage("option2")}
            />
            <label class="form-check-label" for="radioLanguage2">
              English
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="radioLanguage"
              id="radioLanguage3"
              checked={language === "option3"}
              onChange={() => setLanguage("option3")}
            />
            <label class="form-check-label" for="radioLanguage3">
              Russian
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="radioLanguage"
              id="radioLanguage4"
              checked={language === "option4"}
              onChange={() => setLanguage("option4")}
            />
            <label class="form-check-label" for="radioLanguage4">
              German
            </label>
          </div>
        </form>
      </aside>
      <div className="vertical-Line container col-1"></div>
      <div className="col-9">
        <div className="fullsize container-fluid row">
          {books.map((elem, index) => {
            return (
              <Card className="col-4">
                <CardImg src={elem.img} />
                <CardBody>
                  <CardTitle tag="h5">{elem.title}</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">
                    {elem.genre}
                  </CardSubtitle>
                  <CardText>
                    <h5>${elem.price}</h5>
                  </CardText>
                  <Link
                    className="btn btn-primary text-nowrap btn-0"
                    to={{
                      pathname: "/Book",
                      state: elem
                    }}
                  >
                    More Details
                  </Link>
                </CardBody>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
