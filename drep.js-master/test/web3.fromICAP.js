var chai = require('chai');
var Drep = require('../index');
var drep = new Drep();
var assert = chai.assert;

var tests = [
    { direct: 'XE7338O073KYGTWWZN0F2WZ0R8PX5ZPPZS', address: '00c5496aee77c1ba1f0854206a26dda82a81d6d8'}
];

describe('drep', function () {
    describe('fromICAP', function () {
        tests.forEach(function (test) {
            it('shoud transform iban to address: ' +  test.address, function () {
                assert.deepEqual(drep.fromICAP(test.direct), test.address);
            });
        });   
    });
});

