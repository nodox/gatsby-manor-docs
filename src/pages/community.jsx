import React from 'react'
import Link from 'gatsby-link'

const Community = () => {
  const data = {
    productDescription: {
      sectionOne: 'There are many ways to get in contact with the Gatsby Manor \
      team. An engineer is often around and available for questions.',
      sectionTwo: '',
      sectionThree: '',
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
      <div className="community--banner">
        <h2 className="community--banner--title">Community</h2>
      </div>
      <div className="container mr-auto community--section">
        <div>
          <h2 className="">How To Get Support</h2>
          <p>{data.productDescription.sectionOne}</p>
        </div>
        <div>
          <h2 className="">Stack Overflow</h2>
          <p>For debugging the community uses Stack Overflow to ask questions.
            Visit <a href="https://stackoverflow.com">Stack Overflow</a> to
            read current questions tagged with gatsby-manor or create your own.
          </p>
        </div>
        <div>
          <h2 className="">Github</h2>
          <p>Any questions about the Jay, Themes, or Gatsby Manor can be directed
            to Github. Create an issue detailing your problem and a core member
            will join the conversation. PR's are welcome!
          </p>
        </div>
        <div>
          <h2 className="">Twitter</h2>
          <p>Need our attention? Tweet us @GatsbyManor with your news. Tell us
            what cool things you are building. We love to publish the communities'
            creations on the site!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Community
