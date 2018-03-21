const path = require('path');
const allMarkdownSchema = require('./graphql/markdown.schema').allMarkdownSchema;

exports.createPages = async ({ boundActionCreators, graphql }) => {
  const { createPage, createRedirect } = boundActionCreators;

  const docsDetailsTemplate = path.resolve(__dirname, `templates`, `docs.details.js`);
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

    const validPath = nodePath.includes('/docs');

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
      }

      createPage(pageConfig);
    }
  });

  const indexTemplate = path.resolve(__dirname, `templates`, `index.js`);
  let indexConfig = {
    path: '/',
    component: indexTemplate,
  };
  createPage(indexConfig);

  const errorTemplate = path.resolve(__dirname, `templates`, `404.js`);
  let errorConfig = {
    path: '/404',
    component: errorTemplate,
  };
  createPage(errorConfig);

  // Netlify _redirects file rules
  createRedirect({ fromPath: "/home", toPath: "https://gatsbymanor.com" });

  createRedirect({ fromPath: "/themes", toPath: "https://gatsbymanor.com/themes" });
  createRedirect({ fromPath: "/themes/*", toPath: "https://gatsbymanor.com/themes/:splat" });
};
