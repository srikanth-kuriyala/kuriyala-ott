"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./movieslist.css");

var _videoPlayer = _interopRequireDefault(require("./video-player"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class MoviesList extends _react.default.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "openPlayer", (e, item) => {
      e.preventDefault();
      this.setState({
        url: item.url,
        poster: item.poster
      });
    });

    _defineProperty(this, "closePlayer", e => {
      e.preventDefault();
      this.setState({
        url: '',
        poster: ''
      });
    });

    this.state = {
      url: '',
      poster: ''
    };
    this.openPlayer = this.openPlayer.bind(this);
    this.closePlayer = this.closePlayer.bind(this);
  }

  render() {
    return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("ul", {
      className: "movies_list"
    }, this.props.movies.map((item, index) => /*#__PURE__*/_react.default.createElement("li", {
      key: index
    }, /*#__PURE__*/_react.default.createElement("img", {
      className: "thumbnail",
      src: item.poster
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "desc"
    }, /*#__PURE__*/_react.default.createElement("h4", null, item.title), /*#__PURE__*/_react.default.createElement("div", null, item.shortDescription), /*#__PURE__*/_react.default.createElement("button", {
      className: "play_pause",
      onClick: e => this.openPlayer(e, item)
    }))))), /*#__PURE__*/_react.default.createElement(_videoPlayer.default, {
      url: this.state.url,
      poster: this.state.poster,
      closePlayer: this.closePlayer
    }));
  }

}

var _default = MoviesList;
exports.default = _default;