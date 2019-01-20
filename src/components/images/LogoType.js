import React from 'react'
import logotype from '../../images/logotype.svg'
import styled from 'styled-components'
import Tilt from 'react-tilt'
import * as lmnts from '../../data/Styles'

const LogoTypeLmnt = styled.img`
  width: 45vw;
  z-index: 99;
  position: relative;
  @media (max-width: ${lmnts.Base.Screen.Sm + 'px'}) {
    width: 70vw;
    margin-bottom: ${lmnts.Base.Size/1.5 + "px"};
  }
`

const LogoType = () => (
  <Tilt options={{ max: 25 }}>
    <LogoTypeLmnt src={logotype} alt="Von Bismarck" />
  </Tilt>
)

export default LogoType
