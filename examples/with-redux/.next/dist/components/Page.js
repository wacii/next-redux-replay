'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _reactRedux = require('react-redux');

var _Clock = require('./Clock');

var _Clock2 = _interopRequireDefault(_Clock);

var _AddCount = require('./AddCount');

var _AddCount2 = _interopRequireDefault(_AddCount);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = (0, _reactRedux.connect)(function (state) {
  return state;
})(function (_ref) {
  var title = _ref.title,
      linkTo = _ref.linkTo,
      lastUpdate = _ref.lastUpdate,
      light = _ref.light;

  return _react2.default.createElement('div', null, _react2.default.createElement('h1', null, title), _react2.default.createElement(_Clock2.default, { lastUpdate: lastUpdate, light: light }), _react2.default.createElement(_AddCount2.default, null), _react2.default.createElement('nav', null, _react2.default.createElement(_link2.default, { href: linkTo }, _react2.default.createElement('a', null, 'Navigate'))));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUGFnZS5qcyJdLCJuYW1lcyI6WyJzdGF0ZSIsInRpdGxlIiwibGlua1RvIiwibGFzdFVwZGF0ZSIsImxpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7MkNBRXVCLGlCQUFBO1NBQUEsQUFBUztBQUFqQixDQUFBLEVBQXdCLGdCQUEwQztNQUF2QyxBQUF1QyxhQUF2QyxBQUF1QztNQUFoQyxBQUFnQyxjQUFoQyxBQUFnQztNQUF4QixBQUF3QixrQkFBeEIsQUFBd0I7TUFBWixBQUFZLGFBQVosQUFBWSxBQUMvRTs7U0FDRSxnQkFBQSxjQUFBLE9BQ0Usc0JBQUEsY0FBQSxNQUFLLE1BRFAsQUFDRSxBQUNBLHlEQUFPLFlBQVAsQUFBbUIsWUFBWSxPQUZqQyxBQUVFLEFBQXNDLEFBQ3RDLDREQUhGLEFBSUUsdUJBQUEsY0FBQSxPQUNFLHNCQUFBLHFCQUFBLFdBQU0sTUFBTixBQUFZLEFBQVEsMEJBQUEsY0FBQSxLQUFBLE1BTjFCLEFBQ0UsQUFJRSxBQUNFLEFBQW9CLEFBSTNCO0FBWGMsQSIsImZpbGUiOiJQYWdlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy93aWxsaWFtY3VubmluZ2hhbS9jb2RlL25leHQtcmVkdXgtcmVwbGF5L2V4YW1wbGVzL3dpdGgtcmVkdXgifQ==