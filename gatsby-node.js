const path = require('path');
const allMarkdownSchema = require('./graphql/markdown.schema').allMarkdownSchema;

exports.createPages = async ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const docsCliTemplate = path.resolve(`src/templates/docs.cli.js`);
  const themeDetailsTemplate = path.resolve(`src/templates/theme.details.js`);

  const allMarkdown = await graphql(allMarkdownSchema);
  if (allMarkdown.errors) {
    console.error(allMarkdown.errors);

    throw Error(allMarkdown.errors);
  }

  const allDocsCliPaths = allMarkdown.data.allMarkdownRemark.edges
  .filter(({ node }) => {
    return node.frontmatter.path.includes('/docs/cli');
  }).map(({ node }) => {
    return {
      path: node.frontmatter.path,
      title: node.frontmatter.title,
    }
  });

  allMarkdown.data.allMarkdownRemark.edges.forEach(({ node }, index) => {
    const nodePath = node.frontmatter.path;

    const validPath = nodePath.includes('/docs/cli') || nodePath.includes('/themes');
    if (validPath) {
      let template;
      let pageConfig;

      if (nodePath.includes('/docs/cli/')){
        template = docsCliTemplate;
        pageConfig = {
          path: nodePath,
          component: template,
          context: {
            cliPath: allDocsCliPaths
          }
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
