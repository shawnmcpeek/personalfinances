import React, { useState } from "react";
import "./App.css";
import VerticalButtonGroup from "./components/button_group.component/button_group.component.jsx";
import LandingPage from "./components/landing_page.component/landing_page.component.jsx";

function App() {
  const [activeComponent, setActiveComponent] = useState(<LandingPage />);

  const handleButtonClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="VerticalButtonGroup-container">
          <VerticalButtonGroup onButtonClick={handleButtonClick} />
        </div>
        <div className="ActiveComponent-container">{activeComponent}</div>
      </header>
    </div>
  );
}

export default App;
