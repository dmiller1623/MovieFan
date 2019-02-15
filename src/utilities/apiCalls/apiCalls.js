import apiKey from '../../apiKey'

export const getPopularMovies = async () => {
  const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
  const movies = await response.json()
  return movies.results
}