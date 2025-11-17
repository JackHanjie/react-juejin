import React, { memo, useState } from 'react'
import styled from 'styled-components'
import { BellFilled, CaretDownOutlined, ProjectFilled, SearchOutlined } from '@ant-design/icons'


const menu = [
  {
    text: '首页',
  },
  {
    text: 'AI Coding',
  },
  {
    text: '沸点',
  },
  {
    text: '课程',
  },
  {
    text: '直播',
  },
  {
    text: '活动',
  },
  {
    text: 'AI刷题',
  },
  {
    text: 'APP',
  },
  {
    text: '插件',
  },
]

const NavBar = memo(() => {
  const [isActive, setIsActive] = useState(0)

  const handleClick = (index: number) => {
    setIsActive(index)
  }

  return (
    <Header>
      <Container>
        <Nav className='nav'>
          <Logo className='logo' src={'https://lf-web-assets.juejin.cn/obj/juejin-web/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg'} alt='稀土掘金' />
          <NavList className='nav-list'>
            {
              menu.map((item, index) => (
                <NavItem key={index} onClick={() => handleClick(index)}>
                  <a className={isActive === index ? 'nav-item-a active' : 'nav-item-a'} href='#'>{item.text}</a>
                </NavItem>
              ))
            }
          </NavList>
        </Nav>
        <NavRight className='nav-right'>
          <Search>
            <input className='search' type='text' placeholder='搜索稀土掘金' />
            <button className='search-btn'>
              <SearchOutlined style={{ color: '#999', fontSize: 20 }} />
            </button>
          </Search>
          <div className='nav-item'>
            <button className='create-btn'>
              <span>创作者中心</span>
              <CaretDownOutlined style={{ color: '#fff' }} />
            </button>
          </div>
          <div className='nav-item'>
            <ProjectFilled style={{ color: '#999', fontSize: 20 }} />
            <span>会员</span>
          </div>
          <div className='nav-item'>
            <BellFilled style={{ color: '#999', fontSize: 20 }} />
          </div>
          <div className='nav-item'>
            <img className='avatar' src={'https://p6-passport.byteacctimg.com/img/mosaic-legacy/3793/3131589739~80x80.awebp'} alt='头像' />
          </div>

        </NavRight>
      </Container>
    </Header>
  )
})

export default NavBar

const Logo = styled.img`
  display: block;
  width: 107px;
  height: 22px;
`

const Container = styled.div`
  margin: auto;
  max-width: 1440px;
  padding: 10px 20px;
  display: flex;
  height: 60px;
  color: #86909c;
`

const Nav = styled.nav`
  display: flex;
  flex-basis: 50%;
  align-items: center;
  gap: 20px;
`

const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: flex-start;
  font-size: 14px;
`

const NavItem = styled.li`
  cursor: pointer;
  transition: all 0.3s ease; // 添加过渡动画
  border-radius: 4px;

  a {
    color: #515767;
  }

  a:hover { // 添加hover效果
    color: #1E80FF;
    transform: translateX(3px);
  }
`

const NavRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex:1;
  gap: 20px;
`
const Search = styled.div`
  position: relative;
  border: 1px solid #eee;
  border-radius: 5px;

  .search {
    width: 343px;
    height: 34px;
    border: none;
    border-radius: 5px;
    padding: 0 10px;
    outline: none;
  }

  .search-btn {
    position: absolute;
    top: 0;
    right: 0;
    width: 50px;
    height: 32px;
    margin: 1px;
    border: none;
    border-radius: 0 5px 5px 0;
    background-color: #eee;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

`

const Header = styled.div`
  background-color: #fff;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  transition: transform .2s;

  .create-btn {
    background-color: #1E80FF;
    color: #fff;
    height: 36px;
    border-radius: 5px;
    padding: 0 10px;
    border: 1px solid #eee;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    cursor: pointer;
  }
  
  
  .nav-item {
    font-size: 14px;
    font-weight: 400;
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }

  .active {
    color: #1E80FF;
  }
`