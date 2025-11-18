import React, { memo } from 'react'
import { LikeOutlined, EyeOutlined } from '@ant-design/icons'
import styled from 'styled-components'
const Car_d = memo(() => {
  return (
    <>
      <Content>
        <Card>
          <Title>
            用 Rust 构建 Git 提交历史可视化工具
          </Title>
          <Desc>
            在软件开发中，版本控制系统的历史记录往往承载着项目的演进脉络。然而，当项目规模扩大、分支增多时，
            传统的线性历史记录往往无法满足开发者对项目变化的理解和分析需求。为了解决这一问题，我们开发了一个基于 Rust 语言的 Git 提交历史可视化工具。
          </Desc>
          <Footer>
            <span>
              掘金者阿韩
            </span>
            <span className="footer-item">
              <LikeOutlined />
              100
            </span>
            <span className="footer-item">
              <EyeOutlined />
              100
            </span>
          </Footer>
        </Card>
        <Img src="https://p6-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/28884c8a5f6c448894f33550b0a728bd~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5o6Y6YeR6ICF6Zi_6LGq:q75.awebp?rk3s=f64ab15b&x-expires=1763956690&x-signature=EwT%2B%2BqMQrvvc1w%2Bs6E9PqfqYjVo%3D" alt="" />
      </Content>
      <Line />
    </>
  )
})

export default Car_d

const Line = styled.div`
  height: 1px;
  margin: -5px 20px;
  background-color: #f5f5f5;
`

const Content = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  gap: 5px;
`

const Footer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;

  .footer-item {
    display: flex;
    align-items: center;
    gap: 3px;
  }
`

const Img = styled.img`
  width: 130px;
  height: 70px;
  border-radius: 5px;
`

const Card = styled.div`
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  font-size: 14px;
  color:#8A919F;
`
const Title = styled.div`
  color: #252933;
  font-size: 16px;
  font-weight: 500;
`
const Desc = styled.div`
  
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  line-height: 1.5;
  
`
