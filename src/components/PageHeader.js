import React from 'react'
import styled from 'styled-components'
import * as lmnts from '../data/Styles'

const PageHeaderElement = styled.div`
  position: absolute;
  top: 0;
  text-transform: uppercase;
  left: 50%;
  transform: translateX() (-50%);
  color: ${lmnts.Clr.White};
  span {
    display:block;
    position: relative;
    font-size: .8vw;
    padding-top: ${lmnts.Base.Size*1.5 + "px"};
    &:before {
      content:'';
      position: absolute;
      transform: translateX() (-50%);
      left: 50%;
      top: -1px;
      width: 1px;
      height: ${lmnts.Base.Size + "px"};
      background-color: ${lmnts.Clr.White};
  }
`

const PageHeader = ({ label }) => (
  <PageHeaderElement label={label}>
    <span>{label}</span>
  </PageHeaderElement>
)

export default PageHeader
