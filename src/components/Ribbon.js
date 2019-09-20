import React from 'react'
import styled from 'styled-components'
import * as lmnts from '../data/Styles'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: ${lmnts.Base.Size * 14}px;
  text-align: center;
  text-transform: uppercase;
  color: ${lmnts.Clr.Cream};
  margin-top: ${lmnts.Base.Size / 4}px;
  padding: 0 ${lmnts.Base.Size / 1.5}px;
  background-color: ${lmnts.Clr.Navy};
  position: relative;
  height: 36px;
  font-size: 1.4vw;
  letter-spacing: 0.2rem;
  @media (max-width: ${lmnts.Base.Screen.Sm + 'px'}) {
    font-size: 14px;
    justify-content: center;
    margin-bottom: ${lmnts.Base.Size / 6}px;
  }
  @media (max-width: ${lmnts.Base.Screen.Sm + 'px'}) {
    font-size: 12px;
    padding-left: ${lmnts.Base.Size / 3}px;
    padding-right: ${lmnts.Base.Size / 3}px;
  }

  span {
    width: ${lmnts.Base.Size / 4}px;
    height: 1px;
    background-color: ${lmnts.Clr.Tan};
    @media (max-width: ${lmnts.Base.Screen.Sm + 'px'}) {
      display: none;
    }
  }

  ::after,
  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: -18px;
    transform: rotate(45deg);
    height: 100%;
    padding-left: 36px;
    background-color: ${lmnts.Clr.Cream};
  }

  ::before {
    left: auto;
    right: -18px;
  }
`

const Oktoberfest = ({ children }) => (
  <Container>
    <span></span>
    OktoberFest: September 29th
    {children}
    <span></span>
  </Container>
)

export default Oktoberfest
