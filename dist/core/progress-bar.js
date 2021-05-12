"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ProgressBar = props => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "progress_bar",
    style: {
      width: props.progressBarPercent + '%'
    }
  });
};

var _default = ProgressBar;
exports.default = _default;