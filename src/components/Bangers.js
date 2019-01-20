import React from 'react'
import styled from 'styled-components'
import * as lmnts from '../data/Styles'
import SocialRow from '../components/SocialRow'
import Birds from '../components/images/Birds'
import Flowers from '../components/images/Flowers'
import NevadaBadge from '../components/images/NevadaBadge'

const BangersElement = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`

const LeftBottom = styled.div`
  pointer-events: none;
  position: absolute;
  left: ${lmnts.Base.Grid.Gutter.Left + "px"};
  bottom: ${lmnts.Base.Grid.Gutter.Bottom + "px"};
  @media(max-width:${lmnts.Base.Screen.Sm + "px"}) {
    left: ${lmnts.Base.Grid.Gutter.Left/2 + "px"};
    bottom: ${lmnts.Base.Grid.Gutter.Bottom/2 + "px"};
  }
`
const RightTop = styled.div`
  pointer-events: none;
  position: absolute;
  right: ${lmnts.Base.Grid.Gutter.Right + "px"};
  top: ${lmnts.Base.Grid.Gutter.Top + "px"};
  @media(max-width:${lmnts.Base.Screen.Sm + "px"}) {
    right: ${lmnts.Base.Grid.Gutter.Right/2 + "px"};
    top: ${lmnts.Base.Grid.Gutter.Top/2 + "px"};
  }
`

const LeftTop = styled.div`
  pointer-events: none;
  position: absolute;
  left: ${lmnts.Base.Grid.Gutter.Left + "px"};
  top: ${lmnts.Base.Grid.Gutter.Top + "px"};
  @media(max-width:${lmnts.Base.Screen.Sm + "px"}) {
    left: ${lmnts.Base.Grid.Gutter.Left/2 + "px"};
    top: ${lmnts.Base.Grid.Gutter.Top/2 + "px"};
  }
`
const RightBottom = styled.div`
  pointer-events: none;
  position: absolute;
  right: ${lmnts.Base.Grid.Gutter.Right + "px"};
  bottom: ${lmnts.Base.Grid.Gutter.Bottom + "px"};
  @media(max-width:${lmnts.Base.Screen.Sm + "px"}) {
    right: ${lmnts.Base.Grid.Gutter.Right/2 + "px"};
    bottom: ${lmnts.Base.Grid.Gutter.Bottom/2 + "px"};
  }
`
const CenterTop = styled.div`
  pointer-events: none;
  position: absolute;
  top: ${lmnts.Base.Grid.Gutter.Top + "px"};
  left: 50%;
  transform: translateX(-50%);
  @media(max-width:${lmnts.Base.Screen.Sm + "px"}) {
    top: ${lmnts.Base.Grid.Gutter.Right/2 + "px"};
  }
`
const CenterBottom = styled.div`
  position: absolute;
  bottom: ${lmnts.Base.Grid.Gutter.Right + "px"};
  left: 50%;
  transform: translateX(-50%);
  z-index: 600;
  @media(max-width:${lmnts.Base.Screen.Sm + "px"}) {
    bottom: ${lmnts.Base.Grid.Gutter.Right/2 + "px"};
  }
`

const Bangers = () => (
  <BangersElement>
    <CenterTop>
      <NevadaBadge />
    </CenterTop>
    <LeftTop>
      <Flowers />
    </LeftTop>
    <LeftBottom>
      <Birds />
    </LeftBottom>
    <RightTop>
      <Birds />
    </RightTop>
    <RightBottom>
      <Flowers />
    </RightBottom>
    <CenterBottom>
      <SocialRow />
    </CenterBottom>
  </BangersElement>
)

export default Bangers
