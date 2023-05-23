import React from "react";
import "./App.css";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import Pet from "./components/Pet.jsx";
import SearchParams from "./SearchParams";
import Deatils from "./Deatils";

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Routes>
          <Route path="/details/:id" element={<Deatils />} />
          <Route path="/" element={<SearchParams />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
