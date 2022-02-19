import {
  getDjRadioCatelist,
  getDjRadioRecommend,
  getDjRadios
} from "@/services/djradio";
import * as actionTypes from './constants';

const changeCategoryAction = res => ({
  type: actionTypes.CHANGE_RADIO_CATEGORY,
  categories: res.categories
})

export const changeCurrentIdAction = id => ({
  type: actionTypes.CHANGE_CURRENT_ID,
  currentId: id
})

export const getRadioCategories = () => {
  return dispatch => {
    getDjRadioCatelist().then(res => {
      dispatch(changeCategoryAction(res))
      const id = res.categories[0].id
      dispatch(changeCurrentIdAction(id))
    })
  }
}

const changeRecommendsAction = res => ({
  type: actionTypes.CHANGE_RECOMMENDS,
  recommends: res.djRadios
})

export const getRadioRecommend = currentId => {
  return dispatch => {
    getDjRadioRecommend(currentId).then(res => {
      dispatch(changeRecommendsAction(res))
    })
  }
}

const changeRadiosAction = (res) => ({
  type: actionTypes.CHANGE_RADIOS,
  radios: res.djRadios
})

export const getRadios = (currentId, offset) => {
  return dispatch => {
    getDjRadios(currentId, 30, offset).then(res => {
      dispatch(changeRadiosAction(res));
    })
  }
}