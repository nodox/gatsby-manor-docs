import React from 'react'
import Link from 'gatsby-link'
import Card from './Card'

export default class Grid extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      themes: [
        'Massively',
        'Etheral',
        'Exasper',
        'Dimensions',
        'Stellar',
        'West',
        'Apple'
      ],
    }
  }

  render() {
    const data = {
      themes: this.state.themes
    }

    return (
      <div>
        {data.themes.map((obj, idx) => {
          let tileData = {obj, idx}
          return (
            <div key={idx} className='gallery--grid--cell'>
              <Card data={tileData} />
            </div>
          );
        })}
      </div>
    );
  }
}
