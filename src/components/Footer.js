import React from 'react'
import styled from 'styled-components'

const FooterElement = styled.footer`
  display: flex;
`

const Footer = ({ children }) => (
  <FooterElement>
    {children}
  </FooterElement>
)

export default Footer
