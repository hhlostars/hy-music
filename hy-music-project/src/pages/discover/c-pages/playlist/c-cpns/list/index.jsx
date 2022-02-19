import React, { useEffect, memo } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getPlayList } from '../../store/actionCreators'

import HYThemeCover from '@/components/theme-cover';

import { SongListWrapper } from './style'

import { Pagination } from 'antd';


const List = memo(() => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPlayList(0))
  }, [])

  
  const { categorySongs } = useSelector(state => ({
    categorySongs: state.getIn(["playlist", "categorySongs"])
  }), shallowEqual)
  const songList = categorySongs.playlists || [];
  const total = categorySongs.total || 0;

  function onPageChange(page) {
    console.log(page);
    dispatch(getPlayList(page - 1));
  }

  return (
    <SongListWrapper>
      <div className="songs-list">
        {
          songList.map((item, index) => {
            return (
              <HYThemeCover info={item} key={item.id + (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)} right="30px" />
            )
          })
        }
      </div>
      <Pagination defaultCurrent={1} total={total} defaultPageSize={35} showSizeChanger={false} onChange={onPageChange}  />
    </SongListWrapper>
  )
})

export default List