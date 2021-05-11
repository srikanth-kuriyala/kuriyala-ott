import React from "react";
import './movieslist.css';
import SRKPlayer from "./video-player";

class MoviesList extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            url: '',
            poster: ''
        }

        this.openPlayer = this.openPlayer.bind(this);
        this.closePlayer = this.closePlayer.bind(this);
    }

    openPlayer = (e, item) => {
        e.preventDefault();
        this.setState({ url : item.url, poster: item.poster });
    }

    closePlayer = (e) => {
        e.preventDefault();
        this.setState({ url: '', poster: '' });
    }

    render() {
        return (
            <div>
                <ul className="movies_list">
                { this.props.movies.map((item, index) => (
                    <li key={index}>
                        <img className="thumbnail" src={item.poster}/>
                        <div className="desc">
                            <h4>{item.title}</h4>
                            <div>{item.shortDescription}</div>
                            <button className="play_pause" onClick={(e) => this.openPlayer(e, item)}></button>
                        </div>
                    </li>
                )) }
                </ul>

                <SRKPlayer url={this.state.url} poster={this.state.poster} closePlayer={this.closePlayer}/>
            </div>
        )
    }
}
export default MoviesList;