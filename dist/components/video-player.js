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
  }

  componentDidMount() {
    var video = document.querySelector("video");
    var self = this;
    var i = setTimeout(function () {
      if (video.readyState > 0) {
        // If video metadata is loaded get duration
        self.setState({
          duration: video.duration
        });
      }

      clearTimeout(i);
    }, 1000);
    video.addEventListener("play", this.videoStartedPlaying);
    video.addEventListener("playing", this.videoStartedPlaying);
    video.addEventListener("ended", this.videoStoppedPlaying);
    video.addEventListener("pause", this.videoStoppedPlaying);
  }

  componentWillUnmount() {
    var video = document.querySelector("video");
    video.removeEventListener("play", this.videoStartedPlaying);
    video.removeEventListener("playing", this.videoStartedPlaying);
    video.removeEventListener("ended", this.videoStoppedPlaying);
    video.removeEventListener("pause", this.videoStoppedPlaying);
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
  }

  render() {
    console.log(this.state);
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "player"
    }, /*#__PURE__*/_react.default.createElement("button", {
      className: "close",
      onClick: e => this.props.closePlayer(e, this.state)
    }), /*#__PURE__*/_react.default.createElement(_shakaPlayerReact.default, {
      autoPlay: true,
      src: this.props.url
    }));
  }

}

var _default = SRKPlayer;
exports.default = _default;