import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { graphql, StaticQuery } from 'gatsby'
import * as lmnts from '../data/Styles'

const DownloadLink = styled.a`
  color: ${lmnts.Clr.Cream};
  text-decoration: none;
  padding: ${lmnts.Base.Size / 7 + 'px'} 0;
  margin: ${lmnts.Base.Size / 12 + 'px'} 0;
  text-transform: uppercase;
  letter-spacing: 0.15rem;
  font-size: 24px;
  position: relative;
  span {
    position: relative;
    z-index: 2;
  }

  &:after {
    position: absolute;
    background-color: ${lmnts.Clr.Navy};
    opacity: 0.2;
    transition-duration: 0.5s;
    content: '';
    height: 100%;
    width: 0;
    left: -10%;
    top: 0;
    z-index: 1;
  }

  &:hover {
    &:after {
      width: 120%;
    }
  }
`


const Menu = props => (
  <StaticQuery
    query={graphql`
      {
        allDataJson {
          nodes {
            menus {
              bar_snacks_menu
              cocktail_menu
              dinner_menu
              wine_beer_menu
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <DownloadLink
          href={data.allDataJson.nodes[0].menus.cocktail_menu}
          download
        >
          <span>Cocktails</span>
        </DownloadLink>
        <DownloadLink
          href={data.allDataJson.nodes[0].menus.wine_beer_menu}
          download
        >
          <span>Wine + Beer</span>
        </DownloadLink>
        <DownloadLink
          href={data.allDataJson.nodes[0].menus.dinner_menu}
          download
        >
          <span>Dinner</span>
        </DownloadLink>
        <DownloadLink
          href={data.allDataJson.nodes[0].menus.bar_snacks_menu}
          download
        >
          <span>Bar Snacks</span>
        </DownloadLink>
      </>
    )}
  />
)

export default Menu
