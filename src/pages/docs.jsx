import React from 'react'
import Link from 'gatsby-link'

export default class Docs extends React.Component {
  constructor() {
    super();
  }

  render() {
    const data = {
      guides: [
        {
          title: 'Cli Commands',
          path: '/docs/cli/',
          excerpt: 'Jay has commands to allow theme installation, \
                    archival, management, deployment, and more.',
        },
      ],
    }

    return (
      <div>
        <div className="docs--banner">
          <h2 className="docs--banner--title">Documentation</h2>
        </div>
        <div className="container mr-auto docs--grid">
          {data.guides.map((obj, idx) => {
            return (
              <Link key={idx} className="docs--card" to={obj.path}>
                <div className="docs--card--body">
                  <h4 className="docs--card--title">{obj.title}</h4>
                  <p>{obj.excerpt}</p>
                  <span className="card--action">Read more</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}
