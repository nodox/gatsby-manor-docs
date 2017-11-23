import React from 'react';
import Link from 'gatsby-link';
import Highlight from '../components/Highlight';
import Jumbotron from '../components/Jumbotron';
import CodeSnippet from '../components/CodeSnippet';

import "../styles/home.scss";

const IndexPage = () => {
  const data = {
    hero: {
      lead: {
        title: 'Jay',
        partOne: 'A Gatsby.js theme manager to manage your theme library.',
        partTwo: 'Find a theme. Let Jay do the rest.',
        callToAction: {
          text: 'View Gallery',
          path: '/themes',
        },
      },
    },
    highlights: [
      {
        headline: 'Theme Management',
        content: 'Jay makes it easy to mount component themes in your \
                  Gatsby project. Add multiple themes and Jay creates a theme \
                  library for you.',
      },
      {
        headline: 'Ecosystem of Themes',
        content: 'Jay has access to all the themes at Gatsby Manor meaning you \
                  can add production-ready themes to your project with a single \
                  command.',
      },
      {
        headline: 'Contribute Designs',
        content: 'Want to show off your theme? Make pull request to be included \
                  here at Gatsby Manor. Once merged, use Jay to get your theme.',
      },
    ],
    getttingStarted: [
      {
        step: 'Install Jay as a global dependency using npm.',
        code: '$ npm install -g gatsby-cli jay',
      },
      {
        step: 'Initialize a Gatsby.js project with theme compatibility.',
        code: '$ jay init jay-starter-kit',
      },
      {
        step: 'Start the project and visit localhost:8000 to see your theme!',
        code: '$ gatsby develop',
      },
    ],
    usingThemes: [
      {
        step: 'Add a theme to your project\'s theme library.',
        code: '$ jay add massively',
      },
      {
        step: 'Mount a theme from your library as the default theme.',
        code: '$ jay mount massively',
      },
      {
        step: 'Unmount the default theme and store in the library.',
        code: '$ jay unmount massively',
      },
    ],
  }

  return (
    <div>
      <Jumbotron center data={data.hero} />

      <div className="container mr-auto home--section home--highlight">
        {data.highlights.map((obj, idx) => {
          return (
            <Highlight key={idx} data={obj} />
          );
        })}
      </div>

      <div className="container mr-auto home--section home--guide">
        <h4>Getting Started</h4>
        {data.getttingStarted.map((obj, idx) => {
          return (
            <div key={idx}>
              <p>{obj.step}</p>
              <CodeSnippet>{obj.code}</CodeSnippet>
            </div>
          );
        })}
      </div>

      <div className="container mr-auto home--section home--guide">
        <h4>Using Themes</h4>
        {data.usingThemes.map((obj, idx) => {
          return (
            <div key={idx}>
              <p>{obj.step}</p>
              <CodeSnippet>{obj.code}</CodeSnippet>
            </div>
          );
        })}
      </div>

      <div className="home--banner">
        <h4 className="home--banner--lead">Deploy your first theme today!</h4>
        <Link to='/themes' className="home--banner--action -primary">View gallery</Link>
      </div>
    </div>
  );
}

export default IndexPage
