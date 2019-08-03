import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PostList from '../components/PostList'

const Month = props => {
  const { data, pageContext } = props
  const { edges: posts, totalCount } = data.allWordpressPost
  const { title: siteTitle } = data.site.siteMetadata
  const { name: date_title } = pageContext
  const title = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } for ${date_title}`

  return (
    <Layout>
      <Helmet title={`${date_title} | ${siteTitle}`} />
      <PostList posts={posts} title={title} />
    </Layout>
  )
}

export default Month

export const pageQuery = graphql`
  query MonthPage($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allWordpressPost(filter: { categories: {elemMatch: { slug: { eq: $slug }}}} ) {
      totalCount
      edges {
        node {
          ...PostListFields
        }
      }
    }
  }
`
