---
path: "/docs/contribute/contribute-a-theme"
title: "Contribute a Theme"
---

We welcome all opportunities to contribute a theme to the Gatsby Manor. If you
do not have a theme ready to contribute, read our theme development
[tutorial](/docs/tutorials/theme-development) to get a theme ready for
contribution. In this article we are going to create a pull request for a theme.

```
$ yarn run jay unmount <YOUR_THEME_NAME>
$ cd themes/<YOUR_THEME_NAME>
$ git init
$ git add .
$ git commit -m "initial commit"
$ git remote add origin <YOUR_GITHUB_URL>
$ git push -u origin master
```

Here we unmount our theme to reside in the themes folder of our project.
We create a new git project, and push the project to the newly created
repository. [Fork](https://github.com/gatsbymanor/gatsby-theme-kit#fork-destination-box)
the theme kit repo. Edit the [README.md](https://github.com/gatsbymanor/gatsby-theme-kit/blob/master/README.md)
to include the the title and link to your theme. Create a pull request with
your changes. 
