import React from 'react'
import Layout from '../components/Layout'
import LogoType from '../components/images/LogoType'
import Ribbon from '../components/Ribbon'
import Row from '../components/Row'
import FlexCol from '../components/FlexCol'
import Col from '../components/Col'
import PageBtn from '../components/PageBtn'
import AbsolutePageBtn from '../components/AbsolutePageBtn'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Bangers from '../components/Bangers'
import MediaQuery from 'react-responsive'
import ContactStrip from '../components/ContactStrip'
import SEO from '../components/SEO'
import * as lmnts from '../data/Styles'

/*import TestAnim from '../components/TestAnim'*/

const IndexPage = () => (
  <Layout
    bgColor={lmnts.Clr.Tan}
    borderColor={lmnts.Clr.Tan}
    wrapBg={lmnts.Clr.Cream}
  >
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Bangers />
    <Header />

    {/* Mobile */}
    <MediaQuery maxWidth={lmnts.Base.Screen.Sm}>
      <FlexCol>
        {/* <TestAnim /> */}
        <Row
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Col>
            <LogoType />
          </Col>
        </Row>

        <Row
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Col>
            {<PageBtn label="Menu" to="menu" lineTop animDirection="down" />}
          </Col>
        </Row>

        <Row
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Col>
            <PageBtn label="Info" to="info" animDirection="down" />
          </Col>
        </Row>
        <Row
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Col>
            <PageBtn label="Contact" to="contact" animDirection="down" />
          </Col>
        </Row>
        <Row
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Col>
            <PageBtn
              label="Reserve a Table"
              to="https://www.opentable.com/r/von-bismarck-reservations-reno?restref=1294951&lang=en-US&ot_source=Restaurant%20website"
            />
          </Col>
        </Row>
        <Row
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Col>
            {/* <Ribbon /> */}

            <AbsolutePageBtn
              label="Reserve Oktoberfest Table"
              to="https://von-bismarck.square.site/"
              altBtn
            />
            <ContactStrip />
          </Col>
        </Row>
      </FlexCol>
    </MediaQuery>

    {/* Desktop */}
    <MediaQuery minWidth={lmnts.Base.Screen.Sm + 1}>
      <FlexCol>
        <Row
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          height="29vh"
        >
          <Col>{<PageBtn label="Menu" to="menu" animDirection="down" />}</Col>
        </Row>

        <Row
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          height="29vh"
        >
          <Col>
            <PageBtn label="Contact" to="contact" animDirection="right" />
          </Col>
          <Col>
            <LogoType />
          </Col>
          <Col>
            <PageBtn label="Info" to="info" animDirection="left" />
          </Col>
        </Row>
        <Row
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          height="29vh"
        >
          <Col>
            <ContactStrip />
            {/* <Ribbon /> */}
            <Row justifyContent="center">
              <AbsolutePageBtn
                label="Reserve a Table"
                to="https://www.opentable.com/r/von-bismarck-reservations-reno?restref=1294951&lang=en-US&ot_source=Restaurant%20website"
                altBtn
              />
            </Row>
          </Col>
        </Row>
      </FlexCol>
    </MediaQuery>
    <Footer />
  </Layout>
)

export default IndexPage
