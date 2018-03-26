---
section: "CLI commands"
path: "/docs/cli/"
date: "2016-04-12"
title: "CLI Introduction"
---

Jay provides a rich set of command-line commands to help you with the various
tasks associated with theme management.

While all the commands are listed here for you, some of the most frequently used
commands are:

- jay init: starts a new Gatsby project with Jay
- jay add: adds a theme to your current project
- jay mount: sets a theme as the default theme of your project

## How it all comes together
At its core, `jay` is a cli tool made to enhance `gatsby` project to add support
for theme systems. There a couple of files that help make this possible.

### jay.json
Here we store the state of the current theme. The few items we are focused on are
theme name of the active theme and its version number. The minor version of the
theme denotes what type of structure we want our theme to follow. The current
version is `0.2.0`.

### jay-config
The core functionality of `jay` can be found here. This bootstrap file is the
provides a way to host multiple themes in your gatsby project without starting
a whole new project. Here we feed `gatsby` the lifecycle API hooks exported by each
theme.

### The lifecycle API files
These file wrap around the `gatsby-*.js` files and export the same gatsby lifecycle
API hooks you would normally define at the root of your project. Exporting
gatsby lifecycle API's via these files allows each theme to be its own self contained
module.
```
themes/starter/jay-node.js
themes/starter/jay-config.js
themes/starter/jay-ssr.js
themes/starter/jay-browser.js
```


[Edit on Github](https://github.com/gatsbymanor/gatsby-manor-docs)
