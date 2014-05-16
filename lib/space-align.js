'use strict';

var StringMatrix = require('./string-matrix');
var _            = require('underscore');

var defaults = {
	spacing: 4
};

var spaceAlign = function(m, options) {
	options     = _.extend(defaults, options);
	
	var matrix  = new StringMatrix(m);
	var strings = [];
	var cache   = {};

	matrix.forEach(function(row, rowIndex) {
		var rowString      = '';
		var lastColumIndex = row.length - 1;

		row.forEach(function(string, columnIndex) {
			string = '' + string;

			if (columnIndex < lastColumIndex) {
				var longestStringInColumn = cache[columnIndex];
				if (typeof longestStringInColumn === 'undefined') {
					longestStringInColumn = matrix.longestStringInColumn(columnIndex);
					cache[columnIndex] = longestStringInColumn;
				}

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

module.exports = spaceAlign;