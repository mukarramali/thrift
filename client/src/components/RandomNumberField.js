import React, {useState, useEffect} from 'react';

const RandomNumberField = ({ randomNumbers, generatedNumbers, setRandomNumbers }) => {
    let [fieldData, setFieldData] = useState("");
    useEffect(
        () => {
            setFieldData(generatedNumbers.join(","));
        },
        [generatedNumbers],
    );
    return <div>
        <h3>
            <label htmlFor="random_numbers">
                Enter List
        </label>
            <input
                type="text"
                name="random_numbers"
                pattern="(\d|\s|,)*"
                value={fieldData}
                onChange={({ target }) => {
                    setFieldData(target.value);
                    let data = target.value.replace(/\s*/g, '');
                    setRandomNumbers(data.split(",").filter(e => e))
                }}
            />
        </h3>
        <p>Enter comma separated list of numbers</p>
    </div>
};

export default RandomNumberField;