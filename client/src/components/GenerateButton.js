import React from 'react';

const SERVICE_API = "http://localhost:8000"
const GEN_RAND_API = SERVICE_API + "/actions?method=GEN-RAND";

export default function GenerateButton({setRandomNumbers, setGeneratedNumbers}) {
    return <button onClick={() => {
      fetch(GEN_RAND_API)
      .then(response => response.json())
      .then(data => { 
        setRandomNumbers(data);
        setGeneratedNumbers(data);
      })
      .catch(err => console.log(err));
    }}>
        Generate Random Numbers
  </button>
}