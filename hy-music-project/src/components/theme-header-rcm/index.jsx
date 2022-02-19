import React, { memo } from 'react'
import PropTypes from 'prop-types'

import {
  HeaderWrapper
} from './style'
import HYHotRecommend from '../../pages/discover/c-pages/recommend/c-cpns/hot-recommend'

const HYThemeHeaderRCM = memo((props) => {
  // const { title, keywords = []} = props
  const { title, keywords} = props

  return (
    <HeaderWrapper className='sprite_02'>
      <div className="left">
        <h3 className='title'>{title}</h3>
        <div className='keyword'>
          {
            keywords.map((item, index) => {
              return (
                <div className='item' key={index}>
                  <span className='divider'>
                    {index !== 0 ? '|' : ''}
                  </span>
                  <a href="todo">{item}</a>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="right">
        <a href="todo">更多</a>
        <i className='icon sprite_02'></i>
      </div>
    </HeaderWrapper>
  )
})

HYThemeHeaderRCM.propTypes = {
  title: PropTypes.string.isRequired,
  keywords: PropTypes.array
}

HYThemeHeaderRCM.defaultProps = {
keywords: []
}

export default HYThemeHeaderRCM