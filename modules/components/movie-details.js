import React from "react";
import ProgressBar from "../core/progress-bar";

const MovieDetailsPage = (props) => {
    document.body.style.overflow = "hidden";
    const {movie} = props;
    return(
        <div className="movie_details">
            <button className="close" onClick={props.closeMovieDetails}></button>
            <img className="banner" src={movie.banner}/>
            <div className="desc">
                <h2>{movie.title}</h2>
                <p>Released year: {movie.year}</p>
                <p>{movie.description}</p>
                <div style={{color: 'gold'}}>
                    <span><strong>Starring:</strong> {movie.starring}</span><br/>
                    <span><strong>Director:</strong> {movie.director}</span><br/>
                    <span><strong>Genres:</strong> {movie.category}</span><br/>
                    <span><strong>Audio language:</strong> {movie.language}</span>
                </div>
                <button className="play" onClick={(e) => props.openPlayer(e, movie)}></button>
                <div className="progress_parent_parent">
                    <div className="progress_parent">
                        <ProgressBar progressBarPercent={movie.progressBarPercent}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetailsPage;