import React, { Component } from 'react'
import { Link } from 'gatsby'

import { graphql, StaticQuery } from 'gatsby'

const Hours = props => (
  <StaticQuery
    query={graphql`
      {
        allDataJson {
          nodes {
            hours_one {
              hours
              label
            }
            hours_two {
              hours
              label
            }
          }
        }
      }
    `}
    render={data => (
      <>
        {data.allDataJson.nodes[0].hours_one.label} &nbsp;
        {data.allDataJson.nodes[0].hours_one.hours} &nbsp;
        {data.allDataJson.nodes[0].hours_two.label &&
          data.allDataJson.nodes[0].hours_two.label}
        &nbsp;
        {data.allDataJson.nodes[0].hours_two.hours &&
          data.allDataJson.nodes[0].hours_two.hours}
      </>
    )}
  />
)

export default Hours
