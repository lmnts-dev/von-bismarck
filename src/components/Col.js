import React from 'react'
import styled from 'styled-components'

const ColElement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  ${props => {
    if (props.maxWidth)
      return `
        max-width: ${props.maxWidth};
        width: 100%;
    `
  }};
`

const Col = ({ children, maxWidth }) => (
  <ColElement maxWidth={maxWidth}>
    {children}
  </ColElement>
)

export default Col
