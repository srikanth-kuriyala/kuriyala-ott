"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _shakaPlayerReact = _interopRequireDefault(require("shaka-player-react"));

require("shaka-player/dist/controls.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

class SRKPlayer extends _react.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeStarted: -1,
      timePlayed: 0,
      duration: 0
    };
    this.videoStartedPlaying = this.videoStartedPlaying.bind(this);
    this.videoStoppedPlaying = this.videoStoppedPlaying.bind(this);
    this.videoSeek = this.videoSeek.bind(this);
  }

  componentDidMount() {
    this.video = document.querySelector("video");
    var self = this;
    var i = setTimeout(function () {
      if (self.video.readyState > 0) {
        // If video metadata is loaded get duration
        self.setState({
          duration: self.video.duration
        });
      }

      clearTimeout(i);
    }, 1000);
    this.video.addEventListener("play", this.videoStartedPlaying);
    this.video.addEventListener("playing", this.videoStartedPlaying);
    this.video.addEventListener("ended", this.videoStoppedPlaying);
    this.video.addEventListener("pause", this.videoStoppedPlaying);
    this.video.addEventListener("seeking", this.videoSeek);
  }

  componentWillUnmount() {
    this.video = document.querySelector("video");
    this.video.removeEventListener("play", this.videoStartedPlaying);
    this.video.removeEventListener("playing", this.videoStartedPlaying);
    this.video.removeEventListener("ended", this.videoStoppedPlaying);
    this.video.removeEventListener("pause", this.videoStoppedPlaying);
    this.video.removeEventListener("seeking", this.videoSeek);
  } // remember time user started the video


  videoStartedPlaying() {
    this.setState({
      timeStarted: new Date().getTime() / 1000
    });
  }

  videoStoppedPlaying(event) {
    if (this.state.timeStarted > 0) {
      var playedFor = new Date().getTime() / 1000 - this.state.timeStarted;
      this.setState({
        timeStarted: -1
      }); // add the new number of seconds played

      let timePlayed = this.state.timePlayed + playedFor;
      this.setState({
        timePlayed: timePlayed
      });
    }
  } // Video 


  videoSeek() {
    this.setState({
      timePlayed: this.video.currentTime
    });
  }

  closePlayer(e) {
    this.videoStoppedPlaying(e);
    var self = this;
    setTimeout(() => {
      self.props.closePlayer(e, self.state);
    }, 200);
  }

  render() {
    const {
      movie
    } = this.props;
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "player"
    }, /*#__PURE__*/_react.default.createElement("button", {
      className: "close",
      onClick: e => this.closePlayer(e)
    }), /*#__PURE__*/_react.default.createElement(_shakaPlayerReact.default, {
      autoPlay: true,
      src: "".concat(movie.url, "#t=").concat(movie.timePlayed, ",").concat(movie.duration)
    }));
  }

}

var _default = SRKPlayer;
exports.default = _default;