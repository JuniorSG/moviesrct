import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { get } from "../utils/httpClient";
import "./MovieDetails.css"

function MovieDetails() {
    const { movieId } = useParams()
    const [movie,setMovie] = useState(null)
    
    useEffect(() => {
        get("/movie/"+movieId).then(data => {
            setMovie(data)
        })
    },[movieId])

    if (!movie){
        return null
    }
    console.log(movie.status);
    movie.status="otra cosa"
    // movie.defineProperty(rateTest)
    // // movie.rateTest = "Prubando la Calificacion"
    // console.log(movie.rateTest)


    const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path
  return (
    <div className="detailsContainer">
        <div className="imgDiv">
            <img className="col movieImage" src={imageUrl} alt={movie.title} />
            <div className="buttonsImgsContainer">
                <button className="button1">+</button>
                <button className="button2">-</button>
            </div>
        </div>
        
        <div className="col movieDetails">
            <p>
                <strong>Title: </strong>{movie.title}
            </p>
            <p>
                <strong>Genres: </strong>
                {movie.genres.map(genre => genre.name).join(", ")}
            </p>
            <p>
                <strong>Description:</strong> {movie.overview}
            </p>
        </div>
    </div>
  )
}


export default MovieDetails