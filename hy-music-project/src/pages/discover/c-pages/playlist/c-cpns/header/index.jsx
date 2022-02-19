import React, { useState, useEffect, memo } from 'react'
import { useSelector, shallowEqual } from 'react-redux'

import { HeaderWrapper, HeaderLeft, HeaderRight } from './style'

import Category from '../category'

const HYPlayListHeader = memo(() => {
  const [showFlag, setShowFlag] = useState(false)


  function hideMenu(event) {
    // event.nativeEvent.stopImmediatePropagation()
    // console.log(event);
    setShowFlag(false)
  }

  useEffect(() => {
    document.addEventListener('click', hideMenu);
    return () => {
      document.removeEventListener("click", hideMenu);
    };
  }, []);

  const { currentCategory} = useSelector(state => ({
    currentCategory: state.getIn(["playlist", "currentCategory"])
  }), shallowEqual)

  return (
    <HeaderWrapper>
      <HeaderLeft>
        <span className="title">{currentCategory}</span>
        <button className="select" onClick={e => {e.nativeEvent.stopImmediatePropagation(); setShowFlag(!showFlag)} }>
          <span>选择分类</span>
          <i className="sprite_icon2"></i>
        </button>
        {showFlag ? <Category /> : null }
      </HeaderLeft>
      <HeaderRight>
        <button className="hot">热门</button>
      </HeaderRight>
    </HeaderWrapper>
  )
})

export default HYPlayListHeader