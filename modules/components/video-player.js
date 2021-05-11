import React, { Component } from 'react';
import ShakaPlayer from 'shaka-player-react';
import 'shaka-player/dist/controls.css';

class SRKPlayer extends Component {
    render() {
        return (
            <>
                { this.props.url ?
                <div className="player">
                    <button className="close" onClick={this.props.closePlayer}></button>
                    <ShakaPlayer autoPlay src={this.props.url} />
                </div> : ''}
            </>
        );
    }
}
export default SRKPlayer;