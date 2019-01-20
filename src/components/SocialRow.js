import React from 'react'
import styled from 'styled-components'
import * as lmnts from '../data/Styles'
import Danke from '../components/images/Danke'

const SocialRowElement = styled.div`
  display: flex;
  align-items: center;
  span {
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 0 ${lmnts.Base.Size + 'px'};
    font-size: 0.6vw;
    a {
      text-decoration: none;
      color: ${lmnts.Clr.Navy};
      position: relative;
      &:after {
        content: '';
        position: absolute;
        width: 0;
        height: 3px;
        display: block;
        margin-top: 5px;
        right: 0;
        background: ${lmnts.Clr.Navy};
        transition: width 1s ease;
        -webkit-transition: width 1s ease;
      }

      &:hover {
        &:after {
          width: 100%;
          left: 0;
          background: ${lmnts.Clr.Navy};
        }
      }
    }
  }
`

const SocialRow = () => (
  <SocialRowElement>
    <span>
      <a href="https://facebook.com/" rel="noopener noreferrer" target="_blank">
        Facebook
      </a>
    </span>
    <span>
      <Danke />
    </span>
    <span>
      <a href="https://facebook.com/" rel="noopener noreferrer" target="_blank">
        Instagram
      </a>
    </span>
  </SocialRowElement>
)

export default SocialRow
