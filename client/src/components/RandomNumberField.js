import React from 'react';

export default function RandomNumberField() {
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