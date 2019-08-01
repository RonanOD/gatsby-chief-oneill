import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import ArchiveList from './ArchiveList'

export default class IndexPage extends React.Component {
  render() {
    const { posts, title } = this.props

    return (
      <div className="columns">
        <div className="column is-narrow" style={{flexBasis: 'auto', paddingTop: '8rem', paddingLeft: '3rem'}}>
          <div className="box container" style={{width: '300px'}}>
            <p className="title is-5">Archive</p>
            <ArchiveList/>
          </div>
        </div>
        <div className="column" style={{flexBasis: 'auto'}}>
          <section className="section">
            <div className="container">
              <div className="content">
                <h1 className="has-text-weight-bold is-size-2">{title}</h1>
              </div>
              {posts.map(({ node: post }) => (
                <div
                  className="content"
                  style={{ border: '1px solid #eaecee', padding: '2em 4em', background: 'white' }}
                  key={post.id}
                >
                  <article className="media" style={{display:'flex'}}>
                    <figure className="media-left" style={{flex: '0 0 256px'}}>
                      <Link to={post.slug} className="image is-256x256">
                        <img src={post.featured_media ? post.featured_media.source_url : ""}/>
                      </Link>
                    </figure>
                    <div className="media-content">
                      <div className="content">
                        <p>
                          <Link className="has-text-primary" to={post.slug} dangerouslySetInnerHTML={{__html:post.title}}>
                          </Link>
                          <span> &bull; </span>
                          <small>
                            {post.date} - posted by{' '}
                            <Link to={`/author/${post.author.slug}`}>
                              {post.author.name}
                            </Link>
                          </small>
                        </p>
                        <p
                            dangerouslySetInnerHTML={{
                              __html: post.excerpt.replace(/<p class="link-more.*/, ''),
                            }}
                        ></p>
                        <Link className="button is-small" to={post.slug}>
                            Keep Reading →
                        </Link>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </section>
      </div>
    </div>
    )
  }
}

IndexPage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}

export const pageQuery = graphql`
  fragment PostListFields on wordpress__POST {
    id
    title
    excerpt
    author {
      name
      slug
      avatar_urls {
        wordpress_48
      }
    }
    date(formatString: "MMMM DD, YYYY")
    slug
    featured_media{
      link
      source_url
    }
  }
`
