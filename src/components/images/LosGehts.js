import React from 'react'
import LosGehtsLg from '../../images/los-gehts-lg.svg'
import styled from 'styled-components'
import Tilt from 'react-tilt'

const LosGehtsElement = styled.img`
  width: 45vw;
`

const LosGehts = () => (
  <Tilt options={{ max : 25 }}>
    <LosGehtsElement src={LosGehtsLg} alt="Von Bismarck" />
  </Tilt>
)

export default LosGehts
