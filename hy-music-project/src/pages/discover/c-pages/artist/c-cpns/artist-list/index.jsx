import React, { memo } from 'react'
import { useSelector, shallowEqual } from 'react-redux';

import {
  ArtistListWrapper
} from './style';
import HYAlphaList from './c-cpns/alpha-list';
import HYArtistItem from './c-cpns/artist-item';
import HYThemeHeaderNormal from '@/components/theme-header-normal';


const HYArtistList = memo(() => {

  const { currentType, artistList } = useSelector(state => ({
    currentType: state.getIn(["artist", "currentType"]),
    artistList: state.getIn(["artist", "artistList"])
  }), shallowEqual);


  return (
    <ArtistListWrapper>
      <HYThemeHeaderNormal title={currentType.name} />
      <HYAlphaList />
      <div className="artist-list">
        {
          artistList.map((item, index) => {
            return <HYArtistItem key={item.id} index={index} info={item} />
          })
        }
      </div>
    </ArtistListWrapper>
  )
})

export default HYArtistList