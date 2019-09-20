import React from 'react'
import Layout from '../components/Layout'
import Row from '../components/Row'
import Col from '../components/Col'
import Footer from '../components/Footer'
import SEO from '../components/SEO'
import PageHeader from '../components/PageHeader'
import * as lmnts from '../data/Styles'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from 'styled-components'

const LinkWrap = styled(AniLink)`
  text-decoration: none;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
`

const OurCol = styled.div`
  position: relative;
  z-index: 2;
`

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

const IndexPage = () => (
  <Layout
    bgColor={lmnts.Clr.Cream}
    borderColor={lmnts.Clr.Cream}
    wrapBg={lmnts.Clr.Tan}
  >
    <PageHeader label="Menu" />
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <LinkWrap
      to="/"
      cover
      bg={lmnts.Clr.Cream}
      duration={lmnts.Anim.Page.Duration}
      direction="up"
    />
    <OurCol>
      <Row>
        <Col>
          <DownloadLink href="/Cocktails.pdf" download>
            <span>Cocktails</span>
          </DownloadLink>
          <DownloadLink href="/Wine-Beer.pdf" download>
            <span>Wine + Beer</span>
          </DownloadLink>
          <DownloadLink href="/Dinner.pdf" download>
            <span>Dinner</span>
          </DownloadLink>
          <DownloadLink href="/Snacks.pdf" download>
            <span>Bar Snacks</span>
          </DownloadLink>
        </Col>
      </Row>
    </OurCol>
    <Footer />
  </Layout>
)

export default IndexPage
