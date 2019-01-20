import React from 'react'
import Layout from '../components/Layout'
import Row from '../components/Row'
import FlexCol from '../components/FlexCol'
import Col from '../components/Col'
import Footer from '../components/Footer'
import SEO from '../components/SEO'
import PageHeader from '../components/PageHeader'
import * as lmnts from '../data/Styles'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from 'styled-components'

const LinkWrap = styled(AniLink)`
  text-decoration: none;
`

const IndexPage = () => (
  <LinkWrap to="/" cover bg={lmnts.Clr.Cream} duration={lmnts.Anim.Page.Duration} direction="up">
    <Layout
      bgColor={lmnts.Clr.Cream}
      borderColor={lmnts.Clr.Cream}
      wrapBg={lmnts.Clr.Tan}
    >
    <PageHeader label="Menu" />
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <FlexCol>
        <Row>
          <Col>
          </Col>
        </Row>
        <Row>
          <Col>
            Menu
          </Col>
        </Row>
      </FlexCol>
      <Footer />
    </Layout>
  </LinkWrap>
)

export default IndexPage
