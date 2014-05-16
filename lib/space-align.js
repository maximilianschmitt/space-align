'use strict';

var StringMatrix = require('./string-matrix');
var _      = require('underscore');

function rowWithLongestStringAtColumn(matrix, column) {
	var longest, rowIndex;

	matrix.forEach(function(row, i) {
		if (row.length <= column) return;

		var length = row[column];

		if (typeof longest === 'undefined' || length > longest) {
			longest  = length;
			rowIndex = i;
		}
	});

	return rowIndex;
}

module.exports = function(m, options) {

	options = _.extend({
		spacing: 4
	}, options);

	var matrix = new StringMatrix(m);
	var strings = [];

	matrix.forEach(function(row, rowIndex) {
		var rowString = '';
		var lastColumIndex = row.length - 1;
		row.forEach(function(string, columnIndex) {
			string = '' + string;

			if (columnIndex < lastColumIndex) {
				var longestStringInColumn = matrix.longestStringInColumn(columnIndex);
				if (longestStringInColumn === null) return;

				var stringLength = string.length;
				var numSpaces    = longestStringInColumn.length - stringLength;

				for (var i = 0; i < numSpaces + options.spacing; i++) {
					string += ' ';
				}
			}

			rowString += string;

		});

		strings.push(rowString);
	});

	return strings;
	
};