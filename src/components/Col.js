import React from 'react'
import styled from 'styled-components'

const ColElement = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`

const Col = ({ children }) => (
  <ColElement>
    {children}
  </ColElement>
)

export default Col
