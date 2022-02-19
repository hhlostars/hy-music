import * as actionTypes from './constants';

import {
  getHotAlbums,
  getTopAlbums
} from '@/services/album.js';

const changeHotAlbumAction = res => ({
  type: actionTypes.CHANGE_HOT_ALBUMS,
  hotAlbums: res.albums
})

export const getHotAlbumsAction = () => {
  return dispatch => {
    getHotAlbums().then(res => {
      dispatch(changeHotAlbumAction(res))
    })
  }
}

const changeTopAlbumAction = (res) => ({
  type: actionTypes.CHANGE_TOP_ALBUMS,
  topAlbums: res.albums
})

const changeTopTotalAction = (total) => ({
  type: actionTypes.CHANGE_TOP_TOTAL,
  total: total
})

export const getTopAlbumsAction = (page) => {
  return dispatch => {
    getTopAlbums(30, (page - 1) * 30).then(res => {
      dispatch(changeTopAlbumAction(res));
      dispatch(changeTopTotalAction(res.total));
    })
  }
}