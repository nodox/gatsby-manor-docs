---
path: "/docs/cli/mount"
date: "2016-04-12"
title: "Jay mount"
---

### `jay mount <name>`
Set a theme as the default theme.

The `mount` command looks for the theme specified by `name` in the `themes/` directory and moves the theme module to the `src/` folder. Since the theme is now active you will no longer find it in the `themes/` folder.

Under the hood, the `mount` command uses the filesystem to move themes between directories therefore you must be aware not to tamper with these keyword directories, namely `src/` and `themes/`.

`src/` is a folder required in all GatsbyJS projects.

### Options
None

### Defaults
None

### Examples
To install the massively theme from Gatsby Manor we can run `jay mount massively` from the project root.

[Edit on Github](https://github.com/gatsbymanor/gatsby-manor-content)
