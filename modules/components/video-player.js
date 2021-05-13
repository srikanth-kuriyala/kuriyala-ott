import React, { Component } from 'react';
import ShakaPlayer from 'shaka-player-react';
import 'shaka-player/dist/controls.css';

class SRKPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timeStarted: -1,
            timePlayed: 0,
            duration: 0
        }
        this.videoStartedPlaying = this.videoStartedPlaying.bind(this);
        this.videoStoppedPlaying = this.videoStoppedPlaying.bind(this);
        this.videoSeek = this.videoSeek.bind(this);
    }
    componentDidMount() {
        this.video = document.querySelector("video");
        
        var self = this;
        var i = setTimeout(function() {
            if(self.video.readyState > 0) { // If video metadata is loaded get duration
                self.setState({ duration: self.video.duration });
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
    }

    // remember time user started the video
    videoStartedPlaying() {
        this.setState({ timeStarted: new Date().getTime()/1000 });
    }

    videoStoppedPlaying(event) {
        if(this.state.timeStarted > 0) {
            var playedFor = new Date().getTime()/1000 - this.state.timeStarted;
            this.setState({ timeStarted: -1 });
            // add the new number of seconds played
            let timePlayed = this.state.timePlayed + playedFor;
            this.setState({ timePlayed: timePlayed });
        }
    }

    // Video 
    videoSeek() {
        this.setState({ timePlayed: this.video.currentTime })
    }

    closePlayer(e) {
        this.videoStoppedPlaying(e);
        var self = this;
        setTimeout(() => {
            self.props.closePlayer(e, self.state);
        },200);
    }

    render() {
        const { movie } = this.props;
        return (
            <div className="player">
                <button className="close" onClick={(e) => this.closePlayer(e)}></button>
                <ShakaPlayer autoPlay src={`${movie.url}#t=${movie.timePlayed},${movie.duration}`} />
            </div>
        )
    }
}
export default SRKPlayer;
