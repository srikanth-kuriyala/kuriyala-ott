"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.symbol.description.js");

var _react = _interopRequireDefault(require("react"));

var _progressBar = _interopRequireDefault(require("../core/progress-bar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const MovieDetailsPage = props => {
  document.body.style.overflow = "hidden";
  const {
    movie
  } = props;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "movie_details"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "close",
    onClick: props.closeMovieDetails
  }), /*#__PURE__*/_react.default.createElement("img", {
    className: "banner",
    src: movie.banner
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "desc"
  }, /*#__PURE__*/_react.default.createElement("h2", null, movie.title), /*#__PURE__*/_react.default.createElement("p", null, "Released year: ", movie.year), /*#__PURE__*/_react.default.createElement("p", null, movie.description), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      color: 'gold'
    }
  }, /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("strong", null, "Starring:"), " ", movie.starring), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("strong", null, "Director:"), " ", movie.director), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("strong", null, "Genres:"), " ", movie.category), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("strong", null, "Audio language:"), " ", movie.language)), /*#__PURE__*/_react.default.createElement("button", {
    className: "play",
    onClick: e => props.openPlayer(e, movie)
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "progress_parent_parent"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "progress_parent"
  }, /*#__PURE__*/_react.default.createElement(_progressBar.default, {
    progressBarPercent: movie.progressBarPercent
  })))));
};

var _default = MovieDetailsPage;
exports.default = _default;