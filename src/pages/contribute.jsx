import React from 'react'
import Link from 'gatsby-link'

const Contribute = () => {
  const data = {
    productDescription: {
      sectionOne: '',
      sectionTwo: '',
      sectionThree: ''
    },
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
      <div>
        <h4>Deploy your fist theme today!</h4>
        <p className="lead">
          <Link to="/">View gallery</Link>
        </p>
      </div>
    </div>
  )
}

export default Contribute
