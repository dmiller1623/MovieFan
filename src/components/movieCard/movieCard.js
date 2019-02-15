import React, { Component } from 'react'

class MovieCard extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>MovieCard</h1>
      </div>
    )
  }
}

export default MovieCard