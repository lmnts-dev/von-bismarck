import React from 'react'
import dankeImg from '../../images/danke.svg'
import styled from 'styled-components'

const DankeElement = styled.img`
  width: 8vw;
`

const Danke = () => (
  <DankeElement src={dankeImg} alt="Von Bismarck" />
)

export default Danke
