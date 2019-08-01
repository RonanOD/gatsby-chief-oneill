import React from 'react';
import {graphql, StaticQuery, Link} from 'gatsby';
import styled from 'styled-components';

// Styled components work with any 3rd party React component
const ArchiveItem = styled(Link)`
  color: white;
  display: block;
  padding: 8px 16px;
`

const ArchiveList = () => (
  <StaticQuery query={graphql`
  {
    allWordpressPost(filter: {status: {eq: "publish"}}){
      edges{
        node{
          date(formatString: "MMMM, YYYY")
          title
          slug
          status
        }
      }
    }
  }
  `} render={props => (
      <div>
        {props.allWordpressPost.edges[0].node.items.map(item => (
          <ArchiveItem to={`/${item.slug}`} key={item.title}>
            {item.date}
          </ArchiveItem>
        ))}
      </div>
  )}/>   
)

export default ArchiveList;