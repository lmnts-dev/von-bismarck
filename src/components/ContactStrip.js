import React from 'react'
import styled from 'styled-components'
import * as lmnts from '../data/Styles'

const spacing = 70
const dotSize = 4

const ContactStripLmnt = styled.main`
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 1vw;
  pointer-events: none;
  span {
    padding-right: ${spacing / 2 + "px"};
    position: relative;
    color: ${lmnts.Clr.Navy};
    &:before {
      content: '';
      position: absolute;
      right: ${(((spacing / 2)/2)-(dotSize/2)) + "px"};
      top: 50%;
      transform: translateY(-50%);
      height: ${dotSize + "px"};
      width: ${dotSize + "px"};
      border-radius: 50%;
      border: 1px solid ${lmnts.Clr.Tan};
    }
    &:last-child{
      &:before {
        display: none;
      }
    }
  }
`


const PageGrid = () => (
  <ContactStripLmnt>
    <span>123 Wells Avenue</span>
    <span>Reno</span>
    <span>Nevada</span>
    <span>775.123.4567</span>
  </ContactStripLmnt>
)

export default PageGrid
