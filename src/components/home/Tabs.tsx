import React, { memo, useState } from 'react'
import styled from 'styled-components'

const Tabs = memo(() => {
  const [activeTab, setActiveTab] = useState(0)
  
    // 处理标签页点击事件
    const handleTabClick = (index: number) => {
      setActiveTab(index)
    }
  
    // 标签页数据
    const tabs = [
      { label: '全部' },
      { label: '前端' }
    ]
  return (
    <Tab_s>
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            className={index === activeTab ? 'active' : ''}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </Tab>
        ))}
      </Tab_s>
  )
})

export default Tabs

const Tab_s = styled.div`
  display: flex;
  align-items: flex-start;
  border-bottom: 1px solid #ccc;
`

const Tab = styled.div`
  padding: 8px 15px;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    color: #1E80FF;
  }
  
  &.active {
    font-weight: 500;
  }
  &.active::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 50%;
    transform: translateX(-50%);
    width: 30%;
    height: 2.5px;
    background-color: #1E80FF;
    transition: all 0.3s ease;
  }
`