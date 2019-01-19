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
    padding: 0 ${lmnts.Base.Size + "px"};
    font-size: .6vw;
  }
`

const SocialRow = () => (
  <SocialRowElement>
    <span>
      Facebook
    </span>
    <span>
      <Danke />
    </span>
    <span>
      Instagram
    </span>
  </SocialRowElement>
)

export default SocialRow
