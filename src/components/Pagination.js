import React from 'react'
import { Link } from 'gatsby'

const Pagination = ({ pageContext, pathPrefix }) => {
  const { previousPagePath, nextPagePath } = pageContext

  return (
    <nav className="pagination" role="navigation">
      <div className="navbar navbar-menu">
        {previousPagePath && (
          <div className="navbar-item">
            <Link to={previousPagePath} rel="prev" className="pagination-previous">
              Previous
            </Link>
          </div>
        )}
        {nextPagePath && (
          <div className="navbar-item">
            <Link to={nextPagePath} rel="next" className="pagination-next">
              Next
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Pagination
