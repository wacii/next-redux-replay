"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _reactRedux = require("react-redux");

var _redux = require("redux");

var _buildRecordActionMiddleware = require("./buildRecordActionMiddleware");

var _buildRecordActionMiddleware2 = _interopRequireDefault(_buildRecordActionMiddleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function nextReduxReplay(callCreateStore, setup) {
  var _buildRecordActionMid = (0, _buildRecordActionMiddleware2.default)(),
      actions = _buildRecordActionMid.actions,
      middleware = _buildRecordActionMid.middleware;

  var enhancedCreateStore = (0, _redux.applyMiddleware)(middleware)(_redux.createStore);
  var store = void 0;

  return function (component) {
    // eslint-disable-next-line no-unused-vars
    function NextReduxWrapper(_ref) {
      var actions = _ref.actions,
          props = _objectWithoutProperties(_ref, ["actions"]);

      return (0, _react.createElement)(_reactRedux.Provider, { store: store }, component(props));
    }

    NextReduxWrapper.getInitialProps = function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                store = callCreateStore(enhancedCreateStore);
                _context.next = 3;
                return setup(store);

              case 3:
                return _context.abrupt("return", actions);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }();

    return NextReduxWrapper;
  };
}

exports.default = nextReduxReplay;