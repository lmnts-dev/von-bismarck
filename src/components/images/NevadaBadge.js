import React from 'react'
import nevada from '../../images/ico-vb-nv.svg'
import styled from 'styled-components'
import * as lmnts from '../../data/Styles'

const NevBadgeElement = styled.img`
  width: 8vh;
  @media(max-width:${lmnts.Base.Screen.Sm + "px"}) {
    width: 30vw;
  }
`

const NevBadge = () => (
  <NevBadgeElement src={nevada} alt="Von Bismarck" />
)

export default NevBadge
