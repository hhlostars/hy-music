import React, { memo } from 'react'
// import { connect, useDispatch, useSelector, shallowEqual } from 'react-redux'
// import { getTopBannerAction } from './store/acitonCreators'
import HyTopBanner from './c-cpns/top-banner'
import HYHotRecommend from './c-cpns/hot-recommend'
import HYNewAlbum from './c-cpns/new-album'
import HYRMCTopList from './c-cpns/rec-toplist'

import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight
} from './style'

const HYRecommend = memo((props) => {
  // const {topBanners, getBanners} = props
  // useEffect(() => {
  //   getBanners()
  // }, [getBanners])
  return (
    <RecommendWrapper>
      <HyTopBanner></HyTopBanner>
      <Content className="wrap-v2">
        <RecommendLeft>
          <HYHotRecommend></HYHotRecommend>
          <HYNewAlbum></HYNewAlbum>
          <HYRMCTopList></HYRMCTopList>
        </RecommendLeft>
        <RecommendRight>
          right
        </RecommendRight>
      </Content>
    </RecommendWrapper>
  )
})

// const mapStateToProps = state => ({
//   topBanners: state.recommend.topBanners
// })

// const mapDispatchToProps = dispatch => ({
//   getBanners: () => {
//     dispatch(getTopBannerAction())
//   }
// })

// export default connect(mapStateToProps, mapDispatchToProps)(HYRecommend)
export default HYRecommend