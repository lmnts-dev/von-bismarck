import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { createGlobalStyle } from 'styled-components'
import * as lmnts from '../data/Styles'
import PageGrid from '../components/PageGrid'

const GlobalStyle = createGlobalStyle`

  /* Reset CSS */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  body {
    font-family: ${lmnts.Fnt.Body};
    min-height: 100vh;
    width: 100vw;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  * {
    box-sizing: border-box
  }

  /* Typography Styles */

  body {
    font-family: ${lmnts.Fnt.Body};
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: ${lmnts.Fnt.Header};
  }

  /* Palette */
  body { 
    background-color: ${props => props.bgColor};
    color: ${lmnts.Clr.Navy};
  }
`

const Layout = ({ children, borderColor, bgColor, wrapBg }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <GlobalStyle  bgColor={props => bgColor} />
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css?family=Poppins:500"
            rel="stylesheet"
          />
          <script src="https://widgets.resy.com/embed.js"></script>
          {/* <script>{`
          window.onload = function() { 
            resyWidget.addButton(document.getElementById('resyButton-ESrNtPyK_uHwbEbpgXBrl'), {"venueId":67440,"apiKey":"2tpYJ5pODAXc7VwrYjKGFcsQ4ZoRfpXq","replace":true,});
            }
          `}
          </script> */}
        </Helmet>
        <PageGrid wrapBg={props => wrapBg} borderColor={props => borderColor}>
          {children}
        </PageGrid>
      </>
    )}
  />
)

export default Layout
