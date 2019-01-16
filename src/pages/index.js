import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = ({ data }) => {
  const postList = data.allMarkdownRemark
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[
          `blog`,
          `developer blog`,
          `front end developer`,
          `javascript`,
          `coding`,
          `react`,
          `gatsby`,
        ]}
      />
      {postList.edges.map(({ node }, i) => (
        <Link key={node.fields.slug} to={node.fields.slug} className="link">
          <div className="post-list">
            <h1>{node.frontmatter.title}</h1>
            <span>{node.frontmatter.date}</span>
            <p>{node.excerpt}</p>
          </div>
        </Link>
      ))}
    </Layout>
  )
}

export default IndexPage

export const listQuery = graphql`
  query ListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          fields {
            slug
          }
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM Do YYYY")
            title
          }
        }
      }
    }
  }
`
