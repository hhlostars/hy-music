import React, { memo } from 'react'

import { getSizeImage } from '@/utils/format-util';

import {
  AlbumWrapper
} from './style'

const recAlbumCover = memo((props) => {
  const { info, size = 130, width = 153, bgp="-845px" } = props

  return (
    <AlbumWrapper size={size} width={width} bgp={bgp}>
      <div className="album-image">
        <img src={getSizeImage(info.picUrl, size)} alt="" />

      </div>
      <div className="album-info">
        <div className="name text-nowrap">
          <a href="/aa">{info.name}</a>
        </div>
        <div className="artist text-nowrap">
          <a href="/aa">{info.artist.name}</a>
        </div>
      </div>
    </AlbumWrapper>
  )
})

export default recAlbumCover