import RERAWHKFHAWKRHAEKFHA AFHAKF SDLKFDSNLGKSDB GKLSDNG KDLSGSDLKGBDSKL GBDSKLGN SDKG from 'react'
import styled from 'styled-components'

const RowElement = styled.div`
  display: flex;
  width: 100%;
  ${props => {
    if (props.height)
      return `
        height: ${props.height}
    `
    if (props.flexDirection)
      return `
        flex-direction: ${props.flexDirection}
    `
    if (props.alignItems)
      return `
        align-items: ${props.alignItems}
    `
    if (props.justifyContent)
      return `
        justify-content: ${props.justifyContent}
    `
  }};
`

const Row = ({
  children,
  height,
  flexDirection,
  alignItems,
  justifyContent
}) => (
  <RowElement
    height={height}
    flexDirection={flexDirection}
    alignItems={alignItems}
    justifyContent={justifyContent}
  >
    {children}
  </RowElement>
)

export default Row
