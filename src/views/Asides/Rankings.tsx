import { ArrowRightOutlined, LineChartOutlined, UserSwitchOutlined } from '@ant-design/icons'
import React, { memo } from 'react'
import styled from 'styled-components'


const Rankings = memo(() => {
  return (
    <Container>
      <Header>
        <Title>
          <LineChartOutlined />
          <span>文章榜</span>
        </Title>
        <Button>
          <UserSwitchOutlined />
          <span>换一换</span>
        </Button>
      </Header>

      <Content>
        <div className="item">
          <span>1</span>
          <p>前端不是只会写管理后台，我用 400 行代码画了一个 LABUBU ！</p>
        </div>
        <div className="item">
          <span>2</span>
          <p>前端不是只会写管理后台，我用 400 行代码画了一个 LABUBU ！</p>
        </div>
        <div className="item">
          <span>3</span>
          <p>前端不是只会写管理后台，我用 400 行代码画了一个 LABUBU ！</p>
        </div>
        <div className="item">
          <span>4</span>
          <p>前端不是只会写管理后台，我用 400 行代码画了一个 LABUBU ！</p>
        </div>
      </Content>

      <Footer>
        <Button>
          <span>查看更多</span>
          <ArrowRightOutlined />
        </Button>
      </Footer>

    </Container>
  )
})

export default Rankings

const Container = styled.div`
  background-color: #fff;
  border-radius: 5px;
`
const Footer = styled.div`
  padding: 10px 15px;
  display: flex;
  justify-content: center;
  gap: 3px;
`



const Content = styled.div`
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-size: 13px;
  color: #8a919f;
  border-top: 1px solid #f5f5f5;
  border-bottom: 1px solid #f5f5f5;

  .item:hover {
    color: #1E80FF;
    background-color: #F0F8FF;
  }

  .item {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    padding: 10px 5px;
    border-radius: 4px;
  }
  .item:hover p {
    
  }
  .item p {
    color: #252933;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    line-height: 1.5;
  }
   /* 前三名的特殊颜色 */
  .item:nth-child(1) span {
    color: #f5a623; /* 金色/黄色 - 第1名 */
    font-weight: 500;
    background: linear-gradient(180deg, #f64242 20%, rgba(246, 66, 66, .4) 80%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
  .item:nth-child(2) span {
    color: #979797; /* 银色/灰色 - 第2名 */
    font-weight: 500;
  }
  .item:nth-child(3) span {
    color: #795548; /* 铜色/棕色 - 第3名 */
    font-weight: 500;
  }
`
const Header = styled.div`
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  gap: 3px;
`



const common = styled.span`
  display: flex;
  align-items: center; 
  gap: 3px;
`
const Title = styled(common)`
  color: #333;
  font-weight: 500;
  font-size: 14px;
`

const Button = styled(common)`
  color: #8a919f;
  font-size: 12px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    color: #1E80FF;
    transform: translateX(3px);
  }
`