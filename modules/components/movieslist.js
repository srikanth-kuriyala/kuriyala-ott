import React from "react";
import './movieslist.css';
import SRKPlayer from "./video-player";
import MovieDetailsPage from "./movie-details";
import ProgressBar from "../core/progress-bar";

class MoviesList extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            url: '',
            poster: '',
            movie: '',
            showMovieDetails: false
        }

        this.openPlayer = this.openPlayer.bind(this);
        this.closePlayer = this.closePlayer.bind(this);
        this.movieDetails = this.movieDetails.bind(this);
        this.closeMovieDetails = this.closeMovieDetails.bind(this);
    }

    openPlayer = (e, item) => {
        e.preventDefault();
        this.setState({ url : item.url, poster: item.poster, showMovieDetails: false });
    }

    closePlayer = (e, videoState) => {
        e.preventDefault();
        this.props.updateMovieStatus(videoState);
        this.setState({ url: '', poster: '' });
    }

    movieDetails = (e, item) => {
        e.preventDefault();
        this.setState({ showMovieDetails: true, movie: item });
    }

    closeMovieDetails = (e) => {
        e.preventDefault();
        this.setState({ showMovieDetails: false, movie: '' });
    }

    render() {
        return (
            <div>
                <ul className="movies_list">
                { this.props.movies.map((item, index) => (
                    <li key={index}>
                        <a onClick={(e) => this.movieDetails(e, item)}><img className="thumbnail" src={item.poster}/></a>
                        {item.progressBarPercent > 95 ?
                            <span className="watched">Watched<span></span></span>
                        : ''}
                        <div className="desc">
                            <h4>{item.title}</h4>
                            <div>{item.shortDescription}</div>
                            <button className="play" onClick={(e) => this.openPlayer(e, item)}></button>
                            <span className="year">{item.year}</span>
                            <div className="progress_parent">
                                <ProgressBar progressBarPercent={item.progressBarPercent}/>
                            </div>
                        </div>
                    </li>
                )) }
                </ul>

                {this.state.url ?
                    <SRKPlayer url={this.state.url} poster={this.state.poster} closePlayer={this.closePlayer}/>
                : null}

                {this.state.showMovieDetails ?
                    <MovieDetailsPage movie={this.state.movie} openPlayer={this.openPlayer} closeMovieDetails={this.closeMovieDetails}/>
                : null}
            </div>
        )
    }
}
export default MoviesList;