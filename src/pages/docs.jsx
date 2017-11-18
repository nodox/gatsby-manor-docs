import React from 'react'
import Link from 'gatsby-link'

const Docs = () => {
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
              <h4>Theme Management</h4>
              <p>{data.productDescription.sectionOne}</p>
            </div>
          <div>
            <h4>Deploy your fist theme today!</h4>
            <p className="lead">
              <Link color="primary">View gallery</Link>
            </p>
          </div>


    </div>
  )
}

export default Docs
