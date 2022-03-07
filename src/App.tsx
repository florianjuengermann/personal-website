import React from "react";
import "./App.css";
import TitlePage from "./pages/TitlePage";
import Education from "./pages/Education";
import CP from "./pages/CP";
import Work from "./pages/Work";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="App text-neutral-300">
      <TitlePage />
      <Education />
      <Work />
      <CP />
      <Projects />
    </div>
  );
}

export default App;
