import React from 'react'
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
              menu_1_file
              menu_1_label
              menu_2_file
              menu_2_label
              menu_3_file
              menu_3_label
              menu_4_file
              menu_4_label
            }
          }
        }
      }
    `}
    render={data => (
      <>
        { (data.allDataJson.nodes[0].menus.menu_1_label && data.allDataJson.nodes[0].menus.menu_1_file) &&
          <DownloadLink
            href='/11-17-23%20VB%20Cocktail%20Menu%202021-19.pdf'
            download
          >
            <span>{data.allDataJson.nodes[0].menus.menu_1_label}</span>
          </DownloadLink>
        
        }

        { (data.allDataJson.nodes[0].menus.menu_2_label && data.allDataJson.nodes[0].menus.menu_2_file) &&
          <DownloadLink
            href='/11-17-23%20VB%20-%20Menu%202020-64%20copy.pdf'
            download
          >
            <span>{data.allDataJson.nodes[0].menus.menu_2_label}</span>
          </DownloadLink>
        }

        { (data.allDataJson.nodes[0].menus.menu_3_label && data.allDataJson.nodes[0].menus.menu_3_file) &&
          <DownloadLink
            href={data.allDataJson.nodes[0].menus.menu_3_file}
            download
          >
            <span>{data.allDataJson.nodes[0].menus.menu_3_label}</span>
          </DownloadLink>
        }

        { (data.allDataJson.nodes[0].menus.menu_4_label && data.allDataJson.nodes[0].menus.menu_4_file) &&
          <DownloadLink
            href={data.allDataJson.nodes[0].menus.menu_4_file}
            download
          >
            <span>{data.allDataJson.nodes[0].menus.menu_4_label}</span>
          </DownloadLink>
        }
      </>
    )}
  />
)

export default Menu
