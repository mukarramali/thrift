import React from 'react';
import './App.css';

function RandomNumberField() {
  return <div>
    <h3>
      <label htmlFor="random_numbers">
        Enter List
        </label>
      <input
        type="text"
        name="random_numbers"
        pattern="(\d|\s|,)*"
      />
    </h3>
    <p>Enter comma separated list of numbers</p>
  </div>
}

function GenerateButton() {
  return <button>
    Generate Random Numbers
  </button>
}

function CalculateButton() {
  return <button>
    Calculate Statistics
  </button>
}

function Statistics() {
  return <div>
    <ul>
      <li>Original Data: [1, 2, 3, 4]</li>
      <li>Mean:</li>
      <li>Median:</li>
      <li>Variance:</li>
      <li>StandardDev:</li>
    </ul>
  </div>
}

function App() {
  return (
    <div className="App">
      <RandomNumberField/>
      <GenerateButton/>
      <CalculateButton/>
      <hr/>
      <Statistics/>
    </div>
  );
}

export default App;
