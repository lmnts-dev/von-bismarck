import React from 'react'
import Layout from '../components/Layout'
import LogoType from '../components/images/LogoType'
import Row from '../components/Row'
import FlexCol from '../components/FlexCol'
import Col from '../components/Col'
import PageBtn from '../components/PageBtn'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Bangers from '../components/Bangers'
import SEO from '../components/SEO'
import * as lmnts from '../data/Styles'

const IndexPage = () => (
  <Layout
    bgColor={lmnts.Clr.Tan}
    borderColor={lmnts.Clr.Tan}
    wrapBg={lmnts.Clr.Cream}
  >
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Bangers />
    <Header />
    <FlexCol>
      <Row>
        <Col>
          Info
        </Col>
      </Row>
    </FlexCol>
    <Footer />
  </Layout>
)

export default IndexPage
