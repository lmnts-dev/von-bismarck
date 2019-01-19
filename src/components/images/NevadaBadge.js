import React from 'react'
import nevada from '../../images/ico-vb-nv.svg'
import * as lmnts from '../../data/Styles'
import styled from 'styled-components'

const NevBadgeElement = styled.img`
  width: 8vh;
`

const NevBadge = () => (
  <NevBadgeElement src={nevada} alt="Von Bismarck" />
)

export default NevBadge
