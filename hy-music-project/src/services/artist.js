import request from './request'


// limit : 返回数量 , 默认为 30

// offset: 偏移数量，用于分页, 如: (页数 - 1) * 30, 
// 其中 30 为 limit 的值, 默认为 0 
// initial: 按首字母索引查找参数, 如 / artist / list ? type = 1 & area=96 & initial=b 返回内容将以 name 字段开头为 b 或者拼音开头为 b 为顺序排列, 热门传

// type 取值:
// -1: 全部
// 1: 男歌手
// 2: 女歌手
// 3: 乐队

// area 取值:
// -1: 全部
// 7华语
// 96欧美
// 8: 日本
// 16韩国
// 0: 其他

export function getArtistList(area, type, initial) {
  let url = '/artist/list';
  let params = {
    type,
    area,
    limit: 100,
    initial
  }

  return request({
    url,
    params
  })
}