import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getTopListAction } from '../../store/acitonCreators'

import HYThemeHeaderRCM from '@/components/theme-header-rcm'
import HYTopRanking from '@/components/top-ranking'
import { RankingWrapper } from './style'

const HYRMCTopList = memo(() => {
  const { upRanking, newRanking, originRanking} = useSelector(state => ({
    upRanking: state.getIn(["recommend", "upRanking"]),
    newRanking: state.getIn(["recommend", "newRanking"]),
    originRanking: state.getIn(["recommend", "originRanking"])
  }), shallowEqual)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTopListAction(3))
    dispatch(getTopListAction(0))
    dispatch(getTopListAction(2))
  }, [dispatch]);

  return (
    <RankingWrapper>
      <HYThemeHeaderRCM title={'榜单'}></HYThemeHeaderRCM>
      <div className="tops">
        <HYTopRanking info={upRanking}></HYTopRanking>
        <HYTopRanking info={newRanking}></HYTopRanking>
        <HYTopRanking info={originRanking}></HYTopRanking>
      </div>
    </RankingWrapper>
  )
})

export default HYRMCTopList