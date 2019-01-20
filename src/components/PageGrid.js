import React from 'react'
import styled from 'styled-components'
import * as lmnts from '../data/Styles'

const PageInner = styled.main`
  min-height: 100vh;
  width: 100vw;
  overflow: hidden;
  padding-top: ${lmnts.Base.Grid.Gutter.Top + 'px'};
  padding-bottom: ${lmnts.Base.Grid.Gutter.Bottom + 'px'};
  padding-left: ${lmnts.Base.Grid.Gutter.Left + 'px'};
  padding-right: ${lmnts.Base.Grid.Gutter.Right + 'px'};
  border: ${lmnts.Base.Size / 3 + 'px'} solid ${props => props.borderColor};
  background-color: ${props => props.wrapBg};
  transition: all ${lmnts.Anim.Page.Duration + 's'} ${lmnts.Anim.Page.Function};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${lmnts.Base.Screen.Sm + "px"}) {
    padding-top: ${lmnts.Base.Grid.Gutter.Top/2 + 'px'};
    padding-bottom: ${lmnts.Base.Grid.Gutter.Bottom/2 + 'px'};
    padding-left: ${lmnts.Base.Grid.Gutter.Left/2 + 'px'};
    padding-right: ${lmnts.Base.Grid.Gutter.Right/2 + 'px'};
    border: ${lmnts.Base.Size / 6 + 'px'} solid ${props => props.borderColor};
  }
`

const PageGrid = ({ children, borderColor, wrapBg }) => (
  <PageInner borderColor={borderColor} wrapBg={wrapBg}>
    {children}
  </PageInner>
)

export default PageGrid
