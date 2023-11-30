import {IMAGE_URL} from "../../config/config";

const MovieList = ({movies})=> {
    return(
      <div className={"row"}>
          {
              movies.map(movie =>
              <div className={"col-3"} key={movie.id}>
                  <img src={`${IMAGE_URL}${movie.poster_path}`} alt=""/>
                  <h3>{movie.title}</h3>
                  <p>{movie.vote_average}</p>
              </div>)

          }
      </div>
    )
    }
    export default MovieList