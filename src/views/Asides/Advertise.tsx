import React, { memo } from 'react'
import styled from 'styled-components'

const Advertise = memo(() => {
  return (
    <Container>
      <Img src="https://p9-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/80d120664b1044ebb9be511202b368b6~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgQ0YxNOW5tOiAgeWFtQ==:q75.awebp?rk3s=f64ab15b&x-expires=1763954802&x-signature=Fj9V%2F0PvA4%2FIf%2FJEkuPJHThD%2BJM%3D" alt="" />
    </Container>
  )
})

export default Advertise

const Container = styled.div`
  
`

const Img = styled.img`
  width: 100%;
  border-radius: 5px;
`