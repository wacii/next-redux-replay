'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = function (_ref) {
  var lastUpdate = _ref.lastUpdate,
      light = _ref.light;

  return _react2.default.createElement('div', { className: light ? 'light' : '', 'data-jsx': 2129652238
  }, format(new Date(lastUpdate)), _react2.default.createElement(_style2.default, {
    styleId: 2129652238,
    css: 'div[data-jsx="2129652238"]{padding:15px;display:inline-block;color:#82FA58;font:50px menlo,monaco,monospace;background-color:#000}.light[data-jsx="2129652238"]{background-color:#999}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ2xvY2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS2tCLEFBR3dCLEFBUVMsYUFQRCxTQVF2QixZQVBnQixjQUNxQixpQ0FDYixzQkFDeEIiLCJmaWxlIjoiY29tcG9uZW50cy9DbG9jay5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvd2lsbGlhbWN1bm5pbmdoYW0vY29kZS9uZXh0LXJlZHV4LXJlcGxheS9leGFtcGxlcy93aXRoLXJlZHV4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IGRlZmF1bHQgKHsgbGFzdFVwZGF0ZSwgbGlnaHQgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtsaWdodCA/ICdsaWdodCcgOiAnJ30+XG4gICAgICB7Zm9ybWF0KG5ldyBEYXRlKGxhc3RVcGRhdGUpKX1cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgZGl2IHtcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBjb2xvcjogIzgyRkE1ODtcbiAgICAgICAgICBmb250OiA1MHB4IG1lbmxvLCBtb25hY28sIG1vbm9zcGFjZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmxpZ2h0IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgZm9ybWF0ID0gdCA9PiBgJHtwYWQodC5nZXRVVENIb3VycygpKX06JHtwYWQodC5nZXRVVENNaW51dGVzKCkpfToke3BhZCh0LmdldFVUQ1NlY29uZHMoKSl9YFxuXG5jb25zdCBwYWQgPSBuID0+IG4gPCAxMCA/IGAwJHtufWAgOiBuXG4iXX0= */\n/*@ sourceURL=components/Clock.js */'
  }));
};

var format = function format(t) {
  return pad(t.getUTCHours()) + ':' + pad(t.getUTCMinutes()) + ':' + pad(t.getUTCSeconds());
};

var pad = function pad(n) {
  return n < 10 ? '0' + n : n;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ2xvY2suanMiXSwibmFtZXMiOlsibGFzdFVwZGF0ZSIsImxpZ2h0IiwiZm9ybWF0IiwiRGF0ZSIsInBhZCIsInQiLCJnZXRVVENIb3VycyIsImdldFVUQ01pbnV0ZXMiLCJnZXRVVENTZWNvbmRzIiwibiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7OztrQkFDZSxnQkFBMkI7TUFBeEIsQUFBd0Isa0JBQXhCLEFBQXdCO01BQVosQUFBWSxhQUFaLEFBQVksQUFDeEM7O3lCQUNFLGNBQUEsU0FBSyxXQUFXLFFBQUEsQUFBUSxVQUF4QixBQUFrQyxnQkFBbEMsQUFDRztHQURILFNBQ1UsSUFBQSxBQUFJLEtBRGQsQUFDRyxBQUFPLEFBQVM7YUFEbkI7U0FERixBQUNFLEFBaUJIO0FBakJHO0E7O0FBbUJKLElBQU0sU0FBUyxTQUFULEFBQVMsVUFBQTtTQUFRLElBQUksRUFBWixBQUFRLEFBQUksQUFBRSx1QkFBa0IsSUFBSSxFQUFwQyxBQUFnQyxBQUFJLEFBQUUseUJBQW9CLElBQUksRUFBOUQsQUFBMEQsQUFBSSxBQUFFO0FBQS9FOztBQUVBLElBQU0sTUFBTSxTQUFOLEFBQU0sT0FBQTtTQUFLLElBQUEsQUFBSSxXQUFKLEFBQWEsSUFBbEIsQUFBd0I7QUFBcEMiLCJmaWxlIjoiQ2xvY2suanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3dpbGxpYW1jdW5uaW5naGFtL2NvZGUvbmV4dC1yZWR1eC1yZXBsYXkvZXhhbXBsZXMvd2l0aC1yZWR1eCJ9