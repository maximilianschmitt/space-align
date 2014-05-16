'use strict';

var Matrix = function(matrix) {
	this.matrix = matrix;
	this._cache = {};
};

Matrix.prototype = {
	longestStringInColumn: function(columnIndex) {
		if (typeof columnIndex !== 'number') throw new TypeError('columnIndex must be a number');

		var longest, rowIndex;

		this.matrix.forEach(function(row, r) {
			if (row.length <= columnIndex) return;

			var string = '' + row[columnIndex];
			var length = string.length;

			if (typeof longest === 'undefined' || length > longest) {
				longest = length;
				rowIndex = r;
			}
		});

		if (typeof rowIndex === 'undefined') return null;

		return this.matrix[rowIndex][columnIndex];
	},

	forEach: function() {
		this.matrix.forEach.apply(this.matrix, arguments);
	}
};

module.exports = Matrix;