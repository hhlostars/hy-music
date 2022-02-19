import React, { useEffect, memo } from 'react'
import { useDispatch } from 'react-redux'

import { getCategory } from './store/actionCreators'
import { SongsWrapper } from './style'

import HYPlayListHeader from './c-cpns/header'
import List from './c-cpns/list'

const HYPlayList = memo(() => {
  // useEffect()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCategory())
  }, [dispatch])
  return (
    <SongsWrapper className="wrap-v2">
      <HYPlayListHeader></HYPlayListHeader>
      <List></List>
    </SongsWrapper>
  )
})

export default HYPlayList