var thrift = require('thrift');
var StatisticsService = require('./StatisticsService');
const assert = require('assert');

var transport = thrift.TBufferedTransport;
var protocol = thrift.TBinaryProtocol;

var connection = thrift.createConnection("localhost", 9092, {
    transport : transport,
    protocol : protocol
});

connection.on('error', function(err) {
    assert(false, err);
});

var client = thrift.createClient(StatisticsService, connection);

var exports = module.exports = {};

exports.client = client;