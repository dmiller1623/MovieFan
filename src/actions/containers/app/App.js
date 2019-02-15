import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { getPopularMovies } from '../../utilities/apiCalls/apiCalls'
import { populateMovies } from '../../actions'
import MovieList from '../../../components/movieList'

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
        <MovieList></MovieList>
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  populateMovies: (movies) => dispatch(populateMovies(movies))
})

export const mapStateToProps = () => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(App);
