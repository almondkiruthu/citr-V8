import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pet from "./components/Pet.jsx";
import SearchParams from "./SearchParams";

function App() {
  return (
    <>
      <BrowserRouter>
        <h1>Adopt Me!</h1>
        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<SearchParams />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
