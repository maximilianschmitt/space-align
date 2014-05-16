'use strict';

var Matrix = function(matrix) {
	this._matrix = matrix;
};

Matrix.prototype = {
	longestStringInColumn: function(columnIndex) {
		if (typeof columnIndex !== 'number') throw new TypeError('columnIndex must be a number');

		var longest, rowIndex;

		this._matrix.forEach(function(row, r) {
			if (row.length <= columnIndex) return;

			var string = '' + row[columnIndex];
			var length = string.length;

			if (typeof longest === 'undefined' || length > longest) {
				longest = length;
				rowIndex = r;
			}
		});

		if (typeof rowIndex === 'undefined') return null;

		return this._matrix[rowIndex][columnIndex];
	},

	forEach: function() {
		this._matrix.forEach.apply(this._matrix, arguments);
	}
};

module.exports = Matrix;