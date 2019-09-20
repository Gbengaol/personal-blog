import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export default ({ data }) => {
  console.log(data)
  return (
  <Layout>
    <SEO title="Home" />
    <h3>Gbenga's blog</h3>
    <h4>{data.allMarkdownRemark.totalCount}</h4>
    {
      data.allMarkdownRemark.edges.map(({node}) => 
        (
          <div key={node.id}>
            <h4>{ node.frontmatter.title} - {node.frontmatter.date}</h4>
            <p>{node.excerpt}</p>
          </div>
        )
      )
    }
  </Layout>
)}



export const query = graphql `
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          html
          excerpt
          frontmatter {
            date
            title
            description
          }
        }
      }
    }
  }
`
