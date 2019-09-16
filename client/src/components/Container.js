import React from 'react';

import RandomNumberField from './RandomNumberField';
import GenerateButton from './GenerateButton';
import CalculateButton from './CalculateButton';
import Statistics from './Statistics';

export default function Container() {
    return <div>
        <RandomNumberField />
        <GenerateButton />
        <CalculateButton />
        <hr />
        <Statistics />
    </div>;
}