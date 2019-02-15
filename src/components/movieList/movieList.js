import React from 'react'
import MovieCard from '../movieCard/movieCard'

const MovieList = ({ movies }) => {
  console.log(movies)
  const displayMovies = movies.map((movie, index) => {
    return <MovieCard
            {...movie}
            index={index}
           />
  })

  return (
    <div>
      <h1>Movie List</h1>
      {displayMovies}
    </div>
  )
}

export default MovieList;