import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { getPopularMovies } from '../../utilities/apiCalls/apiCalls'
import { populateMovies } from '../../actions'
import MovieList from '../../components/movieList/movieList'

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  componentDidMount = () => {
    this.getMovies()
  }

  getMovies = async () => {
    const movies = await getPopularMovies()
    this.props.populateMovies(movies)
  }

  
  render() {
    return (
      <div className="App">
        <h1>Movies</h1>
        <MovieList movies={this.props.movies}></MovieList>
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  populateMovies: (movies) => dispatch(populateMovies(movies))
})

export const mapStateToProps = (state) => ({
  movies: state.popularMovies
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
