import * as actionTypes from './constants'

import {
  getTopBanners,
  getHotRecommends,
  getNewAlbums,
  getTopList,

  getArtistList
} from '@/services/recommend'

const changeTopBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners
})

export const getTopBannerAction = () => {
  return dispatch => {
    getTopBanners().then(res => {
      dispatch(changeTopBannerAction(res))
    })
  }
}

const changeHotRecommendsAction = res => ({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  hotRecommends: res.result
})

export const getHotRecommendsAction = (limit) => {
  return dispatch => {
    getHotRecommends(limit).then(res => {
      dispatch(changeHotRecommendsAction(res))
      // console.log(res);
    })
  }
}

const changeNewAlbumsAction = res => ({
  type: actionTypes.CHANGE_NEW_ALBUM,
  newAlbums: res.albums
})

export const getNewAlbumsAction = limit => {
  return dispatch =>{
    getNewAlbums(limit).then(res => {
      // console.log(res);
      dispatch(changeNewAlbumsAction(res))
    })
  }
}

// 飙升
const changeUpRankingAction = res =>({
  type: actionTypes.CHANGE_UP_RANKING,
  upRanking: res.playlist
})
// 新歌
const changeNewRankingAction = res => ({
  type: actionTypes.CHANGE_NEW_RANKING,
  newRanking: res.playlist
})
// 原创
const changeOriginRankingAction = res => ({
  type: actionTypes.CHANGE_ORIGIN_RANKING,
  originRanking: res.playlist
})

export const getTopListAction = idx => {
  return dispatch => {
    getTopList(idx).then(res => {
      switch (idx){
        case 3:
          // 飙升
          dispatch(changeUpRankingAction(res))
          break;
        case 0:
          // 新歌
          dispatch(changeNewRankingAction(res));
          break;
        case 2:
          // 原创
          dispatch(changeOriginRankingAction(res));
          break;
      }
    })
  }
}

const changeSettleSingerAction = res => ({
  type: actionTypes.CHANGE_SETTLE_SINGER,
  settleSingers: res.artists
})

export const getSettleSingers = () => {
  return dispatch => {
    getArtistList(5, 5001).then(res => {
      dispatch(changeSettleSingerAction(res))
    })
  }
}
