export function handlePlayListCategory(data) {
  // 获取所有类别
  const category = data.categories
  // 创建类别数据结构
  const categoryData = Object.entries(category).map(([key, value]) => {
    return {
      name: value,
      subs: []
    }
  })

  // 将subs添加到对应的类别中
  for (const item of data.sub) {
    categoryData[item.category].subs.push(item)
  }

  return categoryData
}