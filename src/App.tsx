import React from "react";
import "./App.css";
import NavBar from "./components/NavigationBar/NavBar";
import FinishedSection from "./components/Section/FinishedSection";
import PendingSection from "./components/Section/PendingSection";
import ProcessingSection from "./components/Section/ProcessingSection";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <div className="Section">
        <PendingSection />
        <ProcessingSection />
        <FinishedSection />
      </div>
    </div>
  );
}

export default App;
