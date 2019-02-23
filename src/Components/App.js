import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layouts";
import Exercises from "./Exercises";
import { genres, books } from "../store.js";
class App extends Component {
  state = {
    books
  };
  render() {
    return (
      <Fragment>
        <Header />
        <Exercises />
        <Footer genres={genres} />
      </Fragment>
    );
  }
}
export default App;
