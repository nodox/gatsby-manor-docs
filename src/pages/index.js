import React from 'react';
import Link from 'gatsby-link';
import Highlight from '../components/Highlight';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import Jumbotron from '../components/Jumbotron';
import CodeSnippet from '../components/CodeSnippet';

const IndexPage = () => {
  const data = {
    hero: {
      lead: {
        title: 'Jay',
        partOne: 'A Gatsby.js theme manager to manage your theme library.',
        partTwo: 'Find a theme. Let Jay do the rest.',
        callToAction: {
          text: 'View Gallery',
          path: '/gallery',
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
      <Section>
        {data.highlights.map((obj, idx) => {
          return (
            <div key={idx}>
              <Highlight data={obj} />
            </div>
          );
        })}
      </Section>

      <Section>
        <div>
          <SectionTitle>Getting Started</SectionTitle>
          {data.getttingStarted.map((obj, idx) => {
            return (
              <div key={idx}>
                <p>{obj.step}</p>
                <CodeSnippet>{obj.code}</CodeSnippet>
              </div>
            );
          })}
        </div>
      </Section>

      <Section>
        <div>
          <SectionTitle>Using Themes</SectionTitle>
          {data.usingThemes.map((obj, idx) => {
            return (
              <div key={idx}>
                <p>{obj.step}</p>
                <CodeSnippet>{obj.code}</CodeSnippet>
              </div>
            );
          })}
        </div>
      </Section>

      <div>
        <div>
          <div className="gm--home--banner">
            <h4>Deploy your first theme today!</h4>
            <Link to='/gallery' color="primary">View gallery</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndexPage
