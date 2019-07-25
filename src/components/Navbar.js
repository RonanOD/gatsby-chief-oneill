import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import twitter from '../img/twitter-logo.svg'
import linkedin from '../img/linkedin-logo.svg'
import logo from '../img/logo.svg'
import link from '../img/link.svg'

const Navbar = () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressPage(sort: { fields: wordpress_id }, limit: 5) {
          edges {
            node {
              title
              slug
            }
          }
        }
      }
    `}
    render={data => (
      <nav className="navbar is-transparent">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              <figure className="image">
                <img src={logo} alt="Chief O'Neill" style={{ width: '320px' }} />
              </figure>
            </Link>
          </div>
          <div className="navbar-start">
            {data.allWordpressPage.edges.map(edge => (
              <Link
                className="navbar-item"
                to={edge.node.slug}
                key={edge.node.slug}
              >
                {edge.node.title}
              </Link>
            ))}
          </div>
          <div className="navbar-end">
            <a
              className="navbar-item"
              href="https://twitter.com/ronanodriscoll"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <img src={twitter} alt="Twitter" />
              </span>
            </a>
            <a
              className="navbar-item"
              href="https://www.linkedin.com/in/ronanodriscoll/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <img src={linkedin} alt="LinkedIn" />
              </span>
            </a>
            <a
              className="navbar-item"
              href="http://ronanodriscoll.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <img src={link} alt="Homepage" />
              </span>
            </a>
          </div>
        </div>
      </nav>
    )}
  />
)

export default Navbar
