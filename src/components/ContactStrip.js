import React from 'react'
import styled from 'styled-components'
import * as lmnts from '../data/Styles'
import Row from '../components/Row'
import MediaQuery from 'react-responsive'

const spacing = 70
const dotSize = 4

const ContactStripLmnt = styled.main`
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 1vw;
  pointer-events: none;
  span {
    padding-right: ${spacing / 2 + 'px'};
    position: relative;
    color: ${lmnts.Clr.Navy};
    &:before {
      content: '';
      position: absolute;
      right: ${spacing / 2 / 2 - dotSize / 2 + 'px'};
      top: 50%;
      transform: translateY(-50%);
      height: ${dotSize + 'px'};
      width: ${dotSize + 'px'};
      border-radius: 50%;
      border: 1px solid ${lmnts.Clr.Tan};
    }
    &:last-child {
      padding-right: 0;
      &:before {
        display: none;
      }
    }
  }

  @media (max-width: ${lmnts.Base.Screen.Sm + 'px'}) {
    font-size: 2.2vw;
    width: 100%;
    max-width: 80vw;
    line-height: 1.5;
    margin-top: ${lmnts.Base.Size / 2 + "px"};
    span {
      padding-right: ${spacing / 4 + 'px'};
      &:before {
        right: ${spacing / 4 / 2 - dotSize / 3 + 'px'};
        height: ${dotSize/3 + 'px'};
        width: ${dotSize/3 + 'px'};
      }
    }
  }
`

const PageGrid = () => (
  <ContactStripLmnt>
    <MediaQuery minWidth={lmnts.Base.Screen.Sm + 1}>
      <span>123 Wells Avenue</span>
      <span>Reno</span>
      <span>Nevada</span>
      <span>775.123.4567</span>
    </MediaQuery>

    <MediaQuery maxWidth={lmnts.Base.Screen.Sm}>
      <Row justifyContent="center">
        <span>123 Wells Avenue</span>
        <span>Reno</span>
        <span>Nevada</span>
      </Row>
      <Row justifyContent="center">
        <span>775.123.4567</span>
        <span>Facebook</span>
        <span>Instagram</span>
      </Row>
    </MediaQuery>
  </ContactStripLmnt>
)

export default PageGrid
