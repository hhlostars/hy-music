import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import HYThemeHeaderRCM from '@/components/theme-header-rcm'
import HYSongsCover from '@/components/songs-cover'

import { getHotRecommendsAction } from '../../store/acitonCreators'

import {
  HotRecommendWrapper
} from './style'

const HYHotRecommend = memo(() => {

  // state


  // redux-hooks
  const { hotRecommends } = useSelector(state => ({
    hotRecommends: state.getIn(["recommend", "hotRecommends"])
  }), shallowEqual)
  const dispatch = useDispatch()

  // other-hooks
  useEffect(() => {
    dispatch(getHotRecommendsAction(8))
  }, [dispatch])


  return (
    <HotRecommendWrapper>
      <HYThemeHeaderRCM title={'热门推荐'} keywords={["华语", "流行", "民谣", "摇滚", "电子"]}></HYThemeHeaderRCM>
      <div className="recommend-list">
        {
          hotRecommends.map((item, index) => {
            return (
              <HYSongsCover info={item} key={item.id}></HYSongsCover>
            )
          })
        }
      </div>
    </HotRecommendWrapper>
  )
})

export default HYHotRecommend