import React from 'react'
import Link from 'gatsby-link'

import "../styles/contribute.scss";

class Contribute extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.body.classList.add('contribute');
  }

  componentWillUnmount() {
    document.body.classList.remove('contribute');
  }

  render() {

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
        <div className="contribute--banner">
          <h2 className="contribute--banner--title">Contribute</h2>
        </div>
        <div className="container mr-auto contribute--section">
          <div>
            <h2 className="">How To Get Support</h2>
            <p>{data.productDescription.sectionOne}</p>
          </div>
          <div>
            <h2 className="">Github</h2>
            <p>Any questions about the Jay, Themes, or Gatsby Manor can be directed
              to <a href="https://github.com/gatsbymanor">Github</a>. Find the repo you
              are interested in and create an issue detailing your problem. A core member
              will join the conversation when they are free. PR's are welcome for easy fixes
              or brand new features!
            </p>
          </div>
          <div>
            <h2 className="">Twitter</h2>
            <p>Need our attention? Tweet us <a href="https://twitter.com/TheGatsbyManor">@TheGatsbyManor</a> with your news. Tell us
              what cool things you are building. We love to publish the communities'
              creations on the site!
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Contribute
