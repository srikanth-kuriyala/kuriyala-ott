"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./movieslist.css");

var _videoPlayer = _interopRequireDefault(require("./video-player"));

var _movieDetails = _interopRequireDefault(require("./movie-details"));

var _progressBar = _interopRequireDefault(require("../core/progress-bar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class MoviesList extends _react.default.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "openPlayer", (e, item) => {
      e.preventDefault();
      this.setState({
        showPlayer: true,
        showMovieDetails: false,
        movie: item
      });
    });

    _defineProperty(this, "closePlayer", (e, videoState) => {
      e.preventDefault();
      this.props.updateMovieStatus(videoState, this.state.movie);
      this.setState({
        showPlayer: false
      });
    });

    _defineProperty(this, "movieDetails", (e, item) => {
      e.preventDefault();
      this.setState({
        showPlayer: false,
        showMovieDetails: true,
        movie: item
      });
    });

    _defineProperty(this, "closeMovieDetails", e => {
      e.preventDefault();
      this.setState({
        showPlayer: false,
        showMovieDetails: false,
        movie: ''
      });
    });

    this.state = {
      movie: '',
      showPlayer: false,
      showMovieDetails: false
    };
    this.openPlayer = this.openPlayer.bind(this);
    this.closePlayer = this.closePlayer.bind(this);
    this.movieDetails = this.movieDetails.bind(this);
    this.closeMovieDetails = this.closeMovieDetails.bind(this);
  }

  render() {
    return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("ul", {
      className: "movies_list"
    }, this.props.movies ? this.props.movies.map((item, index) => /*#__PURE__*/_react.default.createElement("li", {
      key: index
    }, /*#__PURE__*/_react.default.createElement("a", {
      onClick: e => this.movieDetails(e, item)
    }, /*#__PURE__*/_react.default.createElement("img", {
      className: "thumbnail",
      src: item.poster
    })), item.progressBarPercent > 95 ? /*#__PURE__*/_react.default.createElement("span", {
      className: "watched"
    }, "Watched", /*#__PURE__*/_react.default.createElement("span", null)) : '', /*#__PURE__*/_react.default.createElement("div", {
      className: "desc"
    }, /*#__PURE__*/_react.default.createElement("h4", null, item.title), /*#__PURE__*/_react.default.createElement("div", null, item.shortDescription), /*#__PURE__*/_react.default.createElement("button", {
      className: "play",
      onClick: e => this.openPlayer(e, item)
    }), /*#__PURE__*/_react.default.createElement("span", {
      className: "year"
    }, item.year), /*#__PURE__*/_react.default.createElement("div", {
      className: "progress_parent"
    }, /*#__PURE__*/_react.default.createElement(_progressBar.default, {
      progressBarPercent: item.progressBarPercent
    }))))) : /*#__PURE__*/_react.default.createElement("h1", null, "No Movies available")), this.state.showPlayer ? /*#__PURE__*/_react.default.createElement(_videoPlayer.default, {
      movie: this.state.movie,
      closePlayer: this.closePlayer
    }) : null, this.state.showMovieDetails ? /*#__PURE__*/_react.default.createElement(_movieDetails.default, {
      movie: this.state.movie,
      openPlayer: this.openPlayer,
      closeMovieDetails: this.closeMovieDetails
    }) : null);
  }

}

var _default = MoviesList;
exports.default = _default;