import React, { memo, useEffect, useRef } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import HYThemeHeaderRCM from '@/components/theme-header-rcm'
import RecAlbumCover from '@/components/rec-album-cover'

import { getNewAlbumsAction} from '../../store/acitonCreators'
import { AlbumWrapper} from './style'

import { Carousel } from 'antd';

const HYNewAlbum = memo(() => {
  const { newAlbums } = useSelector(state => ({
    newAlbums: state.getIn(["recommend", "newAlbums"])
  }), shallowEqual)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getNewAlbumsAction(10))
  }, [dispatch])

  const pageRef = useRef()
  return (
    <AlbumWrapper>
      <HYThemeHeaderRCM title={'新碟上架'}></HYThemeHeaderRCM>
      <div className="content">
        <button className='arrow arrow-left sprite_02' onClick={ e => pageRef.current.prev()}></button>
        <div className="album">
          <Carousel ref={pageRef} dots={false}>
            {
              [0, 1].map(item => {
                return (
                  <div className="page" key={item}>
                    {
                      newAlbums.slice(item * 5, (item + 1) * 5).map(img => {
                        return <RecAlbumCover key={img.id} info={img} size={100} width={118} bgp='-570px' />
                      })
                    }
                  </div>
                )
              })
            }
          </Carousel>
        </div>
        <button className='arrow arrow-right sprite_02' onClick={e => pageRef.current.next()}></button>
      </div>

    </AlbumWrapper>
  )
})

export default HYNewAlbum