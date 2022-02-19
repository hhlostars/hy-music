import React, { useState, useEffect, memo } from 'react'
import { useParams, useLocation } from 'react-router-dom'

import {
  formatMonthDay,
  getSizeImage,
  formatMinuteSecond
} from "@/utils/format-util";


import { getRankingList } from '@/services/top-list'

import HYSongOperationBar from '@/components/song-operation-bar';
import HYThemeHeaderSong from '@/components/theme-header-song';
import { TopBodyWrapper } from './style'

const HYTopBody = memo((props) => {
  const [listData, setListData] = useState({})
  let { id } = useParams();
  const { state } = useLocation()
  useEffect(() => {
    getRankingList(id).then(res => {
      // console.log(res.playlist);
      const { name = '', coverImgUrl, playCount, trackCount, shareCount, subscribedCount, commentCount, updateTime, tracks = [] } = res.playlist
      setListData({
        name, coverImgUrl, playCount, trackCount, shareCount, subscribedCount, commentCount, updateTime, tracks
      })
    })
  }, [id])
  const { name = '', coverImgUrl = '', playCount = 0, trackCount, shareCount, subscribedCount, commentCount, updateTime, tracks = [] } = listData
  return (
    
    <TopBodyWrapper>
      <div className="header">
        <div className="image">
          <img src={listData.coverImgUrl} alt="" />
          <span className="image_cover">封面</span>
        </div>
        <div className="info">
          <div className="title">{listData.name}</div>
          <div className="time">
            <i className="clock sprite_icon2"></i>
            <div>最近更新：{formatMonthDay(listData.updateTime)}</div>
            <div className="update-f">（{state}）</div>
          </div>
          <HYSongOperationBar favorTitle={`(${listData.subscribedCount})`}
            shareTitle={`(${listData.shareCount})`}
            downloadTitle="下载"
            commentTitle={`(${listData.commentCount})`} />
        </div>
      </div>
      <HYThemeHeaderSong playCount={listData.playCount} trackCount={listData.trackCount}></HYThemeHeaderSong>
      <div className="play-list">
        <table>
          <thead>
            <tr>
              <th className="ranking"></th>
              <th className="title">标题</th>
              <th className="duration">时长</th>
              <th className="singer">歌手</th>
            </tr>
          </thead>
          <tbody>
            {
              tracks.map((item, index) => {
                return (
                  <tr key={item.id}>
                    <td>
                      <div className="rank-num">
                        <span className="num">{index + 1}</span>
                        <span className="new sprite_icon2"></span>
                      </div>
                    </td>
                    <td>
                      <div className="song-name">
                        {
                          index < 3 ?
                            (<img src={getSizeImage(item.al.picUrl, 50)} alt="" />) : null
                        }
                        <span className="play sprite_table"></span>
                        <span className="name">{item.name}</span>
                      </div>
                    </td>
                    <td>{formatMinuteSecond(item.dt)}</td>
                    <td>{item.ar[0].name}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </TopBodyWrapper>
  )
})

export default HYTopBody