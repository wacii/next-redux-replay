'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _style = require("styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

var _redux = require("redux");

var _store = require("../store");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var AddCount = function (_Component) {
  _inherits(AddCount, _Component);

  function AddCount() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AddCount);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AddCount.__proto__ || Object.getPrototypeOf(AddCount)).call.apply(_ref, [this].concat(args))), _this), _this.add = function () {
      _this.props.addCount();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AddCount, [{
    key: 'render',
    value: function render() {
      var count = this.props.count;

      return _react2.default.createElement('div', {
        'data-jsx': 229971762
      }, _react2.default.createElement(_style2.default, {
        styleId: 229971762,
        css: 'div[data-jsx="229971762"]{padding:0 0 20px 0}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWRkQ291bnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY29CLEFBR2dDLG1CQUNyQiIsImZpbGUiOiJjb21wb25lbnRzL0FkZENvdW50LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy93aWxsaWFtY3VubmluZ2hhbS9jb2RlL25leHQtcmVkdXgtcmVwbGF5L2V4YW1wbGVzL3dpdGgtcmVkdXgiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgeyBhZGRDb3VudCB9IGZyb20gJy4uL3N0b3JlJ1xuXG5jbGFzcyBBZGRDb3VudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGFkZCA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLmFkZENvdW50KClcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyBjb3VudCB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMCAyMHB4IDA7XG4gICAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8aDE+QWRkQ291bnQ6IDxzcGFuPntjb3VudH08L3NwYW4+PC9oMT5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmFkZH0+QWRkIFRvIENvdW50PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHsgY291bnQgfSkgPT4gKHsgY291bnQgfSlcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgYWRkQ291bnQ6IGJpbmRBY3Rpb25DcmVhdG9ycyhhZGRDb3VudCwgZGlzcGF0Y2gpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQWRkQ291bnQpXG4iXX0= */\n/*@ sourceURL=components/AddCount.js */'
      }), _react2.default.createElement('h1', {
        'data-jsx': 229971762
      }, 'AddCount: ', _react2.default.createElement('span', {
        'data-jsx': 229971762
      }, count)), _react2.default.createElement('button', { onClick: this.add, 'data-jsx': 229971762
      }, 'Add To Count'));
    }
  }]);

  return AddCount;
}(_react.Component);

var mapStateToProps = function mapStateToProps(_ref2) {
  var count = _ref2.count;
  return { count: count };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addCount: (0, _redux.bindActionCreators)(_store.addCount, dispatch)
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AddCount);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWRkQ291bnQuanMiXSwibmFtZXMiOlsiQWRkQ291bnQiLCJhZGQiLCJwcm9wcyIsImFkZENvdW50IiwiY291bnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SSxBQUVNOzs7Ozs7Ozs7Ozs7OzswTCxBQUNKLE1BQU0sWUFBTSxBQUNWO1lBQUEsQUFBSyxNQUFMLEFBQVcsQUFDWjtBOzs7Ozs2QkFFUztVQUFBLEFBQ0EsUUFBVSxLQURWLEFBQ2UsTUFEZixBQUNBLEFBQ1I7OzZCQUNFLGNBQUE7b0JBQUE7QUFBQSxPQUFBO2lCQUFBO2FBQUEsQUFNRTtBQU5GLDBCQU1FLGNBQUE7b0JBQUE7QUFBQSxTQUFjLDhCQUFBLGNBQUE7b0JBQUEsQUFBTztBQUFQLFNBTmhCLEFBTUUsQUFBYyxBQUNkLHlCQUFBLGNBQUEsWUFBUSxTQUFTLEtBQWpCLEFBQXNCLGlCQUF0QjtTQVJKLEFBQ0UsQUFPRSxBQUdMOzs7Ozs7O0FBR0gsSUFBTSxrQkFBa0IsU0FBbEIsQUFBa0IsdUJBQUE7TUFBQSxBQUFHLGNBQUgsQUFBRztTQUFhLEVBQUUsT0FBbEIsQUFBZ0I7QUFBeEM7O0FBRUEsSUFBTSxxQkFBcUIsU0FBckIsQUFBcUIsbUJBQUEsQUFBQyxVQUFhLEFBQ3ZDOztjQUNZLGdEQURaLEFBQU8sQUFDSyxBQUE2QixBQUUxQztBQUhRLEFBQ0w7QUFGSjs7a0JBTWUseUJBQUEsQUFBUSxpQkFBUixBQUF5QixvQkFBekIsQUFBNkMsQSIsImZpbGUiOiJBZGRDb3VudC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvd2lsbGlhbWN1bm5pbmdoYW0vY29kZS9uZXh0LXJlZHV4LXJlcGxheS9leGFtcGxlcy93aXRoLXJlZHV4In0=