import React from 'react'
import styled from 'styled-components'
import * as lmnts from '../data/Styles'

const FooterElement = styled.footer`
  display: flex;
`

const Footer = ({ children }) => (
  <FooterElement>
    {children}
  </FooterElement>
)

export default Footer
