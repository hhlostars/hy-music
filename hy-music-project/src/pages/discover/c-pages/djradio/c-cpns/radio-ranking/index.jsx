import React, { useState, useEffect, memo } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { getRadios } from '../../store/actionCreators'

import HYThemeHeaderNormal from '@/components/theme-header-normal';
import HYRadioRankingCover from '@/components/radio-ranking-cover';
import { Pagination } from 'antd';

import {
  RankingWraper
} from "./style";

const HYRadioRanking = memo(() => {
  const { currentId, radios} = useSelector(state => ({
    currentId: state.getIn(["djradio", "currentId"]),
    radios: state.getIn(["djradio", "radios"])
  }), shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => {
    if (currentId === 0) return;
    dispatch(getRadios(currentId, 0))
  }, [dispatch, currentId])

  // hanlde function
  const onChange = (page) => {
    dispatch(getRadios(currentId, (page - 1) * 30));
  }

  return (
    <RankingWraper>
      <HYThemeHeaderNormal title="电台排行榜" />
      <div className="ranking-list">
        {
          radios.length >= 20 ? 
            radios.map((item, index) => {
              return (<HYRadioRankingCover key={item.id} radio={item} />)
            })  : null
        }
      </div>
      {/* <Pagination showQuickJumper total={total} defaultPageSize={30} onChange={onChange} showSizeChanger={false} /> */}
      <Pagination total={1000} showQuickJumper defaultPageSize={30} showSizeChanger={false} onChange={onChange}/>
    </RankingWraper>
  )
})

export default HYRadioRanking