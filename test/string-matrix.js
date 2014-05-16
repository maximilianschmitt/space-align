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
	describe('numColumns', function() {
		it('should return the number of columns for a regular stringMatrix', function() {
			expect(regularStringMatrix.numColumns()).to.equal(4);
		});

		it('should return the number of columns for an irregular stringMatrix', function() {
			expect(irregularStringMatrix.numColumns()).to.equal(5);
		});
	});

	describe('longestStringInRow', function() {
		it('should throw an error if not passed a number', function() {
			expect(regularStringMatrix.longestStringInRow.bind(regularStringMatrix, 'some-string')).to.throw(TypeError);
			expect(regularStringMatrix.longestStringInRow.bind(regularStringMatrix, {})).to.throw(TypeError);
			expect(regularStringMatrix.longestStringInRow.bind(regularStringMatrix, [])).to.throw(TypeError);
		});

		it('should return null for empty rows', function() {
			var stringMatrix = new StringMatrix([
				[]
			]);

			expect(stringMatrix.longestStringInRow(0)).to.be.a('null');
		});

		it('should work with normal rows', function() {
			expect(regularStringMatrix.longestStringInRow(0)).to.equal('IguWRJMwSFQJiHKup');
			expect(regularStringMatrix.longestStringInRow(1)).to.equal('jVoTVNKCADDxvlUGbijd');
			expect(regularStringMatrix.longestStringInRow(2)).to.equal('evWuLEuXoBQg');
		});
	});

	describe('shortestStringInRow', function() {
		it('should throw an error if not passed a number', function() {
			expect(regularStringMatrix.shortestStringInRow.bind(regularStringMatrix, 'some-string')).to.throw(TypeError);
			expect(regularStringMatrix.shortestStringInRow.bind(regularStringMatrix, {})).to.throw(TypeError);
			expect(regularStringMatrix.shortestStringInRow.bind(regularStringMatrix, [])).to.throw(TypeError);
		});

		it('should return null for empty rows', function() {
			var stringMatrix = new StringMatrix([
				[]
			]);

			expect(stringMatrix.shortestStringInRow(0)).to.be.a('null');
		});

		it('should work with normal rows', function() {
			expect(regularStringMatrix.shortestStringInRow(0)).to.equal('ulTmeey');
			expect(regularStringMatrix.shortestStringInRow(1)).to.equal('mQF');
			expect(regularStringMatrix.shortestStringInRow(2)).to.equal('ttaH');
		});
	});

	describe('shortestStringInColumn', function() {
		it('should throw an error if not passed a number', function() {
			expect(regularStringMatrix.shortestStringInColumn.bind(regularStringMatrix, 'some-string')).to.throw(TypeError);
			expect(regularStringMatrix.shortestStringInColumn.bind(regularStringMatrix, {})).to.throw(TypeError);
			expect(regularStringMatrix.shortestStringInColumn.bind(regularStringMatrix, [])).to.throw(TypeError);
		});

		it('should return null for empty columns', function() {
			var stringMatrix = new StringMatrix([
				[],
				[]
			]);

			expect(stringMatrix.shortestStringInColumn(0)).to.be.a('null');
		});

		it('should work with regular matrices', function() {
			expect(regularStringMatrix.shortestStringInColumn(0)).to.equal('mQF');
			expect(regularStringMatrix.shortestStringInColumn(1)).to.equal('OtOuxS');
			expect(regularStringMatrix.shortestStringInColumn(2)).to.equal('HDjklKxrDqlB');
			expect(regularStringMatrix.shortestStringInColumn(3)).to.equal('WiXSKieVw');
		});
	});

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