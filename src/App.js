import "./App.css";
import { Route, Routes } from "react-router-dom";

import Header from "./Components/Header/Header";
import Chapters from "./Components/Chapters/Chapters";
import { Fragment, useEffect } from "react";
import { chapterActions } from "./store/chapter-slice";
import { useDispatch } from "react-redux";

function App() {
  return (
    <Fragment>
      <Header />
      <Chapters />
    </Fragment>
  );
}

export default App;
