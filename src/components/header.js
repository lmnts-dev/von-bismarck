import React from 'react'
import styled from 'styled-components'
import * as lmnts from '../data/Styles'

const HeaderElement = styled.header`
  display: flex;
`

const Header = ({ children }) => (
  <HeaderElement>
    {children}
  </HeaderElement>
)

export default Header
