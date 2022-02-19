import { Map } from 'immutable'
import * as actionTypes from './constants'

const initialState = Map({
  category: [],
  currentCategory: "全部",
  categorySongs: {}
})

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_CATEGORY:
      return state.set("category", action.category)
    case actionTypes.CHANGE_CURRENT_CATEGORY:
      return state.set("currentCategory", action.currentCategory)
    case actionTypes.CHANGE_CATEGORY_SONGS:
      return state.set("categorySongs", action.categorySongs)
  default:
    return state
  }
}
