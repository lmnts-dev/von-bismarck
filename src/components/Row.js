import React from 'react'
import styled from 'styled-components'
import * as lmnts from '../data/Styles'

const RowElement = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  height: 29vh;
`

const Row = ({ children }) => (
  <RowElement>
    {children}
  </RowElement>
)

export default Row
