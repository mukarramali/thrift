import React, {useState} from 'react';
import './App.css';
import Container from './components/Container';

function App() {

  let [randomNumbers, setRandomNumbers] = useState([]);
  let [generatedNumbers, setGeneratedNumbers] = useState([]);
  let [stats, setStats] = useState({mean: 0, median: 0, variance: 0, stdDev: 0});

  return (
    <div className="App">
      <Container
        randomNumbers={randomNumbers}
        setRandomNumbers={setRandomNumbers}
        generatedNumbers={generatedNumbers}
        setGeneratedNumbers={setGeneratedNumbers}
        stats={stats}
        setStats={setStats}
      />
    </div>
  );
}

export default App;
