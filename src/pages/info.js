import React from 'react'
import Layout from '../components/Layout'
import Row from '../components/Row'
import FlexCol from '../components/FlexCol'
import Col from '../components/Col'
import SEO from '../components/SEO'
import PageHeader from '../components/PageHeader'
import LosGehts from '../components/images/LosGehts'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import * as lmnts from '../data/Styles'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import MediaQuery from 'react-responsive'

const InfoBody = styled.p`
  color: ${lmnts.Clr.Navy};
  text-decoration: none;
  text-align: center;
  letter-spacing: 2px;
  line-height: 1.4;
  font-size: 1vw;
  position: relative;
  top: -4vh;
  padding: ${lmnts.Base.Size / 4 + "px"};
  @media (max-width: ${lmnts.Base.Screen.Sm + 'px'}) {
    font-size: 3vw;
  }
`

const LinkWrap = styled(AniLink)`
  text-decoration: none;
`

const InfoPage = () => (
  <LinkWrap
    to="/"
    cover
    bg={lmnts.Clr.Cream}
    duration={lmnts.Anim.Page.Duration}
    direction="right"
  >
    <Layout
      bgColor={lmnts.Clr.Cream}
      borderColor={lmnts.Clr.Cream}
      wrapBg={lmnts.Clr.Tan}
    >
      <PageHeader label="Info" />
      <StaticQuery
        query={siteData}
        render={data => {
          return (
            <FlexCol>
              <Row>
                <Col>
                  <LosGehts />
                </Col>
              </Row>
              <Row justifyContent="center">
                <MediaQuery maxWidth={lmnts.Base.Screen.Sm}>
                  <Col maxWidth="80vw">
                    <InfoBody>
                      {data.site.siteMetadata.longDescription}
                    </InfoBody>
                  </Col>
                </MediaQuery>
                <MediaQuery minWidth={lmnts.Base.Screen.Sm + 1}>
                  <Col maxWidth="50vw">
                    <InfoBody>
                      {data.site.siteMetadata.longDescription}
                    </InfoBody>
                  </Col>
                </MediaQuery>
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
  query SiteDataQuery {
    site {
      siteMetadata {
        title
        longDescription
        author
      }
    }
  }
`
