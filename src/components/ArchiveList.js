import React from 'react';
import {graphql, StaticQuery, Link} from 'gatsby';
import styled from 'styled-components';

// Styled components work with any 3rd party React component
const ArchiveItem = styled(Link)`
  display: block;
  padding: 8px 16px;
`


const ArchiveList = () => (
  <StaticQuery query={graphql`
  query {
    allWordpressPost(filter: {status: {eq: "publish"}}){
      edges{
        node{
          date_title: date(formatString: "MMMM, YYYY")
          date_url: date(formatString: "YYYY/MM")
          id
          status
        }
      }
    }
  }
  `} render={props => (
      <div>
        {filterEdges(props.allWordpressPost.edges).map(edge => (
          <ArchiveItem to={`/${edge.node.date_url}`} key={edge.node.id}>
            {edge.node.date_title}
          </ArchiveItem>
        ))}
      </div>
  )}/>   
)

const filterEdges = (edges) => {
  let filterObj = {};
  let uniqueNodes = [];
  edges.forEach(edge => {
    if(!filterObj[edge.node.date_title]) {
      filterObj[edge.node.date_title] = true;
      uniqueNodes.push(edge);
    }
  });
  return uniqueNodes;
}

export default ArchiveList;