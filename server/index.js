var express = require('express')
var app = express()

const GENERATE_RANDOM_NUMBER_API = "";
const CALCULATE_STATS_API = "";

function isValidEntry(payload) {
    const entries = payload.entries;
    const count = entries.length;
    return count >= 2 && entries.filter(Number.isInteger).length === count;
}

function calculateStats(payload, resolve, error, next) {
    fetch(CALCULATE_STATS_API + payload)
        .then(res => res.json())
        .then(resolve)
        .catch(error)
        .finally(next);
}

function generateRandomNumbers(resolve, error, next) {
    fetch(GENERATE_RANDOM_NUMBER_API)
    .then(res => res.json())
    .then(resolve)
    .catch(error)
    .finally(next);
}

app.get('/action', function (req, res, next) {
    console.log(req.query.method)
    switch (req.query.method) {
        case 'IS-VALID-ENTRY':
            if(isValidEntry(req.query.payload)) {
                res.status(200).send({});
                break;
            } else {
                res.status(400).send({}) 
            }
        case 'CALCULATE-STATS':
            calculateStats(req.query.payload,
                (data) => res.status(200).send(data),
                () => res.status(400).send({}),
                next)
            break;
        case 'GEN-RAND':
            generateRandomNumbers(
                (data) => res.status(200).send(data),
                () => res.status(400).send({}),
                next)
            break;
        default:
            res.status(400).send({})       
            break;
    }
})

app.listen(8000)
