import React from "react";
import "./App.css";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Pet from "./components/Pet.jsx";
import SearchParams from "./SearchParams";
import Deatils from "./Deatils";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinty,
      cacheTime: Infinty,
    },
  },
});

function App() {
  return (
    <>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<Deatils />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </QueryClientProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
