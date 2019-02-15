import React, { Component } from 'react';
import './App.css';
import { getPopularMovies } from '../../utilities/apiCalls/apiCalls'

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
    await getPopularMovies()
  }

  
  render() {
    return (
      <div className="App">
       
      </div>
    );
  }
}

export default App;
