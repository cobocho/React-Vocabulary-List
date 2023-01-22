import { Fragment } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import Header from "./Components/Header/Header";
import Chapters from "./Components/Chapters/Chapters";

function App() {
  return (
    <Fragment>
      <Header />
      <Chapters />
    </Fragment>
  );
}

export default App;
