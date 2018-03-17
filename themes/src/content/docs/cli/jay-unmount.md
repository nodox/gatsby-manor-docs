---
section: "CLI commands"
path: "/docs/cli/unmount"
date: "2016-04-12"
title: "Jay unmount"
---

### `jay unmount <name>`
Unset a theme.

The `unmount` command packages the `src` folder and stores the theme by `name` in the `themes/` directory. After the unmount event, there will be no `src` folder i.e. no theme will be active.

Beware, if there is a `src/` after this command executes the next time `jay mount` runs an error will occurs since the `src/` is a present directory which indicates there is an active theme.

Under the hood, the `unmount` command uses the filesystem to move themes between directories therefore you must be aware not to tamper with these keyword directories, namely `src/` and `themes/`.

### Options
None

### Defaults
None

### Examples
To install the massively theme from Gatsby Manor we can run `jay unmount massively` from the project root.

[Edit on Github](https://github.com/gatsbymanor/gatsby-manor-content)
