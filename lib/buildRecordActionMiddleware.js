"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = buildRecordActionMiddleware;
function buildRecordActionMiddleware() {
  var actions = [];

  return {
    actions: actions,
    middleware: middleware
  };

  function middleware() {
    return function (next) {
      return function (action) {
        actions.push(action);
        return next(action);
      };
    };
  }
}