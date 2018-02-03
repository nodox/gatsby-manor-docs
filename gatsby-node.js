const path = require('path');
const allMarkdownSchema = require('./graphql/markdown.schema').allMarkdownSchema;

exports.createPages = async ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const docsDetailsTemplate = path.resolve(`src/templates/docs.details.js`);
  const themeDetailsTemplate = path.resolve(`src/templates/theme.details.js`);

  const allMarkdown = await graphql(allMarkdownSchema);
  if (allMarkdown.errors) {
    console.error(allMarkdown.errors);

    throw Error(allMarkdown.errors);
  }

  const allDocPaths = allMarkdown.data.allMarkdownRemark.edges
    .filter(({ node }) => {
      return node.frontmatter.path.includes('/docs');
    })
    .map(({ node }) => {
      return {
        path: node.frontmatter.path,
        title: node.frontmatter.title,
      }
    });


  allMarkdown.data.allMarkdownRemark.edges.forEach(({ node }, index) => {
    const nodePath = node.frontmatter.path;

    const validPath = nodePath.includes('/docs') || nodePath.includes('/themes');
    if (validPath) {
      let template;
      let pageConfig;

      if (nodePath.includes('/docs/')){
        template = docsDetailsTemplate;
        pageConfig = {
          path: nodePath,
          component: template,
          context: {
            docs: allDocPaths,
          },
        };
      } else if (nodePath.includes('/themes/')){
        template = themeDetailsTemplate;
        pageConfig = {
          path: nodePath,
          component: template,
        };
      }

      createPage(pageConfig);
    }
  });

};
