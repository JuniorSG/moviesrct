import { Link } from "react-router-dom"
import "./MovieCard.css"

function MovieCard({movie}) {
    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path
  return (   
    <li className="movieCard">
      <Link to={"/movies/"+movie.id}>
        <img 
          width={230}
          height={345} 
          className="movieImage" 
          src={imageUrl} 
          alt={movie.title}
        />
        <div>
            {movie.title}
        </div>
      </Link>
    </li>
  )
}

export default MovieCard