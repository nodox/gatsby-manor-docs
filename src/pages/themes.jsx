import React from 'react'
import Link from 'gatsby-link'
import Jumbotron from '../components/Jumbotron';
import Card from '../components/Card';

import '../styles/index.scss';

export default class Themes extends React.Component {

  constructor() {
    super();

  }

  render() {

    const data = {
      themes: [
        { title: 'Massively',
          path: "/themes/massively"
        },
      ],
      hero: {
        lead: {
          title: 'Theme Gallery',
          partOne: 'Developers deserve beautiful designs.',
          partTwo: 'Find a theme. Let Jay do the rest.',
          callToAction: '',
        },
      },
    }

    return (
      <div>
        <Jumbotron center data={data.hero} />
        <div className="container mr-auto themes">
          {data.themes.map((obj, idx) => {
            return (
              <div key={idx}>
                <Card data={obj} />
              </div>
            );
          })}
        </div>
      </div>
    )

  }

}
