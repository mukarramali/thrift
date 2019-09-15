var express = require('express')
var app = express()
var { client } = require('./src/StatisticsClient');
var ttypes = require('./src/statistics_types');

function isValidEntry(payload) {
    const { entry } = JSON.parse(payload);
    const count = entry.length;
    return count >= 2 && entry.filter(Number.isInteger).length === count;
}

function calculateStats(payload, resolve, error, next) {
    // fetch(CALCULATE_STATS_API + payload)
    //     .then(res => res.json())
    //     .then(resolve)
    //     .catch(error)
    //     .finally(next);
}

function generateRandomNumbers(resolve, error, next) {
    client.generateNums()
        .then(randomNumbers => resolve(randomNumbers))
        .fail(err => error(err))
        .finally(() => next);
}

app.get('/actions', function (req, res, next) {
    console.log("Method", req.query.method, "called!");
    switch (req.query.method) {
        case 'IS-VALID-ENTRY':
            /**
             * /actions?method=IS-VALID-ENTRY&payload={"entry":[1,3,4]}
             * should return 200
             *
             * /actions?method=IS-VALID-ENTRY&payload={"entry":[1,3,"Strings"]}
             * should return 400
             */
            const isValid = isValidEntry(req.query.payload);
            res.status(isValid ? 200 : 400).send(isValid ? "OK" : "FAILED")
            break;
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
                next);
            break;
        default:
            res.status(400).send({})       
            break;
    }
})

app.listen(8000);

client.ping()
    .then(function(response) {
        console.log("Backend service is", response ? "up!" : "down!");
    });
