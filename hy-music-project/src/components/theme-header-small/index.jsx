import React, { memo } from 'react'
import PropTypes from 'prop-types'

import {
  HeaderWrapper
} from './style'

const HYThemeHeaderSmall = memo((props) => {
  // const { title, keywords = []} = props
  const { title, more} = props

  return (
    <HeaderWrapper>
      <h3>{title}</h3>
      <a href="/abc">{more}</a>
    </HeaderWrapper>
  )
})

HYThemeHeaderSmall.propTypes = {
  title: PropTypes.string.isRequired,
  more: PropTypes.string
}

HYThemeHeaderSmall.defaultProps = {
  
}

export default HYThemeHeaderSmall