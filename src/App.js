import "./App.css";
import { Route, Routes } from "react-router-dom";

import Header from "./Components/Header/Header";
import Chapters from "./Components/Chapters/Chapters";
import { Fragment } from "react";

import Words from "./Pages/Words";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Chapters className="chapters" />
        <Routes>
          <Route path="/:chapter" element={<Words />} />
        </Routes>
      </main>
    </Fragment>
  );
}

export default App;
