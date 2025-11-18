import React, { memo } from 'react'
import List from '../home/List'
import styled from 'styled-components'

const Recommended: React.FC = memo(() => {
  return (
    <Container>
      <List />
    </Container>
    
  )
})

export default Recommended

const Container = styled.div`
  height: 100vh;
  overflow-x: auto;
  border-radius: 5px;
`