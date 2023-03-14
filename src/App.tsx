import React from "react";
import "./App.css";
import NavBar from "./components/NavigationBar/NavBar";
import Section from "./components/Section/Section";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <div className="Section">
        <Section title="代辦區塊" section_id="pendingList" />
        <Section title="在辦區塊" section_id="currentList" />
        <Section title="已辦區塊" section_id="finishedList" />
      </div>
    </div>
  );
}

export default App;
