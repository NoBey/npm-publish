webpackJsonp([0,1,2,3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _okokok = __webpack_require__(1);

	var oo = 44; // import {$} from 'zepto'

	console.log(oo);
	console.log(_okokok.x);


/***/ },
/* 1 */
/***/ function(module, exports) {

	var x = 5;
	var addX = function(value) {
	  return value + x;
	};
	module.exports.x = x;
	module.exports.addX = addX;


/***/ }
]);