import React from 'react'
import styled, { keyframes } from 'styled-components'
import * as lmnts from '../data/Styles'

const AnimHeight = keyframes`
  from {
    transform-origin: top center;
    transform: scaleY(0);
  }

  to {
    transform-origin: top center;
    transform: scaleY(1);
  }
`

const PageHeaderElement = styled.div`
  position: absolute;
  top: 0;
  text-transform: uppercase;
  left: 50%;
  transform: translateX(-50%);
  color: ${lmnts.Clr.White};
  span {
    display: block;
    position: relative;
    font-size: 0.8vw;
    padding-top: ${lmnts.Base.Size * 1.5 + 'px'};
    &:before {
      content: '';
      position: absolute;
      transform: translateX(-50%);
      left: 50%;
      top: -1px;
      width: 1px;
      height: ${lmnts.Base.Size + 'px'};
      background-color: ${lmnts.Clr.White};
      animation: ${AnimHeight} 1s ease;
      animation-fill-mode: forwards;
    }
    @media (max-width: ${lmnts.Base.Screen.Sm + 'px'}) {
      font-size: 4vw;
    }
  }
`

const PageHeader = ({ label }) => (
  <PageHeaderElement label={label}>
    <span>{label}</span>
  </PageHeaderElement>
)

export default PageHeader
