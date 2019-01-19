import React from 'react'
import logotype from '../../images/logotype.svg'
import styled from 'styled-components'

const LogoTypeLmnt = styled.img`
  width: 45vw;
`

const LogoType = () => (
  <LogoTypeLmnt src={logotype} alt="Von Bismarck" />
)

export default LogoType
