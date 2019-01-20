import React from 'react'
import birds from '../../images/ico-birds.svg'
import * as lmnts from '../../data/Styles'
import styled from 'styled-components'

const BirdsElement = styled.img`
  width: ${lmnts.Base.BangerWidth};
  @media (max-width: ${lmnts.Base.Screen.Sm + "px"}) {
    width: 20vw;
  }
`

const Birds = () => <BirdsElement src={birds} alt="Von Bismarck" />

export default Birds
