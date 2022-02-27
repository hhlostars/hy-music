import React, { memo } from 'react'

import HYArtistCategory from './c-cpns/artist-category';
import HYArtistList from './c-cpns/artist-list';
import { HYArtistWrapper } from './style'

const HYArtist = memo(() => {
  return (
    <HYArtistWrapper>
      <div className="content wrap-v2">
        <HYArtistCategory />
        <HYArtistList />
      </div>
    </HYArtistWrapper>
  )
})

export default HYArtist