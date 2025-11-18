import React, { memo, useState } from 'react'
import { Outlet, useNavigate } from 'react-router'
import styled from 'styled-components'
import { AndroidOutlined, TagOutlined, AppleOutlined, AppstoreAddOutlined, BlockOutlined, FileTextOutlined, FormatPainterOutlined, GlobalOutlined, HddOutlined, LayoutOutlined, PartitionOutlined } from '@ant-design/icons'
import Aside from '../Asides/Aside'
import Rankings from '../Asides/Rankings'
import Advertise from '../Asides/Advertise'

const menu = [
  {
    icon: <TagOutlined />,
    text: '关注',
    path: 'following'
  },
  {
    icon: <AppstoreAddOutlined />,
    text: '综合',
    path: '/'
  },
  {
    icon: <BlockOutlined />,
    text: '前端',
    path: '/frontend'
  },
  {
    icon: <FileTextOutlined />,
    text: '后端',
    path: '/backend'
  },
  {
    icon: <AndroidOutlined />,
    text: '安卓',
    path: '/android'
  },
  {
    icon: <AppleOutlined />,
    text: 'ios',
    path: '/ios'
  },
  {
    icon: <FormatPainterOutlined />,
    text: '人工智能',
    path: '/ai'
  },
  {
    icon: <GlobalOutlined />,
    text: '开发工具',
    path: '/devtools'
  },
  {
    icon: <HddOutlined />,
    text: '代码人生',
    path: '/codelife' 
  },
  {
    icon: <LayoutOutlined />,
    text: '阅读',
    path: '/reading'    
  },
  {
    icon: <PartitionOutlined />,
    text: '排行榜',
    path: '/ranking'
  },
]

const Home: React.FC = memo(() => {
  const [isActive, setIsActive] = useState(1)
  const navigate = useNavigate()
  const handleClick = (index: number, path: string) => {
    setIsActive(index)
    navigate(`${path}`)
  }

  return (
    <Container>
      <Menu>
        <MenuList>
          {
            menu.map((item, index) => (
              <MenuItem
                key={item.path}
                onClick={() => handleClick(index, item.path)}
                className={index === isActive ? 'active' : ''}>
                {item.icon}
                <span>{item.text}</span>
              </MenuItem>
            ))
          }
        </MenuList>
      </Menu>
      <Section>
        <div>
          <Outlet />
        </div>
        <Asides>
          <Aside />
          <Rankings />
          <Advertise />
          <Advertise />
          <Advertise />
        </Asides>
      </Section>
    </Container>
  )
})

export default Home

const Container = styled.div`
  margin: auto;
  max-width: 1200px;
  padding: 15px 20px;
  display: flex;
  gap: 18px;
`

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 16%;
  background-color: #fff;
  overflow-y: scroll;
  align-self: flex-start;
  border-radius: 5px;
  .active {
    color: #1E80FF;
    background: #E7F3FF;
    border-radius: 4px;    
  }
`

const Section = styled.section`
  flex: 1;
  display: flex;
  align-self: flex-start;
  gap: 18px;
`

const Asides = styled.aside`
  flex-basis: 70%;
  display: flex;
  flex-direction: column;
  gap: 18px;
`
const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 10px;
  font-weight: 400;
`
const MenuItem = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 10px 15px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease; // 添加过渡动画
    border-radius: 4px;
    
    &:hover { // 添加hover效果
      color: #1E80FF;
      background: #F0F8FF;
      opacity: 0.8;
      transform: translateX(3px);
    }
`