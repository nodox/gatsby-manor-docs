import React from 'react'
import Link from 'gatsby-link'

const Docs = () => {
  const data = {
    guides: [
      {
        title: 'Cli Commands',
        path: '/docs/cli'

      },
    ],
  }

  return (
    <div>
      <div className="docs--banner">
        <h2 className="docs--banner--title">Documentation</h2>
      </div>
      <div className="container mr-auto docs--grid">
        <Link className="docs--card" to={data.guides[0].path}>
          <div className="docs--card--body">
            <h4 className="docs--card--title">{data.guides[0].title}</h4>
            <p>
              Never used a package manager before or just new to Yarn?
              Let's get you up and running in just a couple of minutes.
              Let's get you up and running in just a couple of minutes.
            </p>
            <span className="card--action">Get Theme</span>
          </div>
        </Link>
        <Link className="docs--card" to={data.guides[0].path}>
          <div className="docs--card--body">
            <h4 className="docs--card--title">{data.guides[0].title}</h4>
            <p>
              Never used a package manager before or just new to Yarn?
              Let's get you up and running in just a couple of minutes.
            </p>
            <span className="card--action">Get Theme</span>
          </div>
        </Link>
        <Link className="docs--card" to={data.guides[0].path}>
          <div className="docs--card--body">
            <h4 className="docs--card--title">{data.guides[0].title}</h4>
            <p>
              Never used a package manager before or just new to Yarn?
              Let's get you up and running in just a couple of minutes.
            </p>
            <span className="card--action">Get Theme</span>
          </div>
        </Link>
        <Link className="docs--card" to={data.guides[0].path}>
          <div className="docs--card--body">
            <h4 className="docs--card--title">{data.guides[0].title}</h4>
            <p>
              Never used a package manager before or just new to Yarn?
              Let's get you up and running in just a couple of minutes.
            </p>
            <span className="card--action">Get Theme</span>
          </div>
        </Link>
        <Link className="docs--card" to={data.guides[0].path}>
          <div className="docs--card--body">
            <h4 className="docs--card--title">{data.guides[0].title}</h4>
            <p>
              Never used a package manager before or just new to Yarn?
              Let's get you up and running in just a couple of minutes.
            </p>
            <span className="card--action">Get Theme</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Docs
