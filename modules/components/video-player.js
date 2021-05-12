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
    }
    componentDidMount() {
        var video = document.querySelector("video");
        
        var self = this;
        var i = setTimeout(function() {
            if(video.readyState > 0) { // If video metadata is loaded get duration
                self.setState({ duration: video.duration });
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

    render() {
        console.log(this.state);
        return (
            <div className="player">
                <button className="close" onClick={(e) => this.props.closePlayer(e, this.state)}></button>
                <ShakaPlayer autoPlay src={this.props.url} />
            </div>
        )
    }
}
export default SRKPlayer;
