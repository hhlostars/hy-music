import React, { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { getTopAlbumsAction } from '../../store/actionCreators';

import HYThemeHeaderNormal from "@/components/theme-header-normal";
import HYAlbumCover from "@/components/album-cover";
import { Pagination } from 'antd';
import {
  TopAlbumWrapper
} from './style';


const HYTopAlbum = memo(() => {

  const { topAlbums, total } = useSelector(state => ({
    topAlbums: state.getIn(["album", "topAlbums"]),
    total: state.getIn(["album", "topTotal"])
  }), shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopAlbumsAction(1));
  }, [dispatch]);

  const onChange = (page) => {
    // dispatch(getRadios(currentId, (page - 1) * 30));
    dispatch(getTopAlbumsAction(page))
  }
  return (
    <TopAlbumWrapper>
      <HYThemeHeaderNormal title="全部新碟" />
      <div className="album-list">
        {
          topAlbums.map((item, index) => {
            return <HYAlbumCover size={"130px"}
              width={"153px"}
              bgp={"-845px"}
              key={item.id}
              info={item} />
          })
        }
      </div>
      <Pagination total={total} showQuickJumper defaultPageSize={30} showSizeChanger={false} onChange={onChange} />
    </TopAlbumWrapper>
  )
})

export default HYTopAlbum