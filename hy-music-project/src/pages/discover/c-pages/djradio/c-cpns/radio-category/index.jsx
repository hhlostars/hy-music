import React, { useEffect, useRef, memo } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getRadioCategories, changeCurrentIdAction } from '../../store/actionCreators'

import { CategoryWrapper, CategoryContent, CategoryItemImage } from './style'

import { Carousel } from 'antd';

const HYRadioCategory = memo(() => {
  const carouselRef = useRef()

  const { categories, currentId } = useSelector(state => ({
    categories: state.getIn(['djradio', 'categories']),
    currentId: state.getIn(['djradio', 'currentId'])
  }), shallowEqual)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getRadioCategories())
  }, [dispatch])


  return (
    <CategoryWrapper>
      <div className="arrow arrow-left" onClick={e => carouselRef.current.prev()}></div>
      <CategoryContent>
        <Carousel dots={{ className: "dots" }} ref={carouselRef}>
          {
            [0, 1].map((item, index) => {
              if(item === 0) {
                return (
                  <div key={item} className="category-page">
                    {
                      categories.map((item, index) => {
                        return (
                          <div key={item.id} className={`category-item ${currentId === item.id ? 'active' : null}`}
                            onClick={e => dispatch(changeCurrentIdAction(item.id))}>
                            <CategoryItemImage className="image" imgUrl={item.picWebUrl}></CategoryItemImage>
                            <span>{item.name}</span>
                          </div>
                        )
                      })
                    }
                  </div>
                )
              } else {
                return (
                  <div key={item} className={`category-item ${currentId === item.id ? 'active' : null}`}>
                    <a className="category-item" href='https://music.163.com/#/topic?id=18652232'>
                      <CategoryItemImage className="image" imgUrl='https://music.163.com/style/web2/img/index_radio/radio_faq.png'></CategoryItemImage>
                      <span>常见问题</span>
                    </a>
                  </div>
                )
              }
            })
          }
        </Carousel>
      </CategoryContent>
      <div className="arrow arrow-right" onClick={e => carouselRef.current.next()}></div>
    </CategoryWrapper>
  )
})

export default HYRadioCategory