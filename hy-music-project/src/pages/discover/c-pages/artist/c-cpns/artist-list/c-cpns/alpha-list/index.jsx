import React, { memo, useState, useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import classNames from 'classnames';

import { singerAlphas } from '@/utils/handle-data';
import { getArtistListAction } from '../../../../store/actionCreators';

import {
  AlphaListWrapper
} from './style';

export default memo(function HYAlphaList() {
  const [currentAlpha, setCurrentAlpha] = useState("热门");

  const { currentType, currentArea } = useSelector(state => ({
    currentType: state.getIn(["artist", "currentType"]),
    currentArea: state.getIn(["artist", "currentArea"])
  }), shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArtistListAction(currentArea, currentType.type, -1))
    setCurrentAlpha("热门")
  }, [currentType, currentArea, dispatch]);


  function changeList(item) {
    setCurrentAlpha(item)
    if (item === "其他") item = 0;
    if (item === "热门") item = -1;
    dispatch(getArtistListAction(currentArea, currentType.type, item));
  }

  return (
    <AlphaListWrapper hasTop={currentArea !== -1}>
      {
        singerAlphas.map((item, index) => {
          if (item === "0") item = "其他";
          if (item === "-1") item = "热门";
          const isActive = currentAlpha === item;
          return (
            <div key={item}
                 className={classNames("item", {"active": isActive})}>
              <span onClick={e => changeList(item)}>{item.toUpperCase()}</span>
            </div>
          )
        })
      }
    </AlphaListWrapper>
  )
})
