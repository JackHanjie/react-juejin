import React, { Activity, memo, useState } from 'react'
import styled from 'styled-components'
import Tabs from './Tabs'
import Card from './Card'



const List = memo(() => {
  const [selectedTab, setSelectedTab] = useState(0)
  
  // 处理Tab切换事件
  const handleTabChange = (index: number) => {
    setSelectedTab(index)
    console.log('选中的标签页索引:', index)
    // 这里可以根据选中的tab索引执行相应的逻辑，比如筛选卡片内容等
  }

  return (
    <Container>
      <Tabs onTabChange={handleTabChange} />
      <Activity mode={selectedTab === 0 ? 'visible' : 'hidden'}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Activity>
      <Activity mode={selectedTab === 1 ? 'visible' : 'hidden'}>
        <Card />
        <Card />
        <Card />
      </Activity>
    </Container>
  )
})

export default List



const Container = styled.div`
  background-color: #fff;
  border-radius: 5px;
  padding-bottom: 20px;
`