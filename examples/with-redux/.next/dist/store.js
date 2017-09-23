'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeStore = exports.addCount = exports.startClock = exports.serverRenderClock = exports.reducer = exports.actionTypes = undefined;

var _redux = require('redux');

var _reduxDevtoolsExtension = require('redux-devtools-extension');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var exampleInitialState = {
  lastUpdate: 0,
  light: false,
  count: 0
};

var actionTypes = exports.actionTypes = {
  ADD: 'ADD',
  TICK: 'TICK'

  // REDUCERS
};var reducer = exports.reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : exampleInitialState;
  var action = arguments[1];

  switch (action.type) {
    case actionTypes.TICK:
      return Object.assign({}, state, { lastUpdate: action.ts, light: !!action.light });
    case actionTypes.ADD:
      return Object.assign({}, state, {
        count: state.count + 1
      });
    default:
      return state;
  }
};

// ACTIONS
var serverRenderClock = exports.serverRenderClock = function serverRenderClock(isServer) {
  return function (dispatch) {
    return dispatch({ type: actionTypes.TICK, light: !isServer, ts: Date.now() });
  };
};

var startClock = exports.startClock = function startClock() {
  return function (dispatch) {
    return setInterval(function () {
      return dispatch({ type: actionTypes.TICK, light: true, ts: Date.now() });
    }, 800);
  };
};

var addCount = exports.addCount = function addCount() {
  return function (dispatch) {
    return dispatch({ type: actionTypes.ADD });
  };
};

// FIXME: add support for initialState?
var makeStore = exports.makeStore = function makeStore(middleware) {
  return (0, _redux.createStore)(reducer, exampleInitialState, (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(_reduxThunk2.default, middleware)));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JlLmpzIl0sIm5hbWVzIjpbImV4YW1wbGVJbml0aWFsU3RhdGUiLCJsYXN0VXBkYXRlIiwibGlnaHQiLCJjb3VudCIsImFjdGlvblR5cGVzIiwiQUREIiwiVElDSyIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJPYmplY3QiLCJhc3NpZ24iLCJ0cyIsInNlcnZlclJlbmRlckNsb2NrIiwiaXNTZXJ2ZXIiLCJkaXNwYXRjaCIsIkRhdGUiLCJub3ciLCJzdGFydENsb2NrIiwic2V0SW50ZXJ2YWwiLCJhZGRDb3VudCIsIm1ha2VTdG9yZSIsIm1pZGRsZXdhcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNO2NBQXNCLEFBQ2QsQUFDWjtTQUYwQixBQUVuQixBQUNQO1NBSEYsQUFBNEIsQUFHbkI7QUFIbUIsQUFDMUI7O0FBS0ssSUFBTTtPQUFjLEFBQ3BCLEFBQ0w7UUFBTSxBQUdSOztBQUxPLEFBQW9CO0FBQUEsQUFDekIsTUFLVyw0QkFBVSxTQUFWLEFBQVUsVUFBeUM7TUFBeEMsQUFBd0MsNEVBQWhDLEFBQWdDO01BQVgsQUFBVyxtQkFDOUQ7O1VBQVEsT0FBUixBQUFlLEFBQ2I7U0FBSyxZQUFMLEFBQWlCLEFBQ2Y7YUFBTyxPQUFBLEFBQU8sT0FBUCxBQUFjLElBQWQsQUFBa0IsT0FBTyxFQUFFLFlBQVksT0FBZCxBQUFxQixJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQWxFLEFBQU8sQUFBeUIsQUFBeUMsQUFDM0U7U0FBSyxZQUFMLEFBQWlCLEFBQ2Y7b0JBQU8sQUFBTyxPQUFQLEFBQWMsSUFBZCxBQUFrQjtlQUNoQixNQUFBLEFBQU0sUUFEZixBQUFPLEFBQXlCLEFBQ1QsQUFFekI7QUFIa0MsQUFDOUIsT0FESztBQUdBO2FBUFgsQUFPVyxBQUFPLEFBRW5COztBQVZNLENBQUE7O0FBWVA7QUFDTyxJQUFNLGdEQUFvQixTQUFwQixBQUFvQixrQkFBQSxBQUFDLFVBQUQ7U0FBYyxvQkFBWSxBQUN6RDtXQUFPLFNBQVMsRUFBRSxNQUFNLFlBQVIsQUFBb0IsTUFBTSxPQUFPLENBQWpDLEFBQWtDLFVBQVUsSUFBSSxLQUFoRSxBQUFPLEFBQVMsQUFBZ0QsQUFBSyxBQUN0RTtBQUZnQztBQUExQjs7QUFJQSxJQUFNLGtDQUFhLFNBQWIsQUFBYSxhQUFBO1NBQU0sb0JBQVksQUFDMUM7dUJBQW1CLFlBQUE7YUFBTSxTQUFTLEVBQUUsTUFBTSxZQUFSLEFBQW9CLE1BQU0sT0FBMUIsQUFBaUMsTUFBTSxJQUFJLEtBQTFELEFBQU0sQUFBUyxBQUEyQyxBQUFLO0FBQTNFLEtBQUEsRUFBUCxBQUFPLEFBQXFGLEFBQzdGO0FBRnlCO0FBQW5COztBQUlBLElBQU0sOEJBQVcsU0FBWCxBQUFXLFdBQUE7U0FBTSxvQkFBWSxBQUN4QztXQUFPLFNBQVMsRUFBRSxNQUFNLFlBQXhCLEFBQU8sQUFBUyxBQUFvQixBQUNyQztBQUZ1QjtBQUFqQjs7QUFJUDtBQUNPLElBQU0sZ0NBQVksU0FBWixBQUFZLFVBQUEsQUFBQyxZQUFlLEFBQ3ZDO1NBQU8sd0JBQUEsQUFBWSxTQUFaLEFBQXFCLHFCQUFxQixpREFBb0Isa0RBQXJFLEFBQU8sQUFBMEMsQUFBb0IsQUFBaUMsQUFDdkc7QUFGTSIsImZpbGUiOiJzdG9yZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvd2lsbGlhbWN1bm5pbmdoYW0vY29kZS9uZXh0LXJlZHV4LXJlcGxheS9leGFtcGxlcy93aXRoLXJlZHV4In0=