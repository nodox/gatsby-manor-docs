---
section: "Getting Started"
path: "/docs/quick-start/getting-started"
title: "Getting Started"
---

There are a number of ways to use Gatsby Manor [themes](https://gatsbymanor.com/themes).
You can either start with a brand new project or include a theme into an existing [GatsbyJS](https://www.gatsbyjs.org/) project.

## Starting from Scratch
First we need to clone [gatsby-theme-kit](https://github.com/gatsbymanor/gatsby-theme-kit)
from Github and install all required dependencies.

```
$ git clone https://github.com/gatsbymanor/gatsby-theme-kit.git
$ cd gatsby-theme-kit
$ yarn
```

If you run `$ gatsby develop` we will see the default `Starter` theme. The page should
say `Hello World`. Now that we are all setup we can add our first theme. First we
need to unmount the active theme. Then, we can add a
new theme and set it to be the active theme. All of this is done with the [gatsby-jay](https://github.com/gatsbymanor/gatsby-jay) cli,
a theme management tool. We'll run the `jay` commands via yarn scripts to avoid
adding global dependency to your global npm modules. Now, let's try to use the [identity](https://gatsbymanor.com/themes/identity) theme.

```
$ yarn run jay unmount starter
$ yarn run jay add identity
$ yarn run jay mount identity
```

Now when you run `$ gatsby develop` the `identity` theme is present. Yay!

## Existing Gatsby projects
Gatsby Manor is built on the top of the [GatsbyJS](https://www.gatsbyjs.org/) ecosystem therefore these themes are compatible with an existing `gatsby` project but they might require a bit of tweaking. First we need to add the `jay` cli tool and unmount your current `/src` folder into its own local theme. Then,
download the target theme, for this tutorial let's use the [massively](https://gatsbymanor.com/themes/massively) theme.

```
$ yarn global add gatsby-jay
$ cd DIRECTOY_NAME
$ jay unmount my-old-theme
$ jay add massively
$ jay mount massively
```

Run `$ gatsby develop` to see the `massively` theme loaded. Yay!

## Other methods
Need a different setup? Let us know! Open an [issue](https://github.com/gatsbymanor/gatsby-theme-kit/issues) on the `gatsby-theme-kit` github,
or hunt us down on [Twitter](https://twitter.com/TheGatsbyManor) to tell us more about your project!

[Edit on Github](https://github.com/gatsbymanor/gatsby-manor-content)
