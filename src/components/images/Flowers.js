import React from 'react'
import flowers from '../../images/ico-flower.svg'
import * as lmnts from '../../data/Styles'
import styled from 'styled-components'

const FlowersElement = styled.img`
  width: ${lmnts.Base.BangerWidth};
  @media(max-width:${lmnts.Base.Screen.Sm + "px"}) {
    width: 20vw;
  }
`

const Flowers = () => (
  <FlowersElement src={flowers} alt="Von Bismarck" />
)

export default Flowers
