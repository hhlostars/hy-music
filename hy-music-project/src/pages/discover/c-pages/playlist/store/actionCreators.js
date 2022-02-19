import * as actionTypes from './constants';
import { PER_PAGE_NUMBER } from './constants';

import {
  getSongCategory,
  getSongCategoryList
} from '@/services/play-list'

import { handlePlayListCategory } from '@/utils/handle-data'

const changeCategoryAction = res => ({
  type: actionTypes.CHANGE_CATEGORY,
  category: res
})

export const getCategory = () =>  {
  return dispatch => {
    getSongCategory().then(res => {
      const categoryData = handlePlayListCategory(res)
      dispatch(changeCategoryAction(categoryData))
    })
  }
}

export const changeCurrentCategoryAction = name => ({
  type: actionTypes.CHANGE_CURRENT_CATEGORY,
  currentCategory: name
})

const changePlayListAction = res => ({
  type: actionTypes.CHANGE_CATEGORY_SONGS,
  categorySongs: res
})

export const getPlayList = (page) => {
  return (dispatch, getState) => {
    // 获取当前分类
    const name = getState().getIn(["playlist", "currentCategory"])
    // 获取该分类数据
    getSongCategoryList(name, page * PER_PAGE_NUMBER).then(res => {
      dispatch(changePlayListAction(res))
    })
  }
}