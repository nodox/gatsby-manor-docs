---
section: "Getting Started"
path: "/docs/quick-start/getting-started"
title: "Getting Started"
---

Jay bootstraps gatsby projects to work with the [themes](https://gatsbymanor.com/themes)
in found in the Gatsby Manor gallery. If you want more themes, hunt us down on
[Twitter](https://twitter.com/TheGatsbyManor) or [Github](https://github.com/gatsbymanor) for theme requests.
Theme contributions and PRs are welcome!

## Starting a new project
Starting from scratch is the easiest and fastest way to get started with `jay`.

```
$ yarn global add gatsby-cli gatsby-jay
$ jay init PROJECT_NAME
$ cd PROJECT_NAME
$ gatsby develop
```
Four steps and you are done! In these steps we install our gatsby and jay
dependencies, create a new gatsby project with `jay`, and run our starter project.

## Existing Gatsby projects
As of writing we do not recommend using jay with an existing gatsby. But you can
manually bootstrap your project so that it can work with jay. The best way to do
this would be to start a new separate project compare the theme structure to your
current structure. Here are the most helpful files to look at.

```
jay.json
jay-config.js
gatsby-config.js
gatsby-node.js
gatsby-ssr.js
gatsby-browser.js
themes/starter/jay-node.js
themes/starter/jay-config.js
themes/starter/jay-ssr.js
themes/starter/jay-browser.js
```

These will be the most useful files when bootstrapping your existing project.

[Edit on Github](https://github.com/gatsbymanor/gatsby-manor-docs)
