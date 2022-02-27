import * as actionTypes from './constants'

import {getArtistList} from '@/services/artist'

export const changeCurrentAreaAction = area => ({
  type: actionTypes.CHANGE_CURRENT_AREA,
  currentArea: area
})

export const changeCurrentTypeAction = (type) => ({
  type: actionTypes.CHANGE_CURRENT_TYPE,
  currentType: type
});

const changeArtistListAction = artistList => ({
  type: actionTypes.CHANGE_ARTIST_LIST,
  artistList
})

export const getArtistListAction = (area, type, initial) => {
  return dispatch => {
    getArtistList(area, type, initial).then(res => {
      dispatch(changeArtistListAction(res.artists))
    })
  }
}