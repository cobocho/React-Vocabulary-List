import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";

import Header from "./Components/Header/Header";
import Chapters from "./Components/Chapters/Chapters";
import { Fragment } from "react";

import Words from "./Pages/Words";
import WordGenerator from "./Components/Words/WordGenerator";
import NotFound from "./Pages/NotFound";
import Home from "./Pages/Home";
import Test from "./Pages/Test";
import TestSelect from "./Pages/TestSelect";

function App() {
  return (
    <Fragment>
      <Header />
      <div id="container">
        <Chapters className="chapters" />
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/:chapter" element={<Words />}>
              <Route path="edit" element={<WordGenerator />} />
            </Route>
            <Route path="/:chapter/test" element={<Test />} />
            <Route path="/:chapter/test/select" element={<TestSelect />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Fragment>
  );
}

export default App;
