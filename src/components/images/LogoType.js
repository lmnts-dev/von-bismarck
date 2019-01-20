import React from 'react'
import logotype from '../../images/logotype.svg'
import styled from 'styled-components'
import Tilt from 'react-tilt'

const LogoTypeLmnt = styled.img`
  width: 45vw;
  z-index: 99;
  position: relative;
`

const LogoType = () => (
  <Tilt options={{ max : 25 }}>
    <LogoTypeLmnt src={logotype} alt="Von Bismarck" />
  </Tilt>
)

export default LogoType
