
import React from "react";
import "./App.css";
import Pet from "./components/Pet.jsx";
import SearchParams from "./SearchParams";

function App() {
  return <>
    <div>
      <h1>Adopt me!</h1>
      <SearchParams />
      {/* <Pet name="Luna" animal="dog" breed="Havanese" />
      <Pet name="Pepper" animal="bird" breed="Cockatiel" />
      <Pet name="Doink" animal="cat" breed="Mix" /> */}
    </div>
  </>;
}

export default App;
