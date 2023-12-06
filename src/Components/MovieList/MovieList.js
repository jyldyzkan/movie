import React from "react";
import {API_KEY, IMAGE_URL} from "../../config/config";



const MovieList = ({movies}) => {


    return (
        <div className={'row'}>
            {
                movies.map(movie =>
                    <div className={'col-5'}>
                        <div className={'movie-box'}>
                            <img className={'movie-img'}
                                 src={`${IMAGE_URL}${movie.poster_path}`} alt=""/>
                            <h3>{movie.title}</h3>
                            <h4>
                                {movie.vote_average}
                            </h4>

                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default MovieList;