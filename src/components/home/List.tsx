import React, { memo, useState } from 'react'
import styled from 'styled-components'
import Tabs from './Tabs'
import Card from './Card'



const List = memo(() => {

  return (
    <Container>
      <Tabs />
      <Card />
      <Card />
      <Card />
    </Container>
  )
})

export default List



const Container = styled.div`
  background-color: #fff;
  border-radius: 5px;
  padding-bottom: 20px;
`