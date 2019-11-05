import React from 'react'
import Layout from '../components/Layout'
import Row from '../components/Row'
import Col from '../components/Col'
import Menu from '../components/Menu'
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
          <Menu/>
        </Col>
      </Row>
    </OurCol>
    <Footer />
  </Layout>
)

export default IndexPage
