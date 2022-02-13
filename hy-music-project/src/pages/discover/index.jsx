import React, { memo, useEffect } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

import { dicoverMenu } from '@/common/local-data'

import {
  DiscoverWrapper,
  TopMenu
} from './style'

const HyDiscover = memo(() => {

  return (
    <div>
      <DiscoverWrapper>
        <div className="top">
          <TopMenu className='wrap-v1'>
            {
              dicoverMenu.map((item, index) => {
                return (
                  <div className="item" key={index}>
                    <NavLink to={item.link}>
                      {item.title}
                    </NavLink>
                  </div>
                )
              })
            }
          </TopMenu>
        </div>
      </DiscoverWrapper>
      <Outlet></Outlet>
    </div>
    
  )
})

export default HyDiscover