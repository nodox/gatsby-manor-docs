---
path: "/docs/tutorials/theme-development"
title: "Theme Development"
---

Gatsby Manor has a wide range of themes in the theme gallery to use in our [GatsbyJS](https://www.gatsbyjs.org/)
project. However there might be a time when we feel no theme matches the
vision we have for our next project. The good news is that if we do not find a theme
we like, we can create a new theme. In this tutorial we are going to develop a new theme
using the [theme development kit](https://github.com/gatsbymanor/gatsby-theme-kit).

## Getting started
In this tutorial we are going to develop a theme called `Plexer` which will have
three pages: a home page, an about page, and a post page. The home page will have a
collection of blog posts (however these can be any type of content). The about page
will tell visitors more about the theme. The post page will show the full blog post
you clicked on from the home page. To start, we need a copy of the theme kit with
all the necessary dependencies.

```
$ git clone https://github.com/gatsbymanor/gatsby-theme-kit plexer
$ cd plexer && yarn
```

## Developing the theme
GatsbyJS has a great [tutorial](https://www.gatsbyjs.org/tutorial/) on building
a blog site. Our theme kit builds on top of that work so we can get up and
running as fast as possible. Our content is in the `/content` folder.
Our `posts` template, used to view individual posts, can be found in the
`/src/templates/post.js`. The `gatsby-node.js` file comes modified to query our
`/content` folder for markdown then inject it into the post template. Now we need
modify our home page to display our collection of posts.

```
// src/pages/index.js

import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import '../styles/plexer.scss';

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div>
      <h1>Hello World!</h1>
      <Link to="/about">About</Link>
      {posts
        .map(({ node: post }) => {
          return (
            <Link key={post.id} to={post.frontmatter.path} className="preview">
              <h3>{post.frontmatter.title}</h3>
              <p>{post.excerpt}</p>
            </Link>
          );
        })}
    </div>
  );
}


export const pageQuery = graphql`
  query PlexerIndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;


```

If we try to build our project using `$ gatsby develop`, we are going to see an error.
To resolve our error we need to create a stylesheet for our project since we defined
one in our `index.js` file.

```
// src/styles/plexer.scss

.preview {
  display: block;
  padding: 2rem;
  margin: 0 auto 25px;

  width: 40%;

  color: #000;
  text-decoration: none;
  border: 1px solid black;

  &:hover {
    text-decoration: underline;
  }

}

```

We can now see a collection of posts and we can view each one individually. All we
have left is to create a new file for our about page.

```
// src/pages/about.js

import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

export default function About() {
  return (
    <div>
      <h1>About</h1>
      <p>Here is an about page.</p>
      <Link to="/">Home</Link>
    </div>
  );
}
```
With our about page finished, we have a simple theme working.

## Writing tests for our theme
It's not enough to just develop a theme we also need to test it. Our theme kit
comes integrated with two types of testing tools: unit test, and feature tests.
Our unit tests suite is configured to work with the latest versions of Jest and Enzyme.
We are going to write snapshot tests to track any changes we might introduce
when we edit our theme again. All our unit tests can be found in the
`src/__tests__` folder. Let's write a unit tests for the index. For practice
try to add a spec for the about page.

```
// src/__tests__/Index.spec.js

import React from 'react';
import renderer from 'react-test-renderer';
import Index from '../pages/Index';

describe('<Index />', () => {
  const component = shallow(
    <Index />
  );

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });

});
```

Our feature tests are done with Selenium via the
[nightwatchJS](http://nightwatchjs.org/) project. Visit the site to learn more
on how to extend `nightwatch.conf.js` and write feature specs with a headless Chrome
browser.


## Finishing up
We now have a basic theme that is unit tested and can be modified to fit our
needs. To contribute our theme to the Gatsby Manor gallery, read [Contribute a Theme](/docs/contribute/contribute-a-theme) in our Docs.

[Edit on Github](https://github.com/gatsbymanor/gatsby-manor-content)
