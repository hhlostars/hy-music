import React, { memo } from 'react'

import { getCount, getSizeImage } from '@/utils/format-util'

import {
  SongsCoverWrapper
} from './style'

const HYSongsCover = memo((props) => {
  const {info} = props
  return (
    <SongsCoverWrapper>
      <div className="cover-top">
        <img src={getSizeImage(info.picUrl, 140)} alt="" />
        <div className="cover sprite_cover">
          <div className="info sprite_cover">
            <span>
              <i className="sprite_icon erji"></i>
              {getCount(info.playCount)}
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="cover-bottom">
        <a href="" title={info.name}>{info.name}</a>
      </div>
    </SongsCoverWrapper>
  )
})

export default HYSongsCover