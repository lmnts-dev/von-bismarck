import React from 'react'
import styled from 'styled-components'

const FlexColElement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`

const FlexCol = ({ children }) => (
  <FlexColElement>
    {children}
  </FlexColElement>
)

export default FlexCol
