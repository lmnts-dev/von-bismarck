import React from 'react'
import styled from 'styled-components'
// import AniLink from "gatsby-plugin-transition-link/AniLink";
import { Link } from "gatsby"
import * as lmnts from '../data/Styles'

const PageBtnElement = styled(Link)`
  display: flex;
  text-transform: uppercase;
  font-size: 2vw;
  position: relative;
  color: ${lmnts.Clr.Navy};
  text-decoration: none;
  line-height: 0;
  height: 7.5vh;
  align-items: center;

  &:before, &:after {
    content:'';
    position: absolute;
    width:100%;
    height: 4px;
    background-color: ${lmnts.Clr.Tan};
    transition: transform .5s ease;
    transform: scaleX(1);
  }

  &:before {
    top: -2px;
  }

  &:after {
    bottom: 0;
  }

  &:hover {
    &:before, &:after {
      transform: scaleX(1.2);
    }
  }

  ${props => {
    if (props.absolute == "bottomLeft") return `
        position: absolute;
        bottom: 0;
        left: 0;
    `
    if (props.absolute == "bottomRight") return `
        position: absolute;
        bottom: 0;
        right: 0;
    `
    if (props.absolute == "topLeft") return `
        position: absolute;
        top: 0
        left: 0;
    `
    if (props.absolute == "topRight") return `
        position: absolute;
        top: 0;
        right: 0;
    `
  }};
`

const PageBtn = ({ label, to, absolute }) => (
  <PageBtnElement cover bg={lmnts.Clr.Tan} to={to} absolute={absolute}>
    {label}
  </PageBtnElement>
)

export default PageBtn
