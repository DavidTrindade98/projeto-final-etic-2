import React, { useState } from 'react';
import "../../styles/chat/filter_overlay.css";

export default function FilterMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={toggleMenu}>Filters</button>
      <div className={`filter-overlay ${isOpen ? 'open' : ''}`}>
        <div className="filter-menu">
          <button onClick={toggleMenu}>Close Filters</button>
          <h2>Filter Options</h2>
          <ul>
            <li>Filter Option 1</li>
            <li>Filter Option 2</li>
            <li>Filter Option 3</li>
          </ul>
        </div>
      </div>
    </>
  );
}
