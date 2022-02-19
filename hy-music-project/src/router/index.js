import React from 'react'
import { useRoutes, Navigate } from 'react-router-dom'

const HyDiscover = React.lazy(() => import('../pages/discover'))
const HyMy = React.lazy(() => import('../pages/my'))
const HyFriend = React.lazy(() => import('../pages/friend'))
const Album = React.lazy(() => import('../pages/discover/c-pages/album'))
const Artist = React.lazy(() => import('../pages/discover/c-pages/artist'))
const DjRadio = React.lazy(() => import('../pages/discover/c-pages/djradio'))
const PlayList = React.lazy(() => import('../pages/discover/c-pages/playlist'))
const Recommend = React.lazy(() => import('../pages/discover/c-pages/recommend'))
const TopList = React.lazy(() => import('../pages/discover/c-pages/toplist'))

const TopBody = React.lazy(() => import('../pages/discover/c-pages/toplist/c-cpns/top-body'))

const routers = [
  {
    path: '/',
    name: '重定向',
    element: (
      <React.Suspense fallback={<>加载中...</>}>
        <Navigate to="/discover/recommend" />
      </React.Suspense>
    ),
  },
  {
    path: '/discover',
    name: '发现音乐',
    element: (
      <React.Suspense fallback={<>加载中...</>}>
        <HyDiscover />
      </React.Suspense>
    ),
    children: [
      {
        // 仅匹配到父级路由时
        // index路由 默认展示的
        index: true,
        name: '推荐',
        element: (
          <React.Suspense fallback={<>加载中...</>}>
            <Navigate to="/discover/recommend" />
          </React.Suspense>
        ),
      },
      {
        // index: true,
        // fullPath: '/',
        path: 'recommend',
        name: '推荐',
        element: (
          <React.Suspense fallback={<>加载中...</>}>
            <Recommend />
          </React.Suspense>
        ),
      },
      {
        path: 'toplist',
        name: '排行榜',
        element: (
          <React.Suspense fallback={<>加载中...</>}>
            <TopList />
          </React.Suspense>
        ),
        children: [
          {
            // 仅匹配到父级路由时
            // index路由 默认展示的
            index: true,
            name: '飙升榜',
            element: (
              <React.Suspense fallback={<>加载中...</>}>
                <Navigate to="/discover/toplist/19723756" state='每天更新'/>
              </React.Suspense>
            ),
          },
          {
            path: ':id',
            name: '排行榜',
            element: (
              <React.Suspense fallback={<h1>加载中...</h1>}>
                <TopBody />
              </React.Suspense>
            ),
          },
        ]
      },
      {
        path: 'playlist',
        name: '歌单',
        element: (
          <React.Suspense fallback={<>加载中...</>}>
            <PlayList />
          </React.Suspense>
        ),
      },
      {
        path: 'djradio',
        name: '主播电台',
        element: (
          <React.Suspense fallback={<>加载中...</>}>
            <DjRadio />
          </React.Suspense>
        ),
      },
      {
        path: 'artist',
        name: '歌手',
        element: (
          <React.Suspense fallback={<>加载中...</>}>
            <Artist />
          </React.Suspense>
        ),
      },
      {
        path: 'album',
        name: '新碟上架',
        element: (
          <React.Suspense fallback={<>加载中...</>}>
            <Album />
          </React.Suspense>
        ),
      },
    ]
  },
  {
    path: '/my',
    name: '我的音乐',
    element: (
      <React.Suspense fallback={<>加载中...</>}>
        <HyMy />
      </React.Suspense>
    ),
  },
  {
    path: '/friend',
    name: '关注',
    element: (
      <React.Suspense fallback={<>加载中...</>}>
        <HyFriend />
      </React.Suspense>
    ),
  },
  // {
  //   path: '*',
  //   name: '重定向',
  //   element: (
  //     <Navigate to="/discover" />
  //   ),
  // },
]

const Index = () => useRoutes(routers)

export default Index