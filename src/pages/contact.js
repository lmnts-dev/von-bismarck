import React from 'react'
import Layout from '../components/Layout'
import Row from '../components/Row'
import FlexCol from '../components/FlexCol'
import Col from '../components/Col'
import PageHeader from '../components/PageHeader'
import DankeLarge from '../components/images/DankeLarge'
import SEO from '../components/SEO'
import * as lmnts from '../data/Styles'
import { Link, StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import AniLink from "gatsby-plugin-transition-link/AniLink";

const ContactBody = styled.p`
  color: ${lmnts.Clr.Navy};
  text-decoration: none;
  text-align: center;
  letter-spacing: 2px;
  line-height: 1.4;
  font-size: 1vw;
  position: relative;
  text-transform: uppercase;
`

const LinkWrap = styled(AniLink)`
  text-decoration: none;
`

const InfoPage = () => (
  <LinkWrap to="/" cover bg={lmnts.Clr.Cream} duration={lmnts.Anim.Page.Duration} direction="left">
    <Layout
      bgColor={lmnts.Clr.Cream}
      borderColor={lmnts.Clr.Cream}
      wrapBg={lmnts.Clr.Tan}
    >
    <PageHeader label="Contact" />
      <StaticQuery
        query={siteData}
        render={data => {
          return (
            <FlexCol>
              <Row>
                <Col>
                  <DankeLarge />
                </Col>
              </Row>
              <Row justifyContent="center">
                <Col maxWidth="50vw">
                  <ContactBody>
                    {data.site.siteMetadata.email}
                  </ContactBody>
                </Col>
              </Row>
              <Row justifyContent="center">
                <Col maxWidth="50vw">
                  <ContactBody>
                    {data.site.siteMetadata.phone}
                  </ContactBody>
                </Col>
              </Row>
            </FlexCol>
          )
        }}
      />
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    </Layout>
  </LinkWrap>
)

export default InfoPage

const siteData = graphql`
  query ContactDataQuery {
    site {
      siteMetadata {
        email
        phone
      }
    }
  }
`
