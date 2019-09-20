import React from 'react'
import styled from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import * as lmnts from '../data/Styles'

const PageBtnElement = styled.span`
  display: flex;
  text-transform: uppercase;
  font-size: 2vw;
  position: relative;
  color: ${lmnts.Clr.Navy};
  text-decoration: none;
  line-height: 0;
  align-items: center;
  ${props => {
    if (props.altBtn)
      return `
        font-size: 1vw;
        letter-spacing: .04rem;
    `
  }};

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 4px;
    background-color: ${lmnts.Clr.Tan};
    transition: transform 0.5s ease;
    transform: scaleX(1);
    @media (max-width: ${lmnts.Base.Screen.Sm + 'px'}) {
      height: 4px;
    }
    ${props => {
      if (props.altBtn)
        return `
        top: 50%;
        width: ${lmnts.Base.Size / 2}px;
        height: 2px;
        @media (max-width: ${lmnts.Base.Screen.Sm + 'px'}) {
          height: 2px;
        }
    `
    }};
  }

  &:before {
    top: -2px;
    ${props => {
      if (props.altBtn)
        return `
        top: 50%;
        left: ${lmnts.Base.Size / -1.5}px;
    `
    }};
  }

  &:after {
    bottom: 0;
    ${props => {
      if (props.altBtn)
        return `
        right: ${lmnts.Base.Size / -1.5}px;
    `
    }};
  }

  &:hover {
    &:before,
    &:after {
      transform: scaleX(1.2);
      @media (max-width: ${lmnts.Base.Screen.Sm + 'px'}) {
        transform: scaleX(1);
      }
    }
  }

  @media (max-width: ${lmnts.Base.Screen.Sm + 'px'}) {
    font-size: 4vw;
    width: 100%;
    text-align: center;
    &:before {
      display: none;
    }
    ${props => {
      if (props.lineTop)
        return `
        &:before {
          display: block;
        }
    `
    if (props.altBtn) return `
        width: auto !important;
        &:before {
          display: block;
        }
    `
    }};
  }
`

const PageLink = styled(AniLink)`
  text-decoration: none;
  color: ${lmnts.Clr.Navy};
  position: relative;

  span {
    position: relative;
    z-index: 2;
    height: 7.5vh;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 0;
  }
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2vw;
    display: block;
    margin-top: 0px;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    background: ${lmnts.Clr.DarkCream};
    transition: width 1s ease;
    -webkit-transition: width 1s ease;
    z-index: 1;
    @media (max-width: ${lmnts.Base.Screen.Sm + 'px'}) {
      height: 5vw;
    }
  }

  &:hover {
    &:after {
      width: 100%;
      left: 0;
      background: ${lmnts.Clr.DarkCream};
    }
  }
  @media (max-width: ${lmnts.Base.Screen.Sm + 'px'}) {
    font-size: 5vw;
    width: 100%;
    text-align: center;
    span {
      width: 100%;
    }
    ${props => {
      if (props.altBtn)
        return `
        span {
          display: inline-block;
          font-size: 14px ;
          height: auto;
          line-height: 1.2;
        
    `
    }};
  }
`

const PageBtn = ({
  label,
  to,
  absolute,
  animDirection,
  lineTop,
  altBtn,
  target,
}) => (
  <PageBtnElement
    lineTop={lineTop}
    absolute={absolute}
    animDirection={animDirection}
    altBtn={altBtn}
  >


    <PageLink
      bg={lmnts.Clr.Tan}
      to={to}
      altBtn={altBtn}
      cover
      duration={lmnts.Anim.Page.Duration}
      direction={animDirection}
    >
      <span>{label}</span>
    </PageLink>
  </PageBtnElement>
)

export default PageBtn
