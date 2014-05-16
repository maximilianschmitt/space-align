'use strict';

var Matrix = function(matrix) {
	this.matrix = matrix;
	this._cache = {};
};

Matrix.prototype = {
	// returns the number of columns
	numColumns: function() {
		var longest, index;

		this.matrix.forEach(function(row, i) {
			var length = row.length;

			if (typeof longest === 'undefined' || length > longest) {
				longest = length;
				index   = i;
			}
		});

		return longest;
	},

	longestStringInRow: function(rowIndex) {
		if (typeof rowIndex !== 'number') throw new TypeError('rowIndex must be a number');

		var row = this.matrix[rowIndex];
		if (row.length <= 0) return null;

		var longest, index;

		row.forEach(function(string, i) {
			string = '' + string;
			var length = string.length;

			if (typeof longest === 'undefined' || length > longest) {
				longest = length;
				index   = i;
			}
		});

		return row[index];
	},

	shortestStringInRow: function(rowIndex) {
		if (typeof rowIndex !== 'number') throw new TypeError('rowIndex must be a number');

		var row = this.matrix[rowIndex];
		if (row.length <= 0) return null;

		var shortest, index;

		row.forEach(function(string, i) {
			string = '' + string;
			var length = string.length;

			if (typeof shortest === 'undefined' || length < shortest) {
				shortest = length;
				index   = i;
			}
		});

		return row[index];
	},

	shortestStringInColumn: function(columnIndex) {
		if (typeof columnIndex !== 'number') throw new TypeError('columnIndex must be a number');

		var shortest, rowIndex;

		this.matrix.forEach(function(row, r) {
			if (row.length <= columnIndex) return;

			var string = '' + row[columnIndex];
			var length = string.length;

			if (typeof shortest === 'undefined' || length < shortest) {
				shortest = length;
				rowIndex = r;
			}
		});

		if (typeof rowIndex === 'undefined') return null;

		return this.matrix[rowIndex][columnIndex];
	},

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