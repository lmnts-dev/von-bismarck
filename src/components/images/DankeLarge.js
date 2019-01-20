import React from 'react'
import dankeLg from '../../images/danke-lg.svg'
import styled from 'styled-components'
import Tilt from 'react-tilt'

const DankeLargeElement = styled.img`
  width: 45vw;
  margin-bottom: 3vw;
`

const DankeLarge = () => (
  <Tilt options={{ max : 25 }}>
    <DankeLargeElement src={dankeLg} alt="Von Bismarck" />
  </Tilt>
)

export default DankeLarge
