const filterEdgesByDateTitle = (edges) => {
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

module.exports = filterEdgesByDateTitle;