import React from 'react'
import Layout from '../components/Layout'
import Row from '../components/Row'
import FlexCol from '../components/FlexCol'
import Col from '../components/Col'
import Footer from '../components/Footer'
import SEO from '../components/SEO'
import * as lmnts from '../data/Styles'

const IndexPage = () => (
  <Layout
    bgColor={lmnts.Clr.Cream}
    borderColor={lmnts.Clr.Cream}
    wrapBg={lmnts.Clr.Tan}
  >
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <FlexCol>
      <Row>
        <Col>
          Menu
        </Col>
      </Row>
    </FlexCol>
    <Footer />
  </Layout>
)

export default IndexPage
