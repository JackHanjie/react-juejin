import React, { memo } from 'react'
import styled from 'styled-components'

const Aside = memo(() => {
  return (
    <Container>
      <div className='header'>
        <span>上午好!</span>
        <p>点亮在社区的每一天</p>
      </div>
      <div className='sign'>
        <button>去签到</button>
      </div>
    </Container>
  )
})

export default Aside

const Container = styled.div`
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 10px 15px;
  .header {
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    gap: 3px;
  }
  .header span {
    color: #333;
    font-weight: 500;
    font-size: 16px;
  }
  .header p {
    color: #8a919f;
    font-size: 12px;
  }
  .sign {
  }
  .sign button {
    padding: 8px 16px;
    border-radius: 5px;
    color: #007bff;
    border: 1px solid rgba(30, 128, 255, .3);
    background-color: rgba(30, 128, 255, .05)
  }
`