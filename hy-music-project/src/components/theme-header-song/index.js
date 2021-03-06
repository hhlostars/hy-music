import React, { memo } from 'react'

import {
  HeaderWrapper
} from "./style"

const HYThemeHeaderSong = memo((props) => {
  const { trackCount, playCount } = props
  // console.log(props);

  return (
    <HeaderWrapper>
      <div className="left">
        <h3 className="title">歌曲列表</h3>
        <div className="count">{trackCount}首歌</div>
      </div>
      <div className="right">
        <span>播放：</span>
        <span className="count">{playCount}</span>
        <span>次</span>
      </div>
    </HeaderWrapper>
  )
})

export default HYThemeHeaderSong

