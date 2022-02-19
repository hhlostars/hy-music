import React, { memo, useState, useEffect } from 'react'
import { getSizeImage } from '@/utils/format-util'
import { getTopList } from '@/services/top-list'
import { NavLink } from 'react-router-dom'

import { TopRankingWrapper } from './style'

const HYTopTitle = memo(() => {
  const [topList, setTopList] = useState([])
  useEffect(() => {
    getTopList().then(res => {
      console.log(res);
      setTopList(res.list)
    })
  }, [])

  return (
    <TopRankingWrapper className='top-title'>
      {
        topList.map((item, index) => {
          let header;
          if (index === 0 || index === 4) {
            header = <div className="header">{index === 0 ? "云音乐特色榜" : "全球媒体榜"}</div>
          }
          return (
            <NavLink to={'' + item.id} state={ item.updateFrequency } key={item.id}>
              {header}
              {/* <div className="item"
                onClick={e => hanldeItemClick(index)}> */}
              <div className="item">
                <img src={getSizeImage(item.coverImgUrl, 40)} alt="" />
                <div className="info">
                  <div className="name">{item.name}</div>
                  <div className="update">{item.updateFrequency}</div>
                </div>
              </div>
            </NavLink>
          )
        })
      }
    </TopRankingWrapper>
  )
})

export default HYTopTitle