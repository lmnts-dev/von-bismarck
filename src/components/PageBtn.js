import React from 'react'
import styled from 'styled-components'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import * as lmnts from '../data/Styles'

const PageBtnElement = styled.span`
  display: flex;
  text-transform: uppercase;
  font-size: 2vw;
  position: relative;
  color: ${lmnts.Clr.Navy};
  text-decoration: none;
  line-height: 0;
  height: 7.5vh;
  align-items: center;

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 4px;
    background-color: ${lmnts.Clr.Tan};
    transition: transform 0.5s ease;
    transform: scaleX(1);
  }

  &:before {
    top: -2px;
  }

  &:after {
    bottom: 0;
  }

  &:hover {
    &:before,
    &:after {
      transform: scaleX(1.2);
    }
  }

  @media(max-width:${lmnts.Base.Screen.Sm + "px"}) {
    line-height: 1.2;
  }
`

const PageLink = styled(AniLink)`
  text-decoration: none;
  color: ${lmnts.Clr.Navy};
  position: relative;
  span {
    position: relative;
    z-index: 2;
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
  }

  &:hover {
    &:after {
      width: 100%;
      left: 0;
      background: ${lmnts.Clr.DarkCream};
    }
  }
`

const PageBtn = ({ label, to, absolute, animDirection }) => (
  <PageBtnElement absolute={absolute} animDirection={animDirection}>
    <PageLink bg={lmnts.Clr.Tan} to={to} cover bg={lmnts.Clr.Cream} duration={lmnts.Anim.Page.Duration} direction={animDirection}>
      <span>{label}</span>
    </PageLink>
  </PageBtnElement>
)

export default PageBtn
