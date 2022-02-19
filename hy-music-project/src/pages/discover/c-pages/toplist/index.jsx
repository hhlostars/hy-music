import React, { memo } from 'react'
import { Outlet } from 'react-router-dom'

import HYTopTitle from './c-cpns/top-title'

import {
  RankingRight,
  RankingLeft,
  RankingWrapper
} from './style'

const toplist = memo(() => {
  return (
    <RankingWrapper className="wrap-v2">
      <RankingLeft>
        <HYTopTitle></HYTopTitle>
      </RankingLeft>
      <RankingRight>
        <Outlet></Outlet>
      </RankingRight>
    </RankingWrapper>
  )
})

export default toplist