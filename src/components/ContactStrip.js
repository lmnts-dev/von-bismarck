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
    a {
      color: ${lmnts.Clr.Navy};
      &:first-of-type {
        margin-right: ${lmnts.Base.Size / 4 + "px"};
        pointer-events: all;
      }
    }
  }
`


const PageGrid = () => (
  <ContactStripLmnt>
    <MediaQuery minWidth={lmnts.Base.Screen.Sm + 1}>
      <span>805 S Wells Ave</span>
      <span>Reno, NV</span>
      <span>Wed-Sat 5pm-11pm </span>
      <span>Sun 2pm-9pm</span>
    </MediaQuery>

    <MediaQuery maxWidth={lmnts.Base.Screen.Sm}>
      <Row justifyContent="center">
        <span>805 S Wells Ave</span>
        <span>Reno, NV</span>
      </Row>
      <Row justifyContent="center">
        <span>Wed-Sat 5pm-11pm </span>
        <span>Sun 2pm-9pm</span>
      </Row>
      <Row justifyContent="center">
        <a
          href="tel:7756223687"
          rel="noopener noreferrer"
          target="_blank"
        >
          775.622.3687
        </a>
        <a
          href="https://www.instagram.com/vonbismarckreno/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Instagram
        </a>
      </Row>
    </MediaQuery>
  </ContactStripLmnt>
)

export default PageGrid
