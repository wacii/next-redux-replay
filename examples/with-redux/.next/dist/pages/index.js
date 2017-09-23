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

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

var _redux = require("redux");

var _store = require("../store");

var _nextReduxReplay = require("next-redux-replay");

var _nextReduxReplay2 = _interopRequireDefault(_nextReduxReplay);

var _Page = require("../components/Page");

var _Page2 = _interopRequireDefault(_Page);

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

var Counter = function (_React$Component) {
  _inherits(Counter, _React$Component);

  function Counter() {
    _classCallCheck(this, Counter);

    return _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).apply(this, arguments));
  }

  _createClass(Counter, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.timer = this.props.startClock();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.timer);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Page2.default, { title: 'Index Page', linkTo: '/other' });
    }
  }]);

  return Counter;
}(_react2.default.Component);

function initStore(_ref) {
  var store = _ref.store,
      isServer = _ref.isServer;

  store.dispatch((0, _store.serverRenderClock)(isServer));
  store.dispatch((0, _store.addCount)());

  return { isServer: isServer };
}

function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ addCount: _store.addCount, startClock: _store.startClock }, dispatch);
}

exports.default = (0, _redux.compose)((0, _nextReduxReplay2.default)(_store.makeStore, initStore), (0, _reactRedux.connect)(null, mapDispatchToProps))(Counter);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkNvdW50ZXIiLCJ0aW1lciIsInByb3BzIiwic3RhcnRDbG9jayIsImNsZWFySW50ZXJ2YWwiLCJDb21wb25lbnQiLCJpbml0U3RvcmUiLCJzdG9yZSIsImlzU2VydmVyIiwiZGlzcGF0Y2giLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJhZGRDb3VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTSxBOzs7Ozs7Ozs7Ozt3Q0FDaUIsQUFDbkI7V0FBSyxBQUFMLFFBQWEsS0FBSyxBQUFMLE1BQVcsQUFBWCxBQUFiLEFBQ0Q7Ozs7MkNBRXVCLEFBQ3RCO29CQUFjLEtBQUssQUFBbkIsQUFDRDs7Ozs2QkFFUyxBQUNSO2FBQ0UsZ0RBQU0sT0FBTSxBQUFaLGNBQXlCLFFBQU8sQUFBaEMsQUFERixBQUdEOzs7OztFQWJtQixnQkFBTSxBOztBQWdCNUIsU0FBUyxBQUFULGdCQUF3QztNQUFuQixBQUFtQixhQUFuQixBQUFtQjtNQUFaLEFBQVksZ0JBQVosQUFBWSxBQUN0Qzs7UUFBTSxBQUFOLFNBQWUsOEJBQWtCLEFBQWxCLEFBQWYsQUFDQTtRQUFNLEFBQU4sU0FBZSxXQUFmLEFBRUE7O1NBQU8sRUFBRSxVQUFGLEFBQVAsQUFDRDs7O0FBRUQsU0FBUyxBQUFULG1CQUE0QixBQUE1QixVQUFzQyxBQUNwQztTQUFPLCtCQUFtQixFQUFFLGlCQUFGLFVBQVksbUJBQVosQUFBbkIsY0FBNkMsQUFBN0MsQUFBUCxBQUNEOzs7a0JBRWMsb0JBQ2IsaURBQXFCLEFBQXJCLEFBRGEsWUFFYix5QkFBUSxBQUFSLE1BQWMsQUFBZCxBQUZhLHFCQUdiLEFBSGEsQSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvd2lsbGlhbWN1bm5pbmdoYW0vY29kZS9uZXh0LXJlZHV4LXJlcGxheS9leGFtcGxlcy93aXRoLXJlZHV4In0=