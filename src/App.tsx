import React from "react";
import "./App.css";
import TitlePage from "./pages/TitlePage";
import Education from "./pages/Education";
import CP from "./pages/CP";

function App() {
  return (
    <div className="App text-neutral-300">
      <TitlePage />
      <Education />
      <CP />
    </div>
  );
}

export default App;
