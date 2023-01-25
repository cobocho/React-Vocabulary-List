import "./App.css";
import { Route, Routes } from "react-router-dom";

import Header from "./Components/Header/Header";
import Chapters from "./Components/Chapters/Chapters";
import { Fragment } from "react";

import Words from "./Pages/Words";
import WordGenerator from "./Components/Words/WordGenerator";

function App() {
  return (
    <Fragment>
      <Header />
      <div id="container">
        <Chapters className="chapters" />
        <main>
          <Routes>
            <Route path="/:chapter" element={<Words />}>
              <Route path="edit" element={<WordGenerator />} />
            </Route>
          </Routes>
        </main>
      </div>
    </Fragment>
  );
}

export default App;
