import { combineReducers } from 'redux';
import { movieReducer } from './movieReducer'
const rootReducer = combineReducers({
  popularMovies: movieReducer
})

export default rootReducer