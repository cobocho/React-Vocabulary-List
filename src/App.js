import "./App.css";
import { Route, Routes } from "react-router-dom";

import Header from "./Components/Header/Header";
import Chapters from "./Components/Chapters/Chapters";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Header />
      <Chapters />
      <Routes>
        <></>
      </Routes>
    </Fragment>
  );
}

export default App;
