// import { combineReducers } from 'redux'
import { combineReducers } from 'redux-immutable'
import { reducer as recommendReducer } from '../pages/discover/c-pages/recommend/store'
import { reducer as playListReducer } from '../pages/discover/c-pages/playlist/store'
import { reducer as djRadioReducer } from '../pages/discover/c-pages/djradio/store'
import { reducer as albumReducer } from '../pages/discover/c-pages/album/store'

const cReducer = combineReducers({
  recommend: recommendReducer,
  playlist: playListReducer,
  djradio: djRadioReducer,
  album: albumReducer
})

export default cReducer