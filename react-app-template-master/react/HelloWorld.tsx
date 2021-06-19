import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const HelloWorld = () => {
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)
  }, [])

  return (
    <Container>
      {loading ? <Title>Hellow World</Title> : 'carregando'}
    </Container>
  )
}

export default HelloWorld

const Container = styled.div`
  background-color: #EDEDED;
  text-align: center;
`

const Title = styled.h1`
  font-size: 20px;
  font-weight: 800;
`
