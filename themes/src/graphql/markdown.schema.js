exports.allMarkdownSchema = `{
  allMarkdownRemark(
    sort: { order: DESC, fields: [frontmatter___date] }
    limit: 1000
  ) {
    edges {
      node {
        excerpt(pruneLength: 250)
        html
        id
        timeToRead
        frontmatter {
          date
          path
          title
        }
      }
    }
  }
}`;
