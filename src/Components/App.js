import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layouts";
import Exercises from "./Exercises";
import { genres, books } from "../store.js";
class App extends Component {
  state = {
    books
  };
  getBooksByGenre() {
    return Object.entries(
      this.state.books.reduce((booksList, book) => {
        const { genre } = book;

        booksList[genre] = booksList[genre]
          ? [...booksList[genre], book]
          : [book];

        return booksList;
      }, {})
    );
  }
  render() {
    const books = this.getBooksByGenre();

    return (
      <Fragment>
        <Header />
        <Exercises books={books} />
        <Footer genres={genres} />
      </Fragment>
    );
  }
}
export default App;
