import React, { useEffect, memo } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getRadioRecommend } from '../../store/actionCreators'

import HYRadioRecomendCover from '@/components/radio-recommend-cover';
import HYThemeHeaderNormal from '@/components/theme-header-normal';
import { RecommendWrapper } from './style'

const HYRadioRecommend = memo(() => {
  const { currentId, recommends } = useSelector(state => ({
    currentId: state.getIn(["djradio", "currentId"]),
    recommends: state.getIn(["djradio", "recommends"])
  }), shallowEqual)
  const dispatch = useDispatch()

  // hooks
  useEffect(() => {
    console.log(currentId);
    if (currentId === 0) return;
    dispatch(getRadioRecommend(currentId));
  }, [dispatch, currentId])

  return (
    <RecommendWrapper>
      <HYThemeHeaderNormal title="优秀新电台"></HYThemeHeaderNormal>
      <div className="radio-list">
        {
          recommends.slice(0, 5).map((item) => {
            return (<HYRadioRecomendCover info={item} key={item.id} />)
          })
        }
      </div>
    </RecommendWrapper>
  )
})

export default HYRadioRecommend