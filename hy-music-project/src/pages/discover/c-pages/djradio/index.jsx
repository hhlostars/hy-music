import React, { memo } from 'react'

import HYRadioCategory from './c-cpns/radio-category'
import HYRadioRecommend from './c-cpns/radio-recommend'
import HYRadioRanking from './c-cpns/radio-ranking';

import { DjRadioWrapper } from './style'

const djradio = memo(() => {
  return (
    <DjRadioWrapper className='wrap-v2'>
      <HYRadioCategory></HYRadioCategory>
      <HYRadioRecommend />
      <HYRadioRanking />
    </DjRadioWrapper>
  )
})

export default djradio