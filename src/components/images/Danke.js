import React from 'react'
import * as lmnts from '../../data/Styles'
import dankeImg from '../../images/danke.svg'
import styled from 'styled-components'

const DankeElement = styled.img`
  width: 8vw;
  @media (max-width: ${lmnts.Base.Screen.Sm + 'px'}) {
    width: 20vw;
    margin-bottom: ${lmnts.Base.Size / 4 + "px"}
  }
`

const Danke = () => (
  <DankeElement src={dankeImg} alt="Von Bismarck" />
)

export default Danke
