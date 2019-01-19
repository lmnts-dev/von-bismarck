import React from 'react'
import styled from 'styled-components'
import * as lmnts from '../data/Styles'

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
