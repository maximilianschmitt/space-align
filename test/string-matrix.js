/* global describe, it */
'use strict';

var expect = require('chai').expect;
var StringMatrix = require('../lib/string-matrix');

var regularStringMatrix = new StringMatrix([
	['pFFwmFYvv', 'ulTmeey', 'HDjklKxrDqlB', 'IguWRJMwSFQJiHKup'],
	['mQF', 'aONbZkLQVeibqIj', 'xrNNLgURPMmgD', 'jVoTVNKCADDxvlUGbijd'],
	['ttaH', 'OtOuxS', 'evWuLEuXoBQg', 'WiXSKieVw']
]);

var irregularStringMatrix = new StringMatrix([
	['pFFwmFYvv', 'ulTmeey', 'HDjklKxrDqlB', 'IguWRJMwSFQJiHKup'],
	['mQF', 'aONbZkLQVeibqIj', 'xrNNLgURPMmgD', 'jVoTVNKCADDxvlUGbijd'],
	['ftAgoLjCSVnExocxLOcg', 'NcUhrlaWtcCvCjImux', 'euZyRjCvTNmkPXtu', 'jSFBGdawiUmV', 'EidukwrjHiIJpO'],
	['gryRyIXUkEOWSAtH', 'pCuttSP'],
	['ttaH', 'OtOuxS', 'evWuLEuXoBQg', 'WiXSKieVw']
]);

describe('StringMatrix', function() {
	describe('longestStringInColumn', function() {
		it('should throw an error if not passed a number', function() {
			expect(regularStringMatrix.longestStringInColumn.bind(regularStringMatrix, 'some-string')).to.throw(TypeError);
			expect(regularStringMatrix.longestStringInColumn.bind(regularStringMatrix, {})).to.throw(TypeError);
			expect(regularStringMatrix.longestStringInColumn.bind(regularStringMatrix, [])).to.throw(TypeError);
		});

		it('should return null for empty columns', function() {
			var stringMatrix = new StringMatrix([
				[],
				[]
			]);

			expect(stringMatrix.longestStringInColumn(0)).to.be.a('null');
		});

		it('should work with regular matrices', function() {
			expect(regularStringMatrix.longestStringInColumn(0)).to.equal('pFFwmFYvv');
			expect(regularStringMatrix.longestStringInColumn(1)).to.equal('aONbZkLQVeibqIj');
			expect(regularStringMatrix.longestStringInColumn(2)).to.equal('xrNNLgURPMmgD');
			expect(regularStringMatrix.longestStringInColumn(3)).to.equal('jVoTVNKCADDxvlUGbijd');
		});
	});

});