var chai = require('chai');
var assert = chai.assert;
var Method = require('../lib/drep/method');
var errors = require('../lib/drep/errors');

describe('lib/drep/method', function () {
    describe('validateArgs', function () {
        it('should pass', function () {
            
            // given
            var method = new Method({
                params: 1
            });

            var args = [1];
            var args2 = ['heloas'];

            // when
            var test = function () { method.validateArgs(args); };
            var test2 = function () { method.validateArgs(args2); };

            // then
            assert.doesNotThrow(test);
            assert.doesNotThrow(test2);
        });

        it('should return call based on args', function () {
        
            // given
            var method = new Method({
                params: 2
            });

            var args = [1];
            var args2 = ['heloas', '12', 3];

            // when
            var test = function () { method.validateArgs(args); };
            var test2 = function () { method.validateArgs(args2); };
            
            // then
            assert.throws(test, errors.InvalidNumberOfRPCParams().message);
            assert.throws(test2, errors.InvalidNumberOfRPCParams().message);
        });
    });
});
