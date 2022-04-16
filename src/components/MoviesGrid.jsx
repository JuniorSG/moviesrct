import { useEffect, useState } from "react"
import { get } from "../utils/httpClient"
import MovieCard from "./MovieCard"
import "./MoviesGrid.css"
import { useQuery } from  "../hooks/useQuery.jsx"

function MoviesGrid() {
  // let movies = []
  const [movies, setMovies] = useState([])
  const query = useQuery()
  const search = query.get("search")

  useEffect(() => {
    const searchUrl = search ? "/search/movie?query=" + search : "/discover/movie"
    get(searchUrl).then((data) => {
      setMovies(data.results)
    })
  },[search])
  return (
    <ul className="movieGrid">
        {movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
    </ul>
  )
}

export default MoviesGrid