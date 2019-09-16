import React from 'react';
import { SERVICE_API } from './../constants';

const calculateApi = array => SERVICE_API + "/actions?method=CALCULATE-STATS&payload={\"entry\":["+array.join(",")+"]}";

export default function CalculateButton({ randomNumbers, setStats }) {
  return <button onClick={() => {
    fetch(calculateApi(randomNumbers))
      .then(response => response.json())
      .then(data => {
        setStats(data);
      })
      .catch(err => console.log(err));
  }}>
    Calculate Statistics
  </button>
}