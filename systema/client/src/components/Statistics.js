import React from 'react';

export default function Statistics({stats, randomNumbers}) {
    const { 
        mean,
        median,
        variance,
        stdDev
    } = stats;
    return <div>
        <ul>
            <li>Original Data: [{randomNumbers.join(",")}]</li>
            <li>Mean:{mean}</li>
            <li>Median:{median}</li>
            <li>Variance:{variance}</li>
            <li>StandardDev:{stdDev}</li>
        </ul>
    </div>
}