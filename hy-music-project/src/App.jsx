import React, { memo } from 'react'
import { Provider } from 'react-redux'

import Index from './router'
import store from './store'

import { BrowserRouter } from 'react-router-dom'
import HYAppHeader from "@/components/app-header"
import HYAppFooter from "@/components/app-footer"


const App = memo(() => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <HYAppHeader></HYAppHeader>
        <Index></Index>
        <HYAppFooter></HYAppFooter>
      </BrowserRouter>
    </Provider>
    
  )
})

export default App
