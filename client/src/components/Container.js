import React from 'react';

import RandomNumberField from './RandomNumberField';
import GenerateButton from './GenerateButton';
import CalculateButton from './CalculateButton';
import Statistics from './Statistics';

export default function Container(props) {
    let {
        randomNumbers,
        setRandomNumbers
    } = props;
    return <div>
        <RandomNumberField
            randomNumbers={randomNumbers}
            setRandomNumbers={setRandomNumbers}
            />
        <GenerateButton
            setRandomNumbers={setRandomNumbers} 
            />
        <CalculateButton />
        <hr />
        <Statistics />
    </div>;
}